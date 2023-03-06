import {
    ADD_TO_CART,
    CART_PRODUCT_DECREMENT,
    CART_PRODUCT_INCREMENT,
    DELETE_FROM_CART
} from "../actionTypes/actionTypes";

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const exist = state.find((product) => product.id === action.payload.id);
      if (!exist) {
        return [...state, { ...action.payload, productQuantity: 1 }];
      } else {
        exist.productQuantity = exist.productQuantity + 1;
        const existingProduct = state.filter(
          (product) => product.id !== action.payload.id
        );
        return [...existingProduct, exist];
      }

    case CART_PRODUCT_INCREMENT:
      return state.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            productQuantity: product.productQuantity + 1,
          };
        }
        return product;
      });

    case CART_PRODUCT_DECREMENT:
      return state.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            productQuantity: product.productQuantity - 1,
          };
        }
        return product;
      });

    case DELETE_FROM_CART:
      return state.filter((product) => product.id !== action.payload);
    default:
      return state;
  }
};

export default cartReducer;
