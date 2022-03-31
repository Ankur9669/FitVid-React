import React from "react";
import "./navbar.css";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <p className="logo">
          Fit<p className="logo-sub-text">Vid</p>
        </p>
      </div>
      <div className="searchbar-container">
        <div className="input-box">
          <input
            type="search"
            className="input simple-input navbar-search"
            placeholder="Search Videos"
          />
        </div>
      </div>
      <div className="btn-container-navbar">
        <PrimaryButton buttonText="Login" />
      </div>
    </nav>
  );
};

export default Navbar;
