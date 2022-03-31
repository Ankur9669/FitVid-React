import React from "react";
import "./footer.css";
import {
  AiFillHome,
  AiFillLike,
  AiOutlineHistory,
  AiOutlineSearch,
  MdOutlineExplore,
} from "../../Assets/icons";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-items">
        <div className="footer-item footer-item-active">
          <AiFillHome className="footer-item-icon " />
          <p className="font-small footer-item-text">Home</p>
        </div>

        <div className="footer-item ">
          <MdOutlineExplore className="footer-item-icon " />
          <p className="font-small footer-item-text">Explore</p>
        </div>

        <div className="footer-item ">
          <AiFillLike className="footer-item-icon " />
          <p className="font-small footer-item-text">Like</p>
        </div>

        <div className="footer-item">
          <AiOutlineSearch className="footer-item-icon " />
          <p className="font-small footer-item-text">Search</p>
        </div>

        <div className="footer-item">
          <AiOutlineHistory className="footer-item-icon " />
          <p className="font-small footer-item-text">History</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
