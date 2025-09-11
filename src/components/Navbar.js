// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/">chifavz</Link>
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/showcase" className="nav-link">Showcase</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

