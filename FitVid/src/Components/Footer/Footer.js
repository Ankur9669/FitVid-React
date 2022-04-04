import React from "react";
import "./footer.css";
import {
  AiFillHome,
  AiFillLike,
  AiOutlineHistory,
  AiOutlineSearch,
  MdOutlineExplore,
  RiPlayListAddFill,
  MdWatchLater,
} from "../../Assets/icons";
import { NavLink } from "react-router-dom";
const Footer = () => {
  const findActive = ({ isActive }) => {
    return {
      color: isActive && "var(--primary-color)",
    };
  };
  return (
    <footer className="footer">
      <div className="footer-items">
        <NavLink to="/" style={findActive} className="footer-item">
          <AiFillHome className="footer-item-icon " />
          <p className="font-small footer-item-text">Home</p>
        </NavLink>

        <NavLink to="/videos" style={findActive} className="footer-item ">
          <MdOutlineExplore className="footer-item-icon " />
          <p className="font-small footer-item-text">Explore</p>
        </NavLink>

        <NavLink to="/liked" style={findActive} className="footer-item ">
          <AiFillLike className="footer-item-icon " />
          <p className="font-small footer-item-text">Like</p>
        </NavLink>

        <NavLink to="/playlists" style={findActive} className="footer-item">
          <RiPlayListAddFill className="footer-item-icon " />
          <p className="font-small footer-item-text">PlayLists</p>
        </NavLink>

        <NavLink to="/watchlater" style={findActive} className="footer-item">
          <MdWatchLater className="footer-item-icon " />
          <p className="font-small footer-item-text">WatchLater</p>
        </NavLink>

        <NavLink to="/history" style={findActive} className="footer-item">
          <AiOutlineHistory className="footer-item-icon " />
          <p className="font-small footer-item-text">History</p>
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
