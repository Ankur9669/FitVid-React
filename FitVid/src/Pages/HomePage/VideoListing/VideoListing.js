import React from "react";
import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/NavBar/Navbar";
import SideBar from "../../../Components/SideBar/SideBar";
import HeroSection from "../HeroSection";

const VideoListing = () => {
  return (
    <div>
      <Navbar />
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

export default VideoListing;
