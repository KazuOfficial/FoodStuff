import {
  SALES_REPORT_FAIL,
  SALES_REPORT_SUCCESS,
  SALE_POST_SUCCESS,
  SALE_POST_FAIL,
} from "../actions/types";

const initialState = {
  saleList: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SALES_REPORT_SUCCESS:
      return {
        ...state,
        saleList: action.payload,
      };
    case SALE_POST_SUCCESS:
      window.location.href = "/purchasesuccessful";
      return {
        ...state,
      };
    case SALE_POST_FAIL:
    case SALES_REPORT_FAIL:
      return {
        ...state,
        saleList: null,
      };
    default:
      return state;
  }
}
