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

export const updateUser = (userDetails) => async (dispatch) => {
  let user = [];
  try {
    const response = (await (await axios.put("/users/"+userDetails.email, userDetails)).data ?? []);
    user.push(response);
  } catch (err) {
    console.log(err);
  } finally {
    dispatch(setUser(user));
  }
};

export * from "./users";