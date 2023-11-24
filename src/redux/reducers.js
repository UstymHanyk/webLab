import { combineReducers } from 'redux';
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from './actions';

const initialCartState = {
  cartItems: [],
};

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.gemstone.id !== action.payload
        ),
      };
    case UPDATE_QUANTITY:
      const updatedCartItems = state.cartItems.map((item) => {
        if (item.gemstone.id === action.payload.gemstoneId) {
          return {
            ...item,
            quantity: action.payload.quantity,
          };
        }
        return item;
      });
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
