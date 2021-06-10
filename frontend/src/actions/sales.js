import axios from "axios";

import {
  SALE_POST_FAIL,
  SALE_POST_SUCCESS,
  SALES_REPORT_FAIL,
  SALES_REPORT_SUCCESS,
} from "./types";

export const salePost =
  (productName, quantity, emailAddress, purchasePrice) => (dispatch) => {
    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    var saleDate = new Date().toISOString();
    // Request Body
    const body = JSON.stringify({
      productName,
      quantity,
      emailAddress,
      saleDate,
      purchasePrice,
    });

    console.log(productName, quantity, emailAddress, saleDate, purchasePrice);

    axios
      .post("https://localhost:44351/api/Sale", body, config)
      .then(() => {
        dispatch({
          type: SALE_POST_SUCCESS,
        });
      })
      .catch((err) => {
        //dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
          type: SALE_POST_FAIL,
        });
      });
  };

export const saleReport = () => (dispatch) => {
  axios
    .get("https://localhost:44351/api/Sale/GetSales")
    .then((res) => {
      dispatch({
        type: SALES_REPORT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      //dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: SALES_REPORT_FAIL,
      });
    });
};
