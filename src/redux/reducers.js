// reducers.js
import { combineReducers } from 'redux';
import { ADD_TO_CART, REMOVE_FROM_CART } from './actions';

const initialCartState = {
  cartItems: [],
};

const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload]
        };
      // Add other cases for removing items, updating quantity, etc. if needed
      default:
        return state;
    }
  };
  
// Other reducers can be included similarly...

const rootReducer = combineReducers({
  cart: cartReducer,
  // Other reducers...
});

export default rootReducer;
