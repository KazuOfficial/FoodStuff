import { ADD_TO_CART, REMOVE_FROM_CART, ADD_SUBTOTAL } from "./types";

export const addToCart = (productName, price) => (dispatch) => {
  const cartItem = { productName, price };
  dispatch({
    type: ADD_TO_CART,
    payload: cartItem,
  });
};

export const removeFromCart = (productName) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: productName,
  });
};

export const addSubtotal = (price) => (dispatch) => {
  dispatch({
    type: ADD_SUBTOTAL,
    payload: price,
  });
};
