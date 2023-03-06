import {
  ADD_PRODUCTS,
  DELETE_REFUND,
  INCREASE_QUANTITY,
  REDUCE_QUANTITY
} from "../actionTypes/actionTypes";

export const addProducts = (product) => {
  return {
    type: ADD_PRODUCTS,
    payload: product,
  };
};

export const reduceQuantity = (id) => {
  return {
    type: REDUCE_QUANTITY,
    payload: id,
  };
};

export const increaseQuantity = (id) => {
  return {
    type: INCREASE_QUANTITY,
    payload: id,
  };
};

export const deleteRefund = (id, quantity) => {
  return {
    type: DELETE_REFUND,
    payload: { id, quantity },
  };
};
