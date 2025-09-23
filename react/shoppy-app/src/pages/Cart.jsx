import React, { useState, useEffect } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri'
import { axiosData } from '../utils/dataFetch.js';
import { cartItemsAddInfo } from '../utils/cart.js';
import '../styles/cart.css'

export function Cart({items}) {
    const [cartList, setCartList] = useState(items);
    useEffect(() => {
        const fetch = async() => {
            const jsonData = await axiosData("/data/products.json");
            cartItemsAddInfo(jsonData, items);
        }
        fetch();
    });
    console.log('cartList-->',cartList);
    
    return (
        <div className='cart-container'>
            <h2 className='cart-header'>장바구니</h2>
            { items && items.map(item =>
                <div key={item.pid}>
                    <div className='cart-item'>
                        {/* 상품 이미지 */}
                        <div className='cart-item-details'>
                            <p className='cart-item-title'>{/* 상품명 */}</p>
                            <p className='cart-item-title'>{item.size}</p>
                            <p className='cart-item-price'>{/* 상품가격 */}</p>
                        </div>
                        <div className='cart-quantity'>
                            <button type='buttons'>-</button>
                            <input type='text' value={item.qty} readOnly />
                            <button type='buttons'>+</button>
                        </div>
                        <button className='cart-remove'>
                            <RiDeleteBin6Line />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

