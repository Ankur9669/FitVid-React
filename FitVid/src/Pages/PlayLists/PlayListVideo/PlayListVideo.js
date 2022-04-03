import React from "react";
import "./playlistvideo.css";
import { RiPlayListAddFill } from "../../../Assets/icons";
import { Link } from "react-router-dom";

const PlayListVideo = (props) => {
  const playList = props.playList;

  return (
    <Link to={`/playlist/${playList._id}`} className="playlist-video">
      <div className="playlist-video-thumbnail-container">
        <img
          src="images/fitvid-hero-1.jpg"
          alt="playlist-item"
          className="img-responsive"
        />
        <div className="playlist-video-text-overlay-container">
          <RiPlayListAddFill className="playlist-video-icon" />
          <p className="playlist-video-number font-medium-large">
            {playList.videos.length}
          </p>
        </div>
      </div>
      <div className="playlist-video-text-container">
        <p className="playlist-name font-medium">{playList.title}</p>
        <p className="playlist-cta-button font-medium">View Full PlayList</p>
      </div>
    </Link>
  );
};

export default PlayListVideo;
