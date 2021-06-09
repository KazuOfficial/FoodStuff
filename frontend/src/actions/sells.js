import axios from "axios";

import { SALE_POST_FAIL, SALE_POST_SUCCESS } from "./types";

export const salePost =
  (productName, description, retailPrice) => (dispatch) => {
    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // Request Body
    const body = JSON.stringify({ productName, description, retailPrice });

    axios
      .post("https://localhost:44351/api/Sale/AddProduct", body, config)
      .then((res) => {
        dispatch({
          type: SALE_POST_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        //dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
          type: SALE_POST_FAIL,
        });
      });
  };
