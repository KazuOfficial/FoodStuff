import {
  PRODUCTLOAD_LOADING,
  PRODUCTLOAD_SUCCESS,
  PRODUCTLOAD_FAIL,
  PRODUCTADD_SUCCESS,
  PRODUCTDELETE_SUCCESS,
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
    case PRODUCTDELETE_SUCCESS:
    case PRODUCTADD_SUCCESS:
      window.location.reload();
      return {
        ...state,
      };
    default:
      return state;
  }
}
