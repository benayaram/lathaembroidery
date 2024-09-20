import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import servicesData from '../../data/services.json';

const HomePage = () => {

  // Function to send a WhatsApp message
  const handleSendMessage = () => {
    const phoneNumber = '+1234567890'; // Admin phone number (replace with actual)
    const message = 'Customized Embroidery Picture';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');
  };

  // Limit to first 7 services
  const limitedServices = servicesData.slice(0, 10);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://images.pexels.com/photos/2564604/pexels-photo-2564604.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Hero Background"
          className="hero-bg"
        />
        <div className="hero-content">
          <h1>Welcome to Latha Embroidery</h1>
          <p>Explore our beautiful embroidery designs and materials.</p>
          <button className="explore-button">
            Explore Us <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <h2>Our Services</h2>
        <div className="services-cards">
          {limitedServices.map((service) => (
            <div key={service.id} className="service-card">
              <img src={service.image} alt={service.code} className="service-image" />
              <div className="service-info">
                <h3>{service.code}</h3>
                <p>{service.category}</p>
                <Link to="/services" className="nav-link">Go to Services</Link>
              </div>
            </div>
          ))}
        </div>
        <div className="more-services-link">
          <Link to="/services" className="view-all-services-link">View All Services</Link>
        </div>
      </div>

      {/* Customized Embroidery Section */}
      <div className="customized-section">
        <h2>Customized Embroidery</h2>
        <div className="customized-content">
          <img
            src="https://images.pexels.com/photos/2564604/pexels-photo-2564604.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Customized Embroidery"
            className="customized-image"
          />
          <div className="customized-text">
            <h3>Want Your Own Custom Embroidery?</h3>
            <p>
              We offer customized embroidery designs to meet your personal preferences. Contact us now to get started on your own personalized embroidery design.
            </p>
            <button className="customized-button" onClick={handleSendMessage}>
              Send Customized Embroidery Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
