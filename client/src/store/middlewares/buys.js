import axios from "../../utils/axios";
import {setBuys} from "../reducers/buys";
import { selectProducts } from "../selectors/products";


export const fetchAllBuys = (email) => async (dispatch) => {
  let buys = [];
  try {
    buys = (await (await axios("/buys/"+email)).data ?? []);
    // console.log(buys);
  } catch (err) {
    // console.log(err);
  } finally {
    dispatch(setBuys(buys));
  }
};

export * from "./buys";