import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 100 }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    // incrementByAmount(state, action) {
    //   state.value += action.payload
    // },
  },
})

export const { increment, decrement, incrementByAmount } = 
counterSlice.actions //API 함수 또는 컴포넌트에서 dispatch(액션 함수)


export default counterSlice.reducer //store에서 import 하는 기준