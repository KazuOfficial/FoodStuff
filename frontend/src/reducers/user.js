import {
  USERLOAD_SUCCESS,
  USERLOAD_FAIL,
  USERADD_SUCCESS,
  USERADD_FAIL,
} from "../actions/types";

const initialState = {
  userList: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USERLOAD_SUCCESS:
      return {
        ...state,
        userList: action.payload,
      };
    case USERLOAD_FAIL:
      return {
        ...state,
      };
    case USERADD_SUCCESS:
      window.location.reload();
      return {
        ...state,
      };
    case USERADD_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
