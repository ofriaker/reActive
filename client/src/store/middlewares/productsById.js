import axios from "../../utils/axios";
import {
  setProducts,
  setLoading,
  setError,
} from "../reducers/products";


export const fetchProductsById = ({id}) => async (dispatch) => {
  let products = [];
  try {
    dispatch(setLoading(true));
    products = (await (await axios("/items?category=${id}")).data) ?? [];
    console.log(products);
  } catch (err) {
    dispatch(setError(err));
    console.log(err);
  } finally {
    dispatch(setProducts(products));
    dispatch(setLoading(false));
  }
};

export * from "./productsById";