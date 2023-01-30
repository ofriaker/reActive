import axios from "../../utils/axios";
import { setUser } from "../reducers/users";



export const fetchUser = (email) => async (dispatch) => {
  let user = [];
  try {
    user = (await (await axios("/users/"+email)).data ?? []);
  } catch (err) {
    console.log(err);
  } finally {
    dispatch(setUser(user));
  }
};

export * from "./users";