import axios from 'axios';

export const FETCH_CURRENCY_REQUEST = 'FETCH_CURRENCY_REQUEST';
export const FETCH_CURRENCY_SUCCESS = 'FETCH_CURRENCY_SUCCESS';
export const FETCH_CURRENCY_FAILURE = 'FETCH_CURRENCY_FAILURE';

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
