//Slice in redux means "features"

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
    cartItems: [],
    total: 0,
    amount: 1,
    isLoading: true,
};

export const getCartItems = createAsyncThunk(
    "/cart/getCartItems",
    async (name, thunkAPI) => {
        try {
            const res = await axios(url);

            return res.data;
        } catch (error) {
            console.log(thunkAPI.rejectWithValue(error.response));
        }
    }
);

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== itemId
            );
        },
        increaseAmount: (state, { payload }) => {
            const cartItem = state.cartItems.find(
                (item) => item.id === payload
            );
            cartItem.amount = cartItem.amount + 1;
        },
        decreaseAmount: (state, { payload }) => {
            const cartItem = state.cartItems.find(
                (item) => item.id === payload
            );
            cartItem.amount = cartItem.amount - 1;
        },
        caculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.total = total.toFixed(2);
            state.amount = amount;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(getCartItems.pending, (state) => {
            state.isLoading = true;
        })

        .addCase(getCartItems.fulfilled, (state, action) => {
            state.isLoading = false;
            state.cartItems = action.payload;
        })

        .addCase(getCartItems.rejected, (state) => {
            state.isLoading = false;
        })
    },
});

// cartSlice return an object
export const {
    clearCart,
    removeItem,
    increaseAmount,
    decreaseAmount,
    caculateTotals,
} = cartSlice.actions;
export default cartSlice.reducer;
