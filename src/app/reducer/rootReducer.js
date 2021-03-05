import { convertToCountry } from 'features/ConvertToCoutry';
import {
  FETCH_CURRENCY_REQUEST,
  FETCH_CURRENCY_SUCCESS,
  FETCH_CURRENCY_FAILURE,
  FETCH_CHARTS_CURRENCY_REQUEST,
  FETCH_CHARTS_CURRENCY_SUCCESS,
  FETCH_CHARTS_CURRENCY_FAILURE,
  SET_SYMBOLS_VALUE,
  SET_BASE_VALUE,
  FETCH_SELECTED_CURRENCY_REQUEST,
  FETCH_SELECTED_CURRENCY_FAILURE,
  FETCH_SELECTED_CURRENCY_SUCCESS,
  SET_BASE_QUANTITY,
  SET_SYMBOL_QUANTITY,
  REVERSE_SELECTED_CURRENCIES,
} from 'app/actions/actions';

const initialState = {
  isLoading: false,
  isCheckedLoading: false,
  currency: [],
  chartData: [],
  baseValue: null,
  baseQuantity: 1,
  symbolQuantity: 1,
  error: [],
  symbolValue: null,
  baseChecked: [],
  symbolChecked: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case REVERSE_SELECTED_CURRENCIES:
      if (state.baseValue && state.symbolValue) {
        return {
          ...state,
          baseValue: action.payload.baseValue,
          symbolValue: action.payload.symbolValue,
        };
      }
      return {
        ...state,
      };
    case FETCH_SELECTED_CURRENCY_SUCCESS:
      return {
        ...state,
        isCheckedLoading: false,
        baseChecked: Object.entries(action.payload.data[0].rates).map((e) => ({
          value: e[1],
          label: e[0],
        })),
        symbolChecked: Object.entries(action.payload.data[1].rates).map((e) => ({
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
        symbolValue: action.payload.symbolValue,
      };
    case SET_BASE_QUANTITY:
      return {
        ...state,
        baseQuantity: action.payload.baseQuantity,
      };
    case SET_SYMBOL_QUANTITY:
      return {
        ...state,
        symbolQuantity: action.payload.symbolQuantity,
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
          label: convertToCountry(e[0]),
        })),
      };
    case FETCH_CURRENCY_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: [...state.error, action.payload.error],
      };
    case FETCH_CHARTS_CURRENCY_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_CHARTS_CURRENCY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        chartData: Object.entries(action.payload.data.rates).map((e) => ({
          value: e[1],
          data: e[0],
        })),
      };
    case FETCH_CHARTS_CURRENCY_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: [...state.error, action.payload.error],
      };
    default:
      return state;
  }
};
