import { ADD_SUBTOTAL, ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types";

const initialState = {
  cart: [],
  quantity: 0,
  subTotal: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: state.cart.concat(action.payload),
        quantity: state.quantity + 1,
      };
    case REMOVE_FROM_CART:
      console.log(state.cart[0].productName);
      return {
        ...state,
        cart: state.cart.splice(
          state.cart.findIndex((v) => v.productName === action.payload),
          1
        ),
      };
    case ADD_SUBTOTAL:
      return {
        ...state,
        subTotal: state.subTotal + action.payload,
      };
    default:
      return state;
  }
}
