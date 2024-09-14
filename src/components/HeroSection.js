import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <img src="https://blogger.googleusercontent.com/img/a/AVvXsEg2JQwyIuqsFOn7tzCI1ZzzzSbYMKFXiLbotAjxKG2GAskbvLtCfXHtr-XjIpKPKi6-Rjpg4V5TMHjHPYOvMW7RX81qM8UqBFic3DjgnsYhHWpQI1937kDJBdv_Q9UwDj2WfMVLTyJPKeuUC1z9qKC8CFIMqecdWhN3JUUYBNc-el-zA6GaeTMq32ys3P0" alt="Embroidery Background" className="hero-image" />
      <div className="hero-content">
        <h1>Welcome to Latha Embroidery</h1>
        <p>Explore the art of beautiful embroidery</p>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default HeroSection;
