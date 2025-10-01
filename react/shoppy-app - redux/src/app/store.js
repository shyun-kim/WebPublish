import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../feature/counter/counterSlice.js'
import productSlice from '../feature/product/productSlice.js'
import authSlice  from '../feature/auth/authSlice.js'

export const store = configureStore({
    reducer: {
        // "counter" : counterSlice
        cart: cartSlice,
        product: productSlice,
        auth: authSlice
    },
})