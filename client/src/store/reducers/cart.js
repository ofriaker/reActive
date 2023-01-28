import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [
        {
                _id: "63d521d220d679030e472172",
                name: "Protein Bor",
                imgUrl: "https://static.thcdn.com/productimg/1600/1600/13952104-1815018994258468.jpg",
                quantity: 1,
                price: 70.45,
                flavour: "White Chocolate Peanut"
        },
        {
            _id: "63d521d620d679030e4721fe",
            name: "Sparkling Energy Drink",
            imgUrl: "https://static.thcdn.com/productimg/1600/1600/12770760-2054858302480549.jpg",
            quantity: 2,
            price: 8,
            flavour: "Lemon Lime"
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
        incQuantity: (state, action) => {
            let newCart = [...state.cart];
            newCart[action.payload].quantity = newCart[action.payload].quantity + 1;
        },
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