import React from 'react';
import './Products.css';

const Products = ({ image, name, price, oldPrice, star, inches }) => {
  return (
    <div className="product">
      <img src={image} alt={name} className="product-image" />
      <div className="star-container">
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
      </div>
      <div>
        <p>{inches} inches</p>
        <p><b>{name}</b></p>
        <p>NGN {price}</p>
        <p className="old-price">NGN {oldPrice}</p>
        <button>+ Add to cart</button>
      </div>
    </div>
  );
};

export default Products;
