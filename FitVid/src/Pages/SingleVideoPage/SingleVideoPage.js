import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import { Navbar, Footer, LeftContainer, RightContainer } from "./index";
import "./singlevideopage.css";

const SingleVideoPage = () => {
  const [loading, setLoading] = useState(true);

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
