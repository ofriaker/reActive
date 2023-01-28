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
        // send the new item
        addItem: (state, action) => {
            let newCart = [...cartSlice.cart];
            newCart.add(...action.payload);
            return {...state, cart: [...newCart]};
        },
        //only send index
        incQuantity: (state, action) => {
            let newCart = [...state.cart];
            newCart[action.payload].quantity = newCart[action.payload].quantity + 1;
        },
        //only send index
        decQuantity: (state, action) => {
            let newCart = [...state.cart];
            newCart[action.payload].quantity = newCart[action.payload].quantity - 1;
        },
        setLoading: (state, action) => {
            return { ...state, loading: action.payload };
        },
        setError: (state, action) => {
            return { ...state, error: action.payload };
        },
    },
});
            
export const { setCart, incQuantity, decQuantity, setLoading, setError } = cartSlice.actions;
export default cartSlice.reducer;