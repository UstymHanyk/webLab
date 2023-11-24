import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/actions';
import CartItem from './CartItem';
import GradientAnimatedBackdrop from './GradientAnimatedBackdrop';
import ActionButton from "./ActionButton";


const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateQuantity(productId, newQuantity));
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.quantity * item.gemstone.price;
    });
    return totalPrice;
  };

  return (
    <div className="catalog__wrapper">
      <GradientAnimatedBackdrop />
      <h2>
        <span className="underline-light_purple">Shopping Cart</span>
      </h2>
      <div className="gemstones-grid">
        {cartItems.map((item) => (
          <CartItem
            key={item.gemstone.id}
            id={item.gemstone.id}
            name={item.gemstone.name}
            image={item.gemstone.image}
            price={item.gemstone.price}
            karats={item.gemstone.karats}
            hardness={item.gemstone.hardness}
            quantity={item.quantity}
            certificateType={item.shipping}
            handleRemoveFromCart={handleRemoveFromCart}
            handleQuantityChange={handleQuantityChange}
          />
        ))}
      </div>
      <div className='total'>

      <ActionButton text="Go back" linkHref="/catalog"></ActionButton>

        <h3>Total Price: ${calculateTotalPrice().toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Cart;
