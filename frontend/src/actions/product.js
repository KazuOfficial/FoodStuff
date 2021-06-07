import axios from "axios";

import {
  PRODUCTLOAD_SUCCESS,
  PRODUCTLOAD_FAIL,
  PRODUCTLOAD_LOADING,
  PRODUCTADD_SUCCESS,
  PRODUCTADD_FAIL,
  PRODUCTDELETE_SUCCESS,
  PRODUCTDELETE_FAIL,
} from "./types";

export const loadProducts = () => (dispatch) => {
  // User Loading
  dispatch({ type: PRODUCTLOAD_LOADING });

  axios
    .get("https://localhost:44351/api/Product")
    .then((res) => {
      dispatch({
        type: PRODUCTLOAD_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      //dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: PRODUCTLOAD_FAIL,
      });
    });
};

export const addProduct =
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
      .post("https://localhost:44351/api/Product/AddProduct", body, config)
      .then((res) => {
        dispatch({
          type: PRODUCTADD_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        //dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
          type: PRODUCTADD_FAIL,
        });
      });
  };

export const deleteProduct = (productName) => (dispatch) => {
  // Headers
  const params = {
    params: {
      productName,
    },
  };

  axios
    .post("https://localhost:44351/api/Product/DeleteProduct", null, params)
    .then((res) => {
      dispatch({
        type: PRODUCTDELETE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      //dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: PRODUCTDELETE_FAIL,
      });
    });
};
