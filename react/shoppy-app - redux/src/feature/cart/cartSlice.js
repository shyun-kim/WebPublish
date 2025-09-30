import { createSlice } from '@reduxjs/toolkit'
import { cartItemsAddInfo } from '../../utils/cart';

const initialState = { 
    cartCount: 0,
    cartList: [],
    totalPrice: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem(state, action) {
      // state.cartList
      const { cartItem } = action.payload;
      state.CartList = cartItemCheck(state.cartList, cartItem);

      // console.log('cartSlice ==> ', cartItem, test);
    
    },
    showCartItem(state, action){
      const {items} = action.payload;
      state.cartList = cartItemsAddInfo(items, state.cartList);
    },
    updateCartCount (state, action) {
      state.cartCount = state.cartList.reduce((total, item) => total+item.qty)
    },
    // updateTotalPrice (state) {
    //   state.totalPrice = 
    // },
    removeCartItem(state, action){
      const {cid} = action.payload;
      state.cartList = state.cartList.filter(item => !(item.cid === cid))
    }
  },
})

export const { addCartItem, showCartItem, updateCartCount }
            = cartSlice.actions //API 함수 또는 컴포넌트에서 dispatch(액션 함수)

export default cartSlice.reducer //store에서 import 하는 기준