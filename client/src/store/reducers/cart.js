import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        loading: true,
        error: null,
    },
    reducers: {
        setCart: (state, action) => {
            return { ...state, cart: [...action.payload] };
        },
        addItem: (state, action) => {
            let isInCart = -1;
            let newCart = [...state.cart];
            newCart.map((item, index) => {
                if (item._id == action.payload._id && item.flavour == action.payload.flavour) {
                    isInCart = index;
                }
            });
            if (isInCart === -1) {
                newCart.push({...action.payload});
                return {
                    ...state,
                    cart: newCart
                };
            } else {
                newCart[isInCart].quantity = newCart[isInCart].quantity +1;
            }
            
        },
        incQuantity: (state, action) => {
            let newCart = [...state.cart];
            newCart[action.payload].quantity = newCart[action.payload].quantity + 1;
        },
        decQuantity: (state, action) => {
            let newCart = [...state.cart];
            newCart[action.payload].quantity = newCart[action.payload].quantity - 1;
        },
        deleteItem: (state, action) => {
            let newCart = [...state.cart];
            newCart.splice(action.payload, 1);
            return {
                ...state,
                cart: newCart
            };
        },
        setLoading: (state, action) => {
            return { ...state, loading: action.payload };
        },
        setError: (state, action) => {
            return { ...state, error: action.payload };
        },
    },
});
            
export const { setCart, incQuantity, decQuantity, addItem, deleteItem, setLoading, setError } = cartSlice.actions;
export default cartSlice.reducer;