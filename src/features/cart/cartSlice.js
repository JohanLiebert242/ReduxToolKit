//Slice in redux means "features"

import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
    cartItems: cartItems,
    total: 0,
    amount: 1,
    isLoading: true,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        }
    },
});

console.log(cartSlice);

// cartSlice return an object
export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
