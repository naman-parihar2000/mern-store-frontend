import { configureStore } from '@reduxjs/toolkit'
import { productsApiSlice } from './slices/apiSlice'
import cartReducer from './slices/cartSlice';
import authSlice from './slices/authSlice';

const store = configureStore({
    reducer: {
        [productsApiSlice.reducerPath]: productsApiSlice.reducer,
        cart: cartReducer,
        auth: authSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApiSlice.middleware)
})

export default store 