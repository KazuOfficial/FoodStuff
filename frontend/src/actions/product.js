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
  (productName, description, retailPrice, token) => (dispatch) => {
    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };

    console.log(config);
    // Request Body
    const body = JSON.stringify({ productName, description, retailPrice });

    axios
      .post("https://localhost:44351/api/Product/AddProduct", body, config)
      .then(() => {
        dispatch({
          type: PRODUCTADD_SUCCESS,
        });
        dispatch(loadProducts());
      })
      .catch((err) => {
        console.log(err);
        //dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
          type: PRODUCTADD_FAIL,
        });
      });
  };

export const deleteProduct = (productName, token) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
    params: {
      productName,
    },
  };

  axios
    .post("https://localhost:44351/api/Product/DeleteProduct", null, config)
    .then(() => {
      dispatch({
        type: PRODUCTDELETE_SUCCESS,
      });
      dispatch(loadProducts());
    })
    .catch((err) => {
      //dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: PRODUCTDELETE_FAIL,
      });
    });
};
