import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './SidebarCart.css';

const SidebarCart = ({ cartItems, removeFromCart, handleSendToAdmin, setShowCart }) => {
  return (
    <div className="sidebar-cart">
      <button className="close-btn" onClick={() => setShowCart(false)}>
        <FaTimes />
      </button>

      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-items-list">
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(item)}>
                Remove One
              </button>
            </li>
          ))}
        </ul>
      )}

      {cartItems.length > 0 && (
        <button className="send-to-admin-btn" onClick={handleSendToAdmin}>
          Send to Admin via WhatsApp
        </button>
      )}
    </div>
  );
};

export default SidebarCart;
