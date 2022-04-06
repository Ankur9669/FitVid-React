import React, { useEffect, useState } from "react";
import {
  ChipsContainer,
  Footer,
  Loader,
  Navbar,
  SideBar,
  VideosContainer,
  useDocumentTitle,
} from "./index";


const VideoListing = () => {
  const [loading, setLoading] = useState(true);

  useDocumentTitle("FitVid-Explore");
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
