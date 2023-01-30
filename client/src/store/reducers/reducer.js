import { combineReducers } from "redux";
import buys from "./buys";
import products from "./products";
import user from "./users";


export default combineReducers({
  productsSlice: products,
  buysSlice: buys,
  userSlice: user,
});