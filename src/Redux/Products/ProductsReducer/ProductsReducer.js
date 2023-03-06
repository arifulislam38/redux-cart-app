import {
    ADD_PRODUCTS,
    DELETE_REFUND,
    INCREASE_QUANTITY,
    REDUCE_QUANTITY
} from "../actionTypes/actionTypes";

const initialState = [
//   {
//     id: 1,
//     productName: "Spring and summershoes",
//     category: "mens shoe",
//     productImage:
//       "https://img.freepik.com/premium-psd/black-friday-exclusive-offer-promotional-social-media-template_406904-36.jpg",
//     productPrice: "111",
//     productQuantity: 10,
//   },
//   {
//     id: 2,
//     productName: "Spring and summershoes",
//     category: "mens shoe",
//     productImage:
//       "https://static-01.daraz.com.bd/p/14d25ef3387c8dd83469a7385ea61900.jpg",
//     productPrice: "111",
//     productQuantity: 10,
//   },
];

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return [...state, { id: state.length + 1, ...action.payload }];

    case REDUCE_QUANTITY:
      return state.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            productQuantity: product.productQuantity - 1,
          };
        }
        return product;
      });

    case INCREASE_QUANTITY:
      return state.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            productQuantity: product.productQuantity + 1,
          };
        }
        return product;
      });

    case DELETE_REFUND:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            productQuantity: product.productQuantity + action.payload.quantity,
          };
        }
        return product;
      });

    default:
      return state;
  }
};

export default productsReducer;
