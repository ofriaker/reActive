import axios from "../../utils/axios";
import {setBuys} from "../reducers/buys";


export const fetchAllBuys = (email) => async (dispatch) => {
  let buys = [];
  try {
    buys = (await (await axios("/buys/"+email)).data) ?? [];
  } catch (err) {
    console.log(err);
  } finally {
    dispatch(setBuys(buys));
  }
};

export * from "./buys";