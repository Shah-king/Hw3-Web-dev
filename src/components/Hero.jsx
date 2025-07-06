import React from 'react';
import './Hero.css'; // Make sure this file exists
import bannerImage from '/banner.jpg'; // Update path if different

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <img src={bannerImage} alt="Delicious burger & fries" className="hero-image" />

      <div className="hero-overlay">
        <h1 className="hero-title">Welcome to Shah's Kitchen</h1>
        <p className="hero-subtitle">Delicious meals served fresh every day</p>
        <a href="#menu" className="hero-button">Order Now</a>
      </div>
    </section>
  );
};

export default Hero;
