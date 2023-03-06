import { combineReducers } from "redux";
import cartReducer from "../ cart/cartReducer/cartReducer";
import productsReducer from "../Products/ProductsReducer/ProductsReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export default rootReducer;
