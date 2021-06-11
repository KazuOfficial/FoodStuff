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
      });
    });
};

// LOGOUT USER
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT_SUCCESS });
};

// Setup config with token - helper function
export const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
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
