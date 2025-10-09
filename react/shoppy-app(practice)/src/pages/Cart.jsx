import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { RiDeleteBin6Line } from 'react-icons/ri';


export function Cart({items, updateCart}) {
    const navigate = useNavigate();
    const [cartList, setCartList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const fetch = async() => {
            const jsonData = await axiosData("/data/products.json");
            setCartList(cartItemsAddInfo(jsonData, items));
            setTotalPrice(getTotalPrice(jsonData, items));
        }
        fetch();
    }, []);

    //수량 업데이트 함수
    const handleUpdateCartList = (cid, type) => {
        setCartList((cartList) => cartList.map((item) =>
            item.cid === cid ?
                type === '+' ? 
                    {...item, qty : item.qty+1}
                    : item.qty > 1 ? 
                        {...item, qty: item.qty-1} : item
                : item
        ));

        const findItem = cartList.find((item) => item.cid === cid);
        type === '+' ? setTotalPrice(totalPrice + findItem.price)
                    : findItem.qty > 1 ? setTotalPrice(totalPrice - findItem.price)
                                        : setTotalPrice(totalPrice);
        updateCart(cid, type);
    }

    //장바구니 아이템 삭제 함수
    const handleRemoveCartList = (cid) => {
        const findItem = cartList.find(item => item.cid === cid);
        setTotalPrice(totalPrice - (findItem.qty * findItem.price));

        setCartList((cartList) => {
            return cartList.filter(item => !(item.cid === cid));
        });

        updateCart(cid);
    }

    return (
        <div className='cart-container'>
            <h2 className='cart-header'>장바구니</h2>
            { cartList && cartList.map(item =>
                <div key={item.pid}>
                    <div className='cart-item'>
                        <img src={item.image} alt="product img" />
                        <div className='cart-item-details'>
                            <p className='cart-item-title'>{item.name}</p>
                            <p className='cart-item-size'>{item.size}</p>
                            <p className='cart-item-price'>{parseInt(item.price).toLocaleString()}원</p>
                        </div>
                        <div className='cart-quantity'>
                            <button type='button'
                                    onClick={() => {item.qty > 1 && handleUpdateCartList(item.cid, '-')}}>-</button>
                            <input type='text' value={item.qty} readOnly />
                            <button type='button'
                                    onClick={() => {handleUpdateCartList(item.cid,'+')}}>+</button>
                        </div>
                        <button className='cart-remove'
                                onClick={() => {handleRemoveCartList(item.cid)}}>
                            <RiDeleteBin6Line />
                        </button>
                    </div>
                </div>
            )}
            
        </div>
    )
}
