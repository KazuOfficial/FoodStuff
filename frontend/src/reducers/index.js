import { combineReducers } from "redux";
import auth from "./auth";
import product from "./product";
import cart from "./cart";
import sales from "./sales";

export default combineReducers({
  auth,
  product,
  cart,
  sales,
});
