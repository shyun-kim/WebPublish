import { useState, useEffect,useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from "react-icons/fi";
import { GiShoppingCart } from "react-icons/gi";
import { useSelector, useDispatch } from 'react-redux';
import { getLogin, getLogout } from '../../feature/auth/authAPI.js';

import { CartContext } from '../../context/CartContext.js';
import { AuthContext } from '../../context/AuthContext.js';
import { useAuth } from "../../hooks/useAuth.js"

import { useSelector } from 'react-redux';


export function Header() {
    // const { handleLogout } = useAuth();
    const dispatch = useDispatch();
    const cartCount = useSelector((state) => state.cart.cartCount);
    const isLogin  = useContext(AuthContext);

    const handleLogout = () => {
        const succ = dispatch(getLogout());
        const loginInfo = localStorage.getItem("loginInfo");
        if(succ && loginInfo === null){
            alert("로그아웃 되었습니다.");
            navigate("/")
        } 
    }

    

    

    return (
        <div className="header-outer">
            <div className="header">
                <Link to="/" className='header-left'>
                    <FiShoppingBag />
                    <span>Shoppy</span>
                </Link>
                { isLogin ? 
                    <Link to="/login">
                        <button type="button">LogOut</button>
                    </Link>
                    :<Link to="/login">
                        <button type="button">Login</button>
                    </Link>
                }
                <nav className='header-right'>
                    <Link to="/all">Products</Link>
                    <Link to="/cart" className="header-icons-cart-link">
                        <GiShoppingCart className='header-icons'/>
                        <span className='header-icons-cart'>{cartCount}</span>
                    </Link>
                    { !isLogin &&
                        <Link to="/login">
                            <button type="button">Login</button>
                        </Link>
                    }
                    { isLogin &&
                        <button type="button"
                                onClick={()=>{dispatch(getLogout())}}>Logout</button>
                    }
                    
                    <Link to="/signup">
                        <button type="button">Signup</button>
                    </Link>               
                    <Link to="/support">
                        <button type="button">Support</button>
                    </Link>               

                </nav>
            </div>
        </div>
    );
}