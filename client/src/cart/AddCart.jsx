import React from 'react';
import CartData from './CartData';
import Product from './Product';
import './cartStyle.css';
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";

const AddCart = () => {
  return (
    <div className="container">
      <div className="header">
        <h2>Add to Cart Feature using Redux</h2>
        <Link to="/cart-items" className="cart-link"><span><FaCartShopping /></span> View Cart</Link>
      </div>
      <div className="grid">
        {CartData.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AddCart;
