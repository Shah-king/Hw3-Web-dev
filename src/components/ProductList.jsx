// ProductList.jsx
import React from 'react';
import { useCart } from './CartContext'; // Import useCart hook
import './ProductList.css'; // Assuming you have a CSS file for product list

const ProductList = ({ products }) => {
  const { addItemToCart } = useCart(); // Get addItemToCart from context

  return (
    <div className="product-list">
      <h2>Our Menu</h2>
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p>${product.price.toFixed(2)}</p>
          <button onClick={() => addItemToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;