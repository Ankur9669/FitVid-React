import React, { useEffect, useState } from "react";
import ChipsContainer from "../../Components/ChipsContainer/ChipsContainer";
import Footer from "../../Components/Footer/Footer";
import Loader from "../../Components/Loader/Loader";
import Navbar from "../../Components/NavBar/Navbar";
import SideBar from "../../Components/SideBar/SideBar";
import VideosContainer from "./VideosContainer/VideosContainer";

const VideoListing = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <div>
      <Navbar />
      <div className="content-section">
        <SideBar />
        <div className="content">
          <ChipsContainer />
          <VideosContainer />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VideoListing;
