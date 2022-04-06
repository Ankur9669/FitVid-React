import React from "react";
import "./navbar.css";
import PrimaryButton from "../Buttons/PrimaryButton";
import { Link } from "react-router-dom";
import { useCategory } from "../../Context/category-context";
import { useUser } from "../../Context/user-context";
const Navbar = () => {
  const { search, setSearch } = useCategory();
  const { user, dispatchUser } = useUser();

  const handleLogoutClick = () => {
    dispatchUser({ type: "LOGOUT" });
  };

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
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="btn-container-navbar">
        {!user.isUserLoggedIn ? (
          <>
            <Link to="/login">
              <PrimaryButton buttonText="Login" />
            </Link>
          </>
        ) : (
          <>
            <PrimaryButton buttonText="Logout" onClick={handleLogoutClick} />
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
