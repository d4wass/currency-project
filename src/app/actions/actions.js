import axios from 'axios';

export const FETCH_CURRENCY_REQUEST = 'FETCH_CURRENCY_REQUEST';
export const FETCH_CURRENCY_SUCCESS = 'FETCH_CURRENCY_SUCCESS';
export const FETCH_CURRENCY_FAILURE = 'FETCH_CURRENCY_FAILURE';
export const FETCH_SELECTED_CURRENCY_REQUEST = 'FETCH_SELECTED_CURRENCY_REQUEST';
export const FETCH_SELECTED_CURRENCY_SUCCESS = 'FETCH_SELECTED_CURRENCY_SUCCESS';
export const FETCH_SELECTED_CURRENCY_FAILURE = 'FETCH_SELECTED_CURRENCY_FAILURE';
export const SET_BASE_VALUE = 'SET_BASE_VALUE';
export const SET_SYMBOLS_VALUE = 'SET_SYMBOLS_VALUE';

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

  return axios
    .get(`https://api.exchangeratesapi.io/latest?base=${base}&symbols=${symbol}`)
    .then((res) => {
      console.log(res);
      dispatch({
        type: FETCH_SELECTED_CURRENCY_SUCCESS,
        payload: {
          data: res.data,
        },
      });
    })
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
export const setSymbolValue = (symbols) => (dispatch) => {
  console.log(symbols);
  dispatch({
    type: SET_SYMBOLS_VALUE,
    payload: {
      symbols,
    },
  });
};
