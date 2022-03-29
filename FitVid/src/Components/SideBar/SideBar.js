import React from "react";
import "./sidebar.css";
import {
  AiFillHome,
  AiFillLike,
  AiOutlineHistory,
  AiOutlineSearch,
  MdOutlineExplore,
  RiPlayListAddFill,
} from "../../Assets/icons";
const SideBar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-items">
        <p className="sidebar-item sidebar-item-active">
          <AiFillHome className="sidebar-icon" />
          Home
        </p>
        <p className="sidebar-item">
          <MdOutlineExplore className="sidebar-icon" />
          Explore
        </p>
        <p className="sidebar-item">
          <AiFillLike className="sidebar-icon" />
          Like
        </p>
        <p className="sidebar-item">
          <RiPlayListAddFill className="sidebar-icon" />
          PlayLists
        </p>
        <p className="sidebar-item">
          <AiOutlineHistory className="sidebar-icon" />
          History
        </p>
      </div>
    </aside>
  );
};

export default SideBar;
