import React from 'react';
import './styles.css';

const Products = ({ addToCart, isEnlarged }) => {
  const products = [
    { id: 1, name: 'Pen', price: 10 },
    { id: 2, name: 'Smartphone', price: 20000 },
    { id: 3, name: 'Laptop', price: 60000 },
    { id: 4, name: 'Headphones', price: 2000 },
    { id: 5, name: 'Watch', price: 5000 },
    { id: 6, name: 'Tablet', price: 15000 },
  ];

  return (
    <div className={`container ${isEnlarged ? 'enlarged' : ''}`}>
      <h1>Our Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ₹{product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
