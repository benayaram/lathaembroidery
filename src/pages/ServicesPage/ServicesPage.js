import React, { useState } from 'react';
import './ServicesPage.css';
import servicesData from '../../data/services.json';

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);

  // Function to handle click on service card and show popup
  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  // Function to close the popup
  const handleClosePopup = () => {
    setSelectedService(null);
  };

  // Function to send service details to admin via WhatsApp
  const handleSendToAdmin = (service) => {
    const message = `Hi, I'm interested in this service: ${service.category}`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER&text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="services-page">
      <h1 className="page-title">Our Services</h1>
      <div className="services-gallery">
        {servicesData.slice(0, 7).map((service) => (
          <div
            key={service.id}
            className="service-card"
            onClick={() => handleServiceClick(service)}
          >
            <img
              src={service.image}
              alt={service.category}
              className="service-image"
            />
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="service-popup">
          <img
            src={selectedService.image}
            alt={selectedService.category}
            className="popup-image"
          />
          <div className="popup-buttons">
            <button
              className="send-button"
              onClick={() => handleSendToAdmin(selectedService)}
            >
              Send to Admin
            </button>
            <button className="close-button" onClick={handleClosePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;
