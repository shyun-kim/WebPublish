import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout.jsx';
import { Products } from './pages/Products.jsx';
import { Home } from './pages/Home.jsx';
import { Login } from './pages/Login.jsx';
import { Signup } from './pages/Signup.jsx';
import { ProductDetail } from './pages/ProductDetail.jsx';
import { Cart } from './pages/Cart.jsx';
import './styles/cgvSignup.css';
import './styles/cgv.css';
import './styles/shoppy.css';
import { useState } from 'react';

export default function App() {
  //1. 장바구니 수량 관리
  const [cartCount, setCartCount] = useState(0);

  //2. 장바구니 아이템 관리
  const [cartItems, setCartItems] = useState([]);

  const addCart = (cartItem) => {
    setCartItems([...cartItems, cartItem]);
    setCartCount(cartCount+1);
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout cartCount={cartCount}/>}>
          <Route index element={<Home/>} />
          <Route path="/all" element={<Products/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/products/:pid" element={<ProductDetail addCart={addCart}/>} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}