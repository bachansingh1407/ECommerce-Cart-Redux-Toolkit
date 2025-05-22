import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './cartSlice';
import './cartStyle.css';
import { FaCartShopping } from "react-icons/fa6";

const Product = ({ item }) => {
  const dispatch = useDispatch();

  const quantity = useSelector((state) => {
    const cartItem = state.cart.cartItems.find((i) => i.id === item.id);
    return cartItem ? cartItem.quantity : 0;
  });

  const handleCart = () => {
    dispatch(addToCart(item));
  };

  return (
    <div className="product-card">
      <img src={item.image} alt={item.name} className="product-img" />
      <div className="product-info">
        <h2>{item.name}</h2>
        <p>for {item.category} by <span>{item.brand}</span></p>
        <strong>Price: ${item.price} only</strong>
        <button onClick={handleCart} className="add-btn">
          <span><FaCartShopping /></span> Add to Cart {quantity > 0 && `(${quantity})`}
        </button>
      </div>
    </div>
  );
};

export default Product;
