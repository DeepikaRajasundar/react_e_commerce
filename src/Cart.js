import React from 'react';
import './styles.css';

const Cart = ({ cart, removeFromCart, isEnlarged }) => {
  return (
    <div className={`container ${isEnlarged ? 'enlarged' : ''}`}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <p>
                {item.name} - ₹{item.price}
              </p>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
