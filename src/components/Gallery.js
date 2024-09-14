import React from 'react';
import './Gallery.css';

const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((img, index) => (
        <div key={index} className="gallery-item">
          <img src={img} alt={`Embroidery ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
