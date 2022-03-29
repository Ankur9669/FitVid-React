import React from "react";
import Footer from "../../Components/Footer/Footer";
import SideBar from "../../Components/SideBar/SideBar";
import HeroSection from "./HeroSection";
import "./homepage.css";

const Homepage = () => {
  return (
    <div>
      <div className="content-section">
        <SideBar />
        <div className="content">
          <HeroSection />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
