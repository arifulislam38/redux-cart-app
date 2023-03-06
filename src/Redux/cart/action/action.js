import {
  ADD_TO_CART,
  CART_PRODUCT_DECREMENT,
  CART_PRODUCT_INCREMENT,
  DELETE_FROM_CART
} from "../actionTypes/actionTypes";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const deleteFromCart = (id) => {
  return {
    type: DELETE_FROM_CART,
    payload: id,
  };
};

export const cartProductIncrement = (id) => {
  return {
    type: CART_PRODUCT_INCREMENT,
    payload: id,
  };
};

export const cartProductDecrement = (id) => {
  return {
    type: CART_PRODUCT_DECREMENT,
    payload: id,
  };
};
