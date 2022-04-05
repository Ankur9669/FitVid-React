import React from "react";
import "./sidebar.css";
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

const SideBar = () => {
  const findActive = ({ isActive }) => {
    return {
      borderBottom: isActive && "2px solid var(--primary-color)",
    };
  };
  return (
    <aside className="sidebar">
      <div className="sidebar-items">
        <NavLink to="/" style={findActive} className="sidebar-item">
          <AiFillHome className="sidebar-icon" />
          Home
        </NavLink>
        <NavLink to="/videos" style={findActive} className="sidebar-item">
          <MdOutlineExplore className="sidebar-icon" />
          Explore
        </NavLink>

        <NavLink to="/liked" style={findActive} className="sidebar-item">
          <AiFillLike className="sidebar-icon" />
          Like
        </NavLink>

        <NavLink to="/playlists" style={findActive} className="sidebar-item">
          <RiPlayListAddFill className="sidebar-icon" />
          PlayLists
        </NavLink>

        <NavLink to="/watchlater" style={findActive} className="sidebar-item">
          <MdWatchLater className="sidebar-icon" />
          Watch Later
        </NavLink>

        <NavLink to="/history" style={findActive} className="sidebar-item">
          <AiOutlineHistory className="sidebar-icon" />
          History
        </NavLink>
      </div>
    </aside>
  );
};

export default SideBar;
