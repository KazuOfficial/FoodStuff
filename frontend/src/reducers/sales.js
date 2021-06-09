import { SALES_REPORT_FAIL, SALES_REPORT_SUCCESS } from "../actions/types";

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
    case SALES_REPORT_FAIL:
      return {
        ...state,
        saleList: null,
      };
    default:
      return state;
  }
}
