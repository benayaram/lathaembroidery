import React from 'react';
import HeroSection from '../components/HeroSection';
import Gallery from '../components/Gallery';

const Home = () => {
  const galleryImages = [
    'https://blogger.googleusercontent.com/img/a/AVvXsEg2JQwyIuqsFOn7tzCI1ZzzzSbYMKFXiLbotAjxKG2GAskbvLtCfXHtr-XjIpKPKi6-Rjpg4V5TMHjHPYOvMW7RX81qM8UqBFic3DjgnsYhHWpQI1937kDJBdv_Q9UwDj2WfMVLTyJPKeuUC1z9qKC8CFIMqecdWhN3JUUYBNc-el-zA6GaeTMq32ys3P0',
    'https://blogger.googleusercontent.com/img/a/AVvXsEg2JQwyIuqsFOn7tzCI1ZzzzSbYMKFXiLbotAjxKG2GAskbvLtCfXHtr-XjIpKPKi6-Rjpg4V5TMHjHPYOvMW7RX81qM8UqBFic3DjgnsYhHWpQI1937kDJBdv_Q9UwDj2WfMVLTyJPKeuUC1z9qKC8CFIMqecdWhN3JUUYBNc-el-zA6GaeTMq32ys3P0',
    'https://blogger.googleusercontent.com/img/a/AVvXsEg2JQwyIuqsFOn7tzCI1ZzzzSbYMKFXiLbotAjxKG2GAskbvLtCfXHtr-XjIpKPKi6-Rjpg4V5TMHjHPYOvMW7RX81qM8UqBFic3DjgnsYhHWpQI1937kDJBdv_Q9UwDj2WfMVLTyJPKeuUC1z9qKC8CFIMqecdWhN3JUUYBNc-el-zA6GaeTMq32ys3P0',
    // Add more image paths
  ];

  return (
    <div>
      <HeroSection />
      <Gallery images={galleryImages} />
    </div>
  );
};

export default Home;
