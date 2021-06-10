import axios from "axios";

import {
  USERLOAD_SUCCESS,
  USERLOAD_FAIL,
  USERADD_SUCCESS,
  USERADD_FAIL,
} from "./types";

export const loadUsers = () => (dispatch) => {
  axios
    .get("https://localhost:44351/api/User/GetAllUsers")
    .then((res) => {
      dispatch({
        type: USERLOAD_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      //dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: USERLOAD_FAIL,
      });
    });
};

export const addUser =
  (firstName, lastName, emailAddress, password) => (dispatch) => {
    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // Request Body
    const body = JSON.stringify({
      firstName,
      lastName,
      emailAddress,
      password,
    });

    axios
      .post("https://localhost:44351/api/User/Register", body, config)
      .then((res) => {
        dispatch({
          type: USERADD_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        //dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
          type: USERLOAD_FAIL,
        });
      });
  };
