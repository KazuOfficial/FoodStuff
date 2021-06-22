import axios from "axios";

import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS } from "./types";

// LOGIN USER
export const login = (username, password) => (dispatch) => {
  const grant_type = "password";

  const params = {
    params: {
      username,
      password,
      grant_type,
    },
  };

  axios
    .post("https://localhost:44351/token", null, params)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      //dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOGIN_FAIL,
        payload: err.message,
      });
    });
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT_SUCCESS });
};

export const tokenConfig = (getState) => {
  const token = getState().auth.token;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
};
