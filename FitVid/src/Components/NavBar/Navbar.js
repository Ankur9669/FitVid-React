import React from "react";
import "./navbar.css";
import PrimaryButton from "../Buttons/PrimaryButton";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/" className="logo">
          Fit<p className="logo-sub-text">Vid</p>
        </Link>
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
        <Link to="/login">
          <PrimaryButton buttonText="Login" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
