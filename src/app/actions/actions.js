import axios from 'axios';

export const FETCH_CURRENCY_REQUEST = 'FETCH_CURRENCY_REQUEST';
export const FETCH_CURRENCY_SUCCESS = 'FETCH_CURRENCY_SUCCESS';
export const FETCH_CURRENCY_FAILURE = 'FETCH_CURRENCY_FAILURE';
export const FETCH_CHARTS_CURRENCY_REQUEST = 'FETCH_CHARTS_CURRENCY_REQUEST';
export const FETCH_CHARTS_CURRENCY_SUCCESS = 'FETCH_CHARTS_CURRENCY_SUCCESS';
export const FETCH_CHARTS_CURRENCY_FAILURE = 'FETCH_CHARTS_CURRENCY_FAILURE';
export const FETCH_SELECTED_CURRENCY_REQUEST = 'FETCH_SELECTED_CURRENCY_REQUEST';
export const FETCH_SELECTED_CURRENCY_SUCCESS = 'FETCH_SELECTED_CURRENCY_SUCCESS';
export const FETCH_SELECTED_CURRENCY_FAILURE = 'FETCH_SELECTED_CURRENCY_FAILURE';
export const SET_BASE_VALUE = 'SET_BASE_VALUE';
export const SET_SYMBOLS_VALUE = 'SET_SYMBOLS_VALUE';
export const SET_SYMBOL_QUANTITY = 'SET_SYMBOL_QUANTITY';
export const SET_BASE_QUANTITY = 'SET_BASE_QUANTITY';
export const REVERSE_SELECTED_CURRENCIES = 'REVERSE_SELECTED_CURRENCIES';

export const fetchCurrency = () => (dispatch) => {
  dispatch({ type: FETCH_CURRENCY_REQUEST });

  return axios
    .get('https://api.exchangeratesapi.io/latest')
    .then((res) => {
      console.log(res);
      dispatch({
        type: FETCH_CURRENCY_SUCCESS,
        payload: {
          data: res.data,
        },
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: FETCH_CURRENCY_FAILURE,
        payload: error,
      });
    });
};

export const fetchSelectedCurrency = (base, symbol) => (dispatch) => {
  dispatch({ type: FETCH_SELECTED_CURRENCY_REQUEST });

  const baseRequest = axios.get(
    `https://api.exchangeratesapi.io/latest?base=${base}&symbols=${symbol}`,
  );
  const symbolRequest = axios.get(
    `https://api.exchangeratesapi.io/latest?base=${symbol}&symbols=${base}`,
  );

  return axios
    .all([baseRequest, symbolRequest])
    .then(
      axios.spread((...responses) => {
        const baseResponse = responses[0];
        const symbolResponse = responses[1];
        console.log(baseResponse.data, symbolResponse.data);
        dispatch({
          type: FETCH_SELECTED_CURRENCY_SUCCESS,
          payload: {
            data: [baseResponse.data, symbolResponse.data],
          },
        });
      }),
    )
    .catch((error) => {
      console.log(error);
      dispatch({
        type: FETCH_SELECTED_CURRENCY_FAILURE,
        payload: error,
      });
    });
};

export const setBaseValue = (base) => (dispatch) => {
  dispatch({
    type: SET_BASE_VALUE,
    payload: {
      base,
    },
  });
};

export const setSymbolValue = (symbolValue) => (dispatch) => {
  console.log(symbolValue);
  dispatch({
    type: SET_SYMBOLS_VALUE,
    payload: {
      symbolValue,
    },
  });
};

export const setBaseQuantity = (baseQuantity) => (dispatch) => {
  dispatch({
    type: SET_BASE_QUANTITY,
    payload: {
      baseQuantity: Number(baseQuantity),
    },
  });
};

export const setSymbolQuantity = (symbolQuantity) => (dispatch) => {
  dispatch({
    type: SET_SYMBOL_QUANTITY,
    payload: {
      symbolQuantity: Number(symbolQuantity),
    },
  });
};

export const reverseSelectedCurrencies = () => (dispatch, getState) => {
  dispatch({
    type: REVERSE_SELECTED_CURRENCIES,
    payload: {
      symbolValue: getState().baseValue,
      baseValue: getState().symbolValue,
    },
  });
};

export const chartData = () => (dispatch, getState) => {
  const base = getState().baseValue;
  const symbol = getState().symbolValue;
  const now = new Date().toJSON().slice(0, 10);

  dispatch({ type: FETCH_CHARTS_CURRENCY_REQUEST });

  return axios
    .get(
      `https://api.exchangeratesapi.io/history?start_at=2021-02-19&end_at=${now}&base=${base}&symbols=${symbol}`,
    )
    .then((res) => {
      console.log(res);
      dispatch({
        type: FETCH_CHARTS_CURRENCY_SUCCESS,
        payload: {
          data: res.data,
        },
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: FETCH_CHARTS_CURRENCY_FAILURE,
        payload: error,
      });
    });
};
