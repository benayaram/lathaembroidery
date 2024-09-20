import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'; // Import icons

const Navbar = ({ setShowCart }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="nav-link logo-link">Latha Embroidery</Link>
      </div>

      {/* Regular Links (Desktop) */}
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/materials" className="nav-link">Materials</Link>
        <Link to="/services" className="nav-link">Services</Link>
      </div>

      {/* Cart Icon */}
      <div className="icons">
        <FaShoppingCart className="cart-icon" onClick={() => setShowCart(true)} />

        {/* Hamburger Menu Icon (visible only on mobile/tablet) */}
        <div className="menu-icon-container">
          {isMobileMenuOpen ? (
            <FaTimes className="menu-icon" onClick={toggleMobileMenu} /> // Close icon
          ) : (
            <FaBars className="menu-icon" onClick={toggleMobileMenu} /> // Hamburger icon
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`mobile-nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link" onClick={toggleMobileMenu}>Home</Link>
        <Link to="/materials" className="nav-link" onClick={toggleMobileMenu}>Materials</Link>
        <Link to="/services" className="nav-link" onClick={toggleMobileMenu}>Services</Link>
      </div>
    </nav>
  );
};

export default Navbar;