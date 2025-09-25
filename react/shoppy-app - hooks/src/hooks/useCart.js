import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext.js'
import { cartItemsCheck, updateCartItemsQty } from ''
/**
 * CartContext를 제어하는 함수를 가진 커스텀 훅
 */

export function useCart() {
    const { setCartCount, setCartList, cartList } = useContext(CartContext);

    //장바구니 아이템 추가
    const addCart = (cartItem) => {
        setCartList(cartItemsCheck(cartItemsAddInfo, cartItem))
        setCartCount(cartCount+1);
    }

    
    //장바구니 출력: 장바구니 아이템 <-- 이미지, 상품명, 상품가격 추가
    const showCart = () => {
        const fetch = async() => {
            const jsonData 
        }
    }

    return { addCart }
}

