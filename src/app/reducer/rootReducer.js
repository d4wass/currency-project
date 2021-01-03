import {
  FETCH_CURRENCY_REQUEST,
  FETCH_CURRENCY_SUCCESS,
  FETCH_CURRENCY_FAILURE,
  SET_SYMBOLS_VALUE,
  SET_BASE_VALUE,
  FETCH_SELECTED_CURRENCY_REQUEST,
  FETCH_SELECTED_CURRENCY_FAILURE,
  FETCH_SELECTED_CURRENCY_SUCCESS,
} from 'app/actions/actions';

const initialState = {
  isLoading: false,
  isCheckedLoading: false,
  currency: [],
  baseValue: null,
  error: [],
  symbols: null,
  checked: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SELECTED_CURRENCY_SUCCESS:
      return {
        ...state,
        isCheckedLoading: false,
        checked: Object.entries(action.payload.data.rates).map((e) => ({
          value: e[1],
          label: e[0],
        })),
      };
    case FETCH_SELECTED_CURRENCY_FAILURE:
      return {
        ...state,
        isCheckedLoading: false,
        error: [...state.error, action.payload.error],
      };
    case FETCH_SELECTED_CURRENCY_REQUEST:
      return {
        ...state,
        isCheckedLoading: true,
      };
    case SET_BASE_VALUE:
      return {
        ...state,
        baseValue: action.payload.base,
      };
    case SET_SYMBOLS_VALUE:
      return {
        ...state,
        symbols: action.payload.symbols,
      };
    case FETCH_CURRENCY_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_CURRENCY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currency: Object.entries(action.payload.data.rates).map((e) => ({
          value: e[1],
          label: e[0],
        })),
        // baseValue: action.payload.data.base,
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
