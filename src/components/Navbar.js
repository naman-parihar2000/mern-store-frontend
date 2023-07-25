import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const navigate = useNavigate()
  const cartItems = useSelector((state) => state.cart.cartItems);

  const logoClickHandler = () => {
    navigate('/')
  }

  const cartClickHandler = () => {
    navigate('/cart')
  }


  const loginSignupHandler = () => {
    navigate('/login-signup')
  }

  return (
    <nav>
      <button onClick={logoClickHandler}>LOGO</button>
      <div>
        <button onClick={loginSignupHandler}>LOG IN / SIGN UP</button>

        <button onClick={cartClickHandler}>
          CART
          <span>{cartItems.length}</span>
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
