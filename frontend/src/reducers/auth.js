import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
} from "../actions/types";

const initialState = {
  //token: localStorage.getItem("token"),
  access_Token: null,
  userName: null,
  isAuthenticated: null,
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case LOGIN_SUCCESS:
      //console.log(action.payload.access_Token);
      //localStorage.setItem("token", action.payload.access_Token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
      //localStorage.removeItem("access_Token");
      return {
        ...state,
        access_Token: null,
        userName: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
}
