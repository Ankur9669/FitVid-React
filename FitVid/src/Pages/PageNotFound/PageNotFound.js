import React from "react";
import { PrimaryButton } from "../Authentication";
import { Footer, Navbar } from "../LikedVideos";
import "./pagenotfound.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useDocumentTitle } from "../../Util/change-document-title";

const PageNotFound = () => {
  const navigate = useNavigate();
  useDocumentTitle("FitVid-404");
  return (
    <div>
      <Navbar />
      <div className="page-not-found-container">
        <img src="/images/fitvid-404.svg" className="not-found-image" />
        <PrimaryButton
          buttonText="Back To Previous Page"
          onClick={() => navigate(-1)}
        />
      </div>
      <Footer />
    </div>
  );
};

export default PageNotFound;
