export const selectCart = (state) => state.cartSlice.cart;
export const isLoading = (state) => state.cartSlice.loading;


export * from "./cart";