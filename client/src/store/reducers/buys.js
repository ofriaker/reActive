import { createSlice } from "@reduxjs/toolkit";

export const buysSlice = createSlice({
  name: "buys",
  initialState: {
    buys: [],
    loading: true,
    error: null,
  },
  reducers: {
    setBuys: (state, action) => {
      return { ...state, buys: [...action.payload] };
    },
  },
});

export const { setBuys } = buysSlice.actions;
export default buysSlice.reducer;