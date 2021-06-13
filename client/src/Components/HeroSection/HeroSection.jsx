import React from "react";
import "./HeroSection.scss";

function HeroSection(props) {
  return (
    <div className="hero-section">
      <div className="hero-section__text-container">
        <h2 className="hero-section__title">My Name is Ajit Joseph</h2>
        <p className="hero-section__description">Welcome to my site</p>
      </div>
    </div>
  );
}

export default HeroSection;
