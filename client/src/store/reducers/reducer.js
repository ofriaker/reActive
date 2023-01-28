import { combineReducers } from "redux";
import buys from "./buys";
import products from "./products";


export default combineReducers({
  productsSlice: products,
  buysSlice: buys
});