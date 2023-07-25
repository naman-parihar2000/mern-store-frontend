import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : { cartItems: [] };

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addToCart(state, action) {
            const { product, quantityToAdd } = action.payload

            const existingItem = state.cartItems.find((pro) => pro._id === product._id)

            let newState
            if (!existingItem) {
                newState = [...state.cartItems, { ...product, quantity: 1 }]
            } else {
                newState = state.cartItems.map((pro) => {
                    if (pro._id === product._id) {
                        return { ...pro, quantity: pro.quantity + quantityToAdd }
                    }
                    else {
                        return pro
                    }
                })
            }
            state.cartItems = newState
            // localStorage.setItem('cart', JSON.stringify(state))
        },

        incrementProduct(state, action) {
            const { itemId, add } = action.payload

            const newState = state.cartItems.map((product) => {
                if (product._id === itemId) {
                    return { ...product, quantity: product.quantity + add }
                } else {
                    return product
                }
            })
            state.cartItems = newState
            localStorage.setItem('cart', JSON.stringify(state))
        },

        decrementProduct(state, action) {
            const { itemId, subtract } = action.payload

            const newState = state.cartItems.map((product) => {
                if (product._id === itemId) {
                    return { ...product, quantity: product.quantity - subtract }
                } else {
                    return product
                }
            })
            state.cartItems = newState
            localStorage.setItem('cart', JSON.stringify(state))
        },

        removeProduct(state, action) {
            const { itemId } = action.payload
            let newState = state.cartItems.filter((product) => product._id !== itemId)
            state.cartItems = newState
            localStorage.setItem('cart', JSON.stringify(state))
        },
    }
});

export const { addToCart, incrementProduct, decrementProduct, removeProduct } = cartSlice.actions

export default cartSlice.reducer
