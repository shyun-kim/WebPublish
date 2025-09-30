import React from 'react'
import { addCartItem, updateCartCount, showCartItem, updateTotalPrice, updateCartItem, removeCartItem } from './cartSlice.js';
import { axiosData } from '../../utils/dataFetch.js';

export const removeCart = (cid) => async(dispatch) => {
    dispatch(removeCartItem({"cid":cid}));
    dispatch(updateTotalPrice());
    dispatch(updateCartCount());
}

export const updateCart = (cid, type) => async (dispatch) => {
    dispatch(updateCartItem({"cid":cid, "type":type})); //수량변경
    
}
export const showCart = () => async(dispatch) => {
    const jsonData = await axiosData("/data/products.json");
    dispatch(showCartItem({"items":jsonData}));
    dispatch(updateTotalPrice());
    dispatch(updateCartCount());
    // setCartList(cartItemsAddInfo(jsonData, cartList));
    // setTotalPrice(getTotalPrice(jsonData, items));
}

export const addCart = (cartItem) => async (dispatch) => {
    dispatch(addCartItem({"cartItem":cartItem}));
    dispatch(updateCartCount());
}
