import React from "react";
import { Navbar, Footer, LeftContainer, RightContainer } from "./index";
import "./singlevideopage.css";

const SingleVideoPage = () => {
  return (
    <div>
      <Navbar />
      <div className="single-video-page-container">
        <LeftContainer />
        <RightContainer />
      </div>
      <Footer />
    </div>
  );
};

export default SingleVideoPage;
