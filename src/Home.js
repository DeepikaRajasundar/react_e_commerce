import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = ({ isEnlarged }) => {
  return (
    <div className={`container ${isEnlarged ? 'enlarged' : ''}`}>
      <h1>Welcome to the E-commerce Site</h1>
      <p>Explore our amazing products!</p>
      <Link to="/products">
        <button>View Products</button>
      </Link>
    </div>
  );
};

export default Home;
