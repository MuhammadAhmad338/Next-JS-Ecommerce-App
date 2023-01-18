import React from 'react';
import { useState, createContext, useContext } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
    
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [quantity, setQuantity] = useState(1);
    
    let foundProduct;
    let index;
    
    const toggleItemQuantity = (id, value) => {
       
       foundProduct = cartItems.find((cart) => cart._id === id); 
       index = cartItems.findIndex((product) => product._id === id);
       const newCartItems = cartItems.filter((item) => item._id !== id);

       if (value === 'inc'){
           setCartItems([...newCartItems, {
            ...foundProduct, quantity: foundProduct.quantity + 1 }]);
           
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
           
           setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + 1);
       } else if (value === 'dec') {
          if(foundProduct.quantity > 1) {
            setCartItems([...newCartItems, {
                ...foundProduct,  quantity: foundProduct.quantity - 1  }]);
            setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
            setTotalQuantity((prevTotalQuantity) => prevTotalQuantity - 1);
          }
       }
    }

    const onRemove = (product) => {
        foundProduct = cartItems.find((item) => item._id === product._id);
        const newCartItems = cartItems.filter((item) => item._id !== product._id);
        
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity); 
        setTotalQuantity((prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity);

        setCartItems(newCartItems);
    }

    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find((item) => item._id === product._id);

        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + quantity);

        if (checkProductInCart) {
            
            const updatedCartItems = cartItems.map((cartProduct) => {
                if(cartProduct._id === product._id) return {
                    ...cartProduct, 
                    quantity: cartProduct.quantity + quantity
                }    
            })

            setCartItems(updatedCartItems);
        } else {
            product.quantity = quantity;
            setCartItems([...cartItems, {...product}]);
        }
      
       toast.success(`${quantity} ${product.name} added to the cart.`);
    }

    const incQty = () => {
        setQuantity((prevQuantity) => prevQuantity + 1)
    }

    const decQty = () => {
        setQuantity((prevQuantity) => { 
        if (prevQuantity - 1 < 1) return 1;
        return prevQuantity - 1
    }); 
    }

    return (
        <Context.Provider value={{ showCart, cartItems, 
            totalPrice, totalQuantity, quantity, onRemove,
            setShowCart, incQty, decQty, onAdd, 
            toggleItemQuantity, setCartItems, setTotalPrice, setTotalQuantity }}>
             {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);
