import axios from "axios";

import {
  PRODUCTLOAD_SUCCESS,
  PRODUCTLOAD_FAIL,
  PRODUCTLOAD_LOADING,
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
