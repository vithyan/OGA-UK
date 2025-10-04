import React from "react";
import "./HeroSection.css";
import firstImage from "/public/Placeholder_Image_Oba.png";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            OGA-UK alumni connecting the world through knowledge
          </h1>
          <p className="hero-description">
            Join a global network of innovators, leaders, and changemakers from
            the UK. Our community spans continents, driving progress in every
            field and fostering meaningful connections across industries.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Join</button>
            <button className="btn-secondary">Learn</button>
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
