import React, { useRef } from 'react';
import { AiOutlinePlus, AiOutlineMinus, AiOutlineShopping, AiOutlineLeft } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import Link from 'next/link';
import { useStateContext } from '../context/ContextApi';
import { urlFor } from '../lib/client';
import getStripe from '../lib/getStripe';
import { toast } from 'react-hot-toast';

const Cart = () => {
  
  const cartRef = useRef();
  const { totalPrice, totalQuantity, setShowCart, cartItems, toggleItemQuantity, onRemove } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();
  
    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading('Redirecting...');

    stripe.redirectToCheckout({ sessionId: data.id });
  }

  return (
    <div className='cart-wrapper' ref={cartRef}>
      <div className='cart-container'>
        <button type='button' className='cart-heading' onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span>Your Cart</span>
          <span>({totalQuantity} items)</span> 
        </button>

        {cartItems.length < 1 && (
            <div className='empty-cart'> 
            <AiOutlineShopping size={150}/>
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button className='btn' type='button' onClick={() => setShowCart(false) }>
                   Continue Shopping
              </button>
            </Link>   
            </div>
        )}

        <div className='product-container'>
          {cartItems.length >= 1 && cartItems.map((cartItem) => (
            <div className="product" key={cartItem._id} >
              <img src={urlFor(cartItem?.image[0])} className="cart-product-image" />
              <div className='item-desc'>
                <div className='flex top'>
                  <h5>{cartItem.name}</h5>
                  <h4>{cartItem.price}</h4>
                </div>    
                <div className='flex bottom'>
                  <div>
                   <p className='quantity-desc'>
                      <span className='minus' onClick={() => toggleItemQuantity(cartItem._id, "dec")}>
                        <AiOutlineMinus />
                    </span>
                    <span className='num'>
                     {cartItem.quantity}
                    </span>
                    <span className='plus' onClick={() => toggleItemQuantity(cartItem._id, "inc")}>
                        <AiOutlinePlus />
                    </span>
                   </p>
                  </div> 
                  <button type='button' className='remove-item' onClick={() => onRemove(cartItem)}>
                    <TiDeleteOutline />
                  </button> 
                </div>
              </div>
            </div>
          ))}
        </div>

        {cartItems.length >= 1 && (
          <div className='cart-bottom'>
            <div className='total'>
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>  
            </div>  
            <div className='btn-container'>
              <button type='button' className='btn' onClick={handleCheckout}>Pay with Stripe</button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Cart;