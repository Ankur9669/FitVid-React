import React, { useEffect, useState } from "react";
import {
  Navbar,
  Footer,
  LeftContainer,
  RightContainer,
  Loader,
  useDocumentTitle,
} from "./index";
import "./singlevideopage.css";

const SingleVideoPage = () => {
  const [loading, setLoading] = useState(true);
  useDocumentTitle("FitVid-SingleVideo");

  useEffect(() => {
    setLoading(false);
  }, []);
  return loading ? (
    <Loader />
  ) : (
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
