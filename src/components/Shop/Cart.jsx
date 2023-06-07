import React, { useContext } from 'react';
import { CartContext } from './CartContext';

import Header from '../home/Header';
import './Cart.css'



const Cart = () => {
  const { cartItems } = useContext(CartContext);
    
  return (
   < React.Fragment>
    <Header/>
   
    <div>
      <h1>Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <h5>{`$${item.price}`}</h5>
        </div>
      ))}
    </div>
    </React.Fragment>
  )
}

export default Cart;






