import axios from "../../utils/axios";
import {
  setProducts,
  setLoading,
  setError,
} from "../reducers/products";


export const fetchAllProducts = () => async (dispatch) => {
  let products = [];
  try {
    dispatch(setLoading(true));
    products = (await (await axios("/items")).data) ?? [];
  } catch (err) {
    dispatch(setError(err));
    // console.log(err);
  } finally {
    dispatch(setProducts(products));
    dispatch(setLoading(false));
  }
};

export const fetchAllAvailableFlavoursByCategory = async (category) => {
  try {
    const response = await axios("/items/flavours/" + category);
    return await (response.data) ?? [];
  } catch (error) {
    console.error(error);
  }
};

export const fetchBestSellers = () => async (dispatch) => {
  let products = [];
  let bestSellers = [];
  try {
    dispatch(setLoading(true));
    products = (await (await axios("/items")).data) ?? [];
    for (let i = 0; i < 16; i++) {
      bestSellers.push(products[i])
    }
   // console.log(bestSellers);
  } catch (err) {
    dispatch(setError(err));
    // console.log(err);
  } finally {
    dispatch(setProducts(bestSellers));
    dispatch(setLoading(false));
  }
};

export * from "./products";