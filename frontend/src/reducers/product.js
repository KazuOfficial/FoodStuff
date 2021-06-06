import {
  PRODUCTLOAD_LOADING,
  PRODUCTLOAD_SUCCESS,
  PRODUCTLOAD_FAIL,
} from "../actions/types";

const initialState = {
  productList: null,
  isProductLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PRODUCTLOAD_LOADING:
      return {
        ...state,
        isProductLoading: true,
      };
    case PRODUCTLOAD_SUCCESS:
      return {
        ...state,
        isProductLoading: false,
        productList: action.payload,
      };
    case PRODUCTLOAD_FAIL:
      return {
        ...state,
        productList: null,
        isProductLoading: false,
      };
    default:
      return state;
  }
}
