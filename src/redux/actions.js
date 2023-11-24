// actions.js
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = (gemstone, quantity, shipping) => {
    return {
      type: 'ADD_TO_CART',
      payload: { gemstone, quantity, shipping }
    };
  };
export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});
