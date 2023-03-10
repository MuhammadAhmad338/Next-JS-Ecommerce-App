import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { useStateContext } from '../context/ContextApi';
import Cart from './Cart';

const NavBar = () => {
 
  const { showCart, setShowCart, totalQuantity } = useStateContext();

  return (
    <div className='navbar-container'>
      
      <p className='logo'>
          <Link href="/">JSM Headphones</Link> 
      </p>     
      <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQuantity}</span>
      </button>
      
      {showCart && <Cart />}
    </div>
  )
}

export default NavBar;