import React from "react";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
// import SecondaryButton from "../../Components/Buttons/SecondaryButton";
import "./herosection.css";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-image-container">
        <img
          src="images/fitvid-hero-1.jpg"
          alt="hero-image"
          className="img-responsive hero-image"
        />
      </div>
      <div className="hero-text-overlay-container">
        <p className="hero-heading">
          The World Of <p className="inline hero-heading-sub-text">FITNESS</p>
        </p>
        <PrimaryButton buttonText="Explore Now" className="hero-button" />
      </div>
    </div>
  );
};

export default HeroSection;
