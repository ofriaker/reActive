export const selectCart = (state) => state.productsSlice.products;
export const isLoading = (state) => state.productsSlice.loading;


export * from "./cart";