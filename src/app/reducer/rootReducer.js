import {
  FETCH_CURRENCY_REQUEST,
  FETCH_CURRENCY_SUCCESS,
  FETCH_CURRENCY_FAILURE,
} from 'app/actions/actions';

const initialState = {
  isLoading: false,
  currency: null,
  base: null,
  error: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENCY_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_CURRENCY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currency: action.payload.data.rates,
        base: action.payload.data.base,
      };
    case FETCH_CURRENCY_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: [...state.error, action.payload.error],
      };
    default:
      return state;
  }
};
