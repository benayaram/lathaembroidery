import React, { useState } from 'react';
import './MaterialsPage.css';
import materialsData from '../../data/materials.json';
import SidebarCart from '../../components/SidebarCart/SidebarCart';

const MaterialsPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Function to add items to cart or increase quantity
  const addToCart = (item) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        // If the item is already in the cart, increase the quantity
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // If the item is not in the cart, add it with quantity 1
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // Function to remove one instance of an item or remove the item if quantity reaches 0
  const removeFromCart = (itemToRemove) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === itemToRemove.id);

      if (existingItem.quantity === 1) {
        // Remove the item from the cart if its quantity is 1
        return prevCart.filter((cartItem) => cartItem.id !== itemToRemove.id);
      } else {
        // Otherwise, decrease the quantity by 1
        return prevCart.map((cartItem) =>
          cartItem.id === itemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }
    });
  };

  // Function to handle "Send to Admin" via WhatsApp
  const handleSendToAdmin = () => {
    const cartDetails = cartItems
      .map((item) => `Item: ${item.name}, Quantity: ${item.quantity}`)
      .join('\n');
    const whatsappURL = `https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER&text=${encodeURIComponent(
      `Cart Details:\n${cartDetails}`
    )}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="materials-page">
      <h1 className="page-title">Materials Available</h1>
      <div className="materials-grid">
        {materialsData.map((material) => (
          <div key={material.id} className="material-card">
            <img
              src={material.image}
              alt={material.name}
              className="material-image"
            />
            <div className="material-info">
              <h3 className="material-name">{material.name}</h3>
              <p>{material.description}</p>
              <button
                onClick={() => addToCart(material)}
                className="material-button"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Sidebar */}
      {showCart && (
        <SidebarCart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          handleSendToAdmin={handleSendToAdmin}
          setShowCart={setShowCart}
        />
      )}

      {/* View Cart Button */}
      <button className="view-cart-btn" onClick={() => setShowCart(!showCart)}>
        View Cart ({cartItems.length})
      </button>
    </div>
  );
};

export default MaterialsPage;
