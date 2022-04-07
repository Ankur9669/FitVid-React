import React from "react";
import "./navbar.css";

import {
  PrimaryButton,
  Link,
  useCategory,
  useUser,
  useHistory,
  usePlayLists,
  useWatchLater,
  useLiked,
  useToast,
} from "./index";
const Navbar = () => {
  const { search, setSearch } = useCategory();
  const { user, dispatchUser } = useUser();
  const { dispatchLikedVideos } = useLiked();
  const { dispatchHistoryVideos } = useHistory();
  const { dispatchPlayLists } = usePlayLists();
  const { dispatchWatchLaterVideos } = useWatchLater();
  const { showToast } = useToast();

  const handleLogoutClick = () => {
    dispatchUser({ type: "LOGOUT" });
    dispatchLikedVideos({ type: "RESET" });
    dispatchHistoryVideos({ type: "RESET" });
    dispatchPlayLists({ type: "RESET" });
    dispatchWatchLaterVideos({ type: "RESET" });
    showToast("Logged Out Succesfully", "SUCCESS");
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
