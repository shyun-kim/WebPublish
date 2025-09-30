import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from '../feature/counter/counterSlice.js'


export const store = configureStore({
    reducer: {
        // "counter" : counterSlice
        cart: cartSlice
    },
})