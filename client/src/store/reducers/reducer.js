import { combineReducers } from "redux";
import buys from "./buys";
import products from "./products";
import cart from "./cart";
import user from "./users";


export default combineReducers({
  productsSlice: products,
  cartSlice: cart,
  userSlice: user,
});