import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add item to cart
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalAmount += item.price;
    },

    // Decrease quantity of item, and remove if it drops to 0
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalAmount -= existingItem.price;
      } else if (existingItem && existingItem.quantity === 1) {
        // Remove item if quantity becomes 0
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity -= 1;
        state.totalAmount -= existingItem.price;
      }
    },

    // Remove item completely
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.price * existingItem.quantity;
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      }
    },

    // Clear cart
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const {
  addToCart,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
