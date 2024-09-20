import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage.js';
import MaterialsPage from './pages/MaterialsPage/MaterialsPage.js';
import ServicesPage from './pages/ServicesPage/ServicesPage.js';
import SidebarCart from './components/SidebarCart/SidebarCart.js';

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <Router>
      <Navbar setShowCart={setShowCart} />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/lathaembroidery" element={<HomePage />} />
      <Route path="/materials" element={<MaterialsPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
      {showCart && <SidebarCart setShowCart={setShowCart} />}
    </Router>
  );
}

export default App;
