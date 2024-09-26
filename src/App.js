import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Cart from './Cart';
import './styles.css';

function App() {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState(''); // Success message state
  const [isEnlarged, setIsEnlarged] = useState(false); // State to enlarge components

  // Function to add items to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
    setMessage('Added to cart successfully!');
    setIsEnlarged(true);
    setTimeout(() => {
      setMessage('');
    }, 2000);
  };

  // Function to remove items from the cart
  const removeFromCart = (indexToRemove) => {
    const updatedCart = cart.filter((item, index) => index !== indexToRemove);
    setCart(updatedCart);
    setMessage('Item removed from cart.');
    setTimeout(() => {
      setMessage('');
    }, 2000);
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/products">Products</Link> | <Link to="/cart">Cart</Link>
      </nav>

      {/* Success Message */}
      {message && <div className="success-message">{message}</div>}

      <Routes>
        <Route path="/" element={<Home isEnlarged={isEnlarged} />} />
        <Route path="/products" element={<Products addToCart={addToCart} isEnlarged={isEnlarged} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} isEnlarged={isEnlarged} />} />
      </Routes>
    </Router>
  );
}

export default App;
