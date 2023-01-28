import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [
        {
            name: "Clear Whey Isolate",
            imgUrl: "https://static.thcdn.com/productimg/1600/1600/12081396-1994792209042321.jpg",
            quantity: 1,
            price: 5,
            flavour: "Peach Tea"
        },
        {
            name: "Sparkling Energy Drink",
            imgUrl: "https://static.thcdn.com/productimg/1600/1600/12770761-5274858302518136.jpg",
            quantity: 2,
            price: 8,
            flavour: "Mixed Berry"
        },
    ],
        loading: true,
        error: null,
    },
    reducers: {
        setCart: (state, action) => {
            return { ...state, cart: [...action.payload] };
        },
        setLoading: (state, action) => {
            return { ...state, loading: action.payload };
        },
        setError: (state, action) => {
            return { ...state, error: action.payload };
        },
    },
});
            
export const { setCart, setLoading, setError } = cartSlice.actions;
export default cartSlice.reducer;