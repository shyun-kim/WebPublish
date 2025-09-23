import { Link } from 'react-router-dom';
import { FiShoppingBag } from "react-icons/fi";
import { useState, useEffect } from 'react';

export function Header({cartItem}) {
    const [cartCount, setCartCount] = useState(0);
    useEffect(()=> {

    },[cartItem]);

    return (
        <div className="header-outer">
            <div className="header">
                <Link to="/" className='header-left'>
                    <FiShoppingBag />
                    <span>Shoppy</span>
                </Link>
                <nav className='header-right'>
                    <Link to="/all">Products</Link>
                    <Link to="/cart">MyCart(cartCount)</Link>
                    <Link to="/login">
                        <button type="button">Login</button>
                    </Link>
                    <Link to="/signup">
                        <button type="button">Signup</button>
                    </Link>                   
                </nav>
            </div>
        </div>
    );
}