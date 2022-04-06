import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Loader from "../../Components/Loader/Loader";
import Navbar from "../../Components/NavBar/Navbar";
import SideBar from "../../Components/SideBar/SideBar";
import HeroSection from "./HeroSection";
import "./homepage.css";
import { useDocumentTitle } from "../../Util/change-document-title";

const Homepage = () => {
  const [loading, setLoading] = useState(true);
  useDocumentTitle("FitVid-HomePage");

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
          <HeroSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
