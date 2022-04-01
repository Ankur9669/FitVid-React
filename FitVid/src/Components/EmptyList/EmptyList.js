import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import { Link } from "react-router-dom";
import "./emptylist.css";

const EmptyList = () => {
  return (
    <div className="empty-list-container">
      <div className="empty-list-image-container">
        <img
          src="images/fitvid-empty-list.svg"
          alt="empty-list"
          className="img-responsive"
        />
      </div>
      <p className="font-large weight-semi-bold">List is empty</p>
      <div className="spacer-1"></div>
      <Link to="/videos">
        <PrimaryButton buttonText="Add To List" />
      </Link>
    </div>
  );
};

export default EmptyList;
