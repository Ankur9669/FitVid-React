import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/NavBar/Navbar";
import SideBar from "../../Components/SideBar/SideBar";
import VideosContainer from "./VideosContainer/VideosContainer";

const VideoListing = () => {
  return (
    <div>
      <Navbar />
      <div className="content-section">
        <SideBar />
        <div className="content">
          <VideosContainer />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VideoListing;
