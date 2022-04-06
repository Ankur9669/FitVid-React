import React from "react";
import Navbar from "../NavBar/Navbar";
import "./loader.css";

const Loader = () => {
  return (
    <div className="waviy">
      <span>F</span>
      <span>i</span>
      <span>t</span>
      <span style={{ color: "var(--primary-color)" }}>V</span>
      <span style={{ color: "var(--primary-color)" }}>i</span>
      <span style={{ color: "var(--primary-color)" }}>d</span>
    </div>
  );
};

export default Loader;
