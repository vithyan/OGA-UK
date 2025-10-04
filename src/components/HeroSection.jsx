import React from "react";
import "./HeroSection.css";
import firstImage from "/Placeholder_Image_Oba.png";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-motto">
            <h2 className="motto-text">"Dare to do right. Dare to be true."</h2>
          </div>
          <h1 className="hero-title">Old Girls' Association</h1>
          <p className="hero-description">
            Celebrating 40 years of sisterhood, service, and excellence. Join
            our community of accomplished women making a difference since 1984.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Join Now</button>
            <button className="btn-secondary">Explore Events</button>
            <button className="btn-tertiary">Donate</button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <h3 className="stat-number">2,500+</h3>
              <p className="stat-label">Active Members</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">40</h3>
              <p className="stat-label">Years of Legacy</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">150+</h3>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">Rs 500,000+</h3>
              <p className="stat-label">Funds Raised</p>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={firstImage} alt="Hero" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
