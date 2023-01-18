import React, { useEffect } from 'react';
import Link from 'next/link';
import { useStateContext } from '../context/ContextApi';
import { BsBagCheckFill } from 'react-icons/bs';
import { fireWorks } from '../lib/utils';

const Success = () => {
  
    const { setCartItems, setTotalPrice, setTotalQuantity } = useStateContext();

    useEffect(() => {
      localStorage.clear();
      setCartItems([]);
      setTotalPrice(0);
      setTotalQuantity(0); 
      fireWorks();
    }, []);

    return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill />
            </p>
            <h2>Thank you for your order</h2>
            <p className='email-msg'>Check your email box for the receipt
            </p>
            <p className='description'>
                If you have any questions, please email
             <a className='email' href='mailto:order@example.com'>
                order@example.com</a>
            </p>
            <Link href="/">
            <button className='btn' type="button" width="300px">
                Continue Shopping
            </button>
            </Link> 
        </div>
    </div>
  )
}

export default Success;