import React, { useState } from "react";
import ReactPlayer from "react-player/lazy";
import {
  FiMoreVertical,
  MdWatchLater,
  RiPlayListAddFill,
} from "../../../Assets/icons";

const Video = (props) => {
  const video = props.video;
  const { url, authorImageUrl, title, channelName, categoryName, description } =
    video;
  const [showModal, setShowModal] = useState(false);

  const handleClickOnMoreIcon = () => {
    setShowModal((showModal) => !showModal);
  };
  return (
    <div className="videolisting-video-container">
      <ReactPlayer
        url={url}
        className="videolisting-video"
        width="100%"
        height="15rem"
        controls={true}
      />
      <div className="thumbnail-text-container">
        <div className="thumbnail-container">
          <img
            src={authorImageUrl}
            alt="author-image"
            className="img-responsive img-round"
          />
        </div>
        <div className="text-container">
          <p className="weight-semi-bold font-small video-title">{title}</p>
          <p className="weight-normal video-sub-title">{channelName}</p>
          <FiMoreVertical
            className="video-more-icon"
            onClick={handleClickOnMoreIcon}
          />
          <div
            className="video-modal"
            style={{ display: showModal ? "block" : "none" }}
          >
            <p className="video-modal-item">
              <MdWatchLater className="video-modal-icon" />
              Add to Watch Later
            </p>
            <p className="video-modal-item">
              <RiPlayListAddFill className="video-modal-icon" />
              Add to Playlist
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
