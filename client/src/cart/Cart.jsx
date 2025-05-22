import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  decreaseQuantity,
  addToCart,
  clearCart,
} from './cartSlice';
import { Link } from 'react-router-dom';
import './cartStyle.css';
import { FaCartShopping } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

const Cart = () => {
  const { cartItems, totalAmount, totalQuantity } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  return (
    <div className="container">
       <div className="header">
              <h2><span><FaCartShopping /></span> Shopping Cart</h2>
              <Link to="/" className="cart-link"><span><FaArrowLeft /></span> Back</Link>
            </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <div>
            <p>Your cart is empty!</p>
            <Link to="/" className="continue-shopping">
              <span><FaArrowLeft /></span> Continue Shopping
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-card">
                <img src={item.image} alt={item.name} className="cart-img" />
                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p className='cart-brand'>{item.brand}</p>
                  <p className='cart-price'>${item.price.toFixed(2)}</p>
                  <div className="qty-controls">
                    <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(addToCart(item))}>+</button>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div>
              <h3>Summary</h3>
              <p>Total Items: <span>{totalQuantity}</span></p>
              <p>Total Amount: <span> ${totalAmount.toFixed(2)}</span> </p>
            </div>
            <button onClick={() => dispatch(clearCart())} className="clear-cart-btn">
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
