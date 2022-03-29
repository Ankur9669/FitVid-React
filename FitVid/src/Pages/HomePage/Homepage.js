import React from "react";
import Footer from "../../Components/Footer/Footer";
import SideBar from "../../Components/SideBar/SideBar";

const Homepage = () => {
  return (
    <div>
      <div className="content-section">
        <SideBar />
        <div className="content"></div>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
