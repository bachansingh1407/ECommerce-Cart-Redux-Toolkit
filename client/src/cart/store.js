import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import { initialState } from './cartSlice';

// Load from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cartState');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Could not load state", e);
    return undefined;
  }
};

// Save to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.cart);
    localStorage.setItem('cartState', serializedState);
  } catch (e) {
    console.error("Could not save state", e);
  }
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: loadState() || initialState,
  },
});

// Subscribe to store updates
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
