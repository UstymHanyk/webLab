// Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions';
import Gemstone from './Gemstone';
const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <>            <Gemstone
            key={item.gemstone.id}
            id={item.gemstone.id}
            name={item.gemstone.name}
            image={item.gemstone.type}
            price={item.gemstone.price}
            karats={item.gemstone.karats}
            hardness={item.gemstone.hardness}
          />
           
           <p>quantity: <span>${item.quantity}</span></p>
           <p>shipping: <span>${item.shipping}</span></p>
             <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          </>

        ))}
      </ul>
    </div>
  );
};

export default Cart;
