import React, { useState } from "react";
import {
  FiMoreVertical,
  MdWatchLater,
  RiPlayListAddFill,
  AiFillLike,
  AiOutlineLike,
} from "../../Assets/icons";
import {
  ReactPlayer,
  useLiked,
  findIfVideoExistsInArray,
  addToLikedVideos,
  removeFromLikedVideos,
  useToast,
  useUser,
  useNavigate,
} from "./index";

import "./video.css";

const Video = (props) => {
  const video = props.video;
  const {
    _id,
    url,
    authorImageUrl,
    title,
    channelName,
    categoryName,
    description,
  } = video;
  const [showModal, setShowModal] = useState(false);
  const { likedVideos, dispatchLikedVideos } = useLiked();
  const { showToast } = useToast();
  const { user } = useUser();
  const navigate = useNavigate();

  const handleClickOnMoreIcon = () => {
    setShowModal((showModal) => !showModal);
  };

  let isLikedVideo = findIfVideoExistsInArray(likedVideos, _id);

  const handleLikedItemClick = async () => {
    if (!user.isUserLoggedIn) {
      navigate("/login");
      showToast("Please Login First", "ERROR");
      return;
    }
    if (!isLikedVideo) {
      const { data, success, message } = await addToLikedVideos(video);
      if (success) {
        dispatchLikedVideos({
          type: "SET_LIKED_LIST",
          payload: { value: data.likes },
        });
        showToast(message, "SUCCESS");
      } else {
        // Show Error
        showToast(message, "ERROR");
      }
    } else {
      const { data, success, message } = await removeFromLikedVideos(_id);
      if (success) {
        dispatchLikedVideos({
          type: "SET_LIKED_LIST",
          payload: { value: data.likes },
        });
        showToast(message, "SUCCESS");
      } else {
        // Show Error

        showToast(message, "ERROR");
      }
    }
  };

  const handlePlayListItemClick = () => {
    if (!user.isUserLoggedIn) {
      navigate("/login");
      showToast("Please Login First", "ERROR");
      return;
    }
    if (isLikedVideo) {
    } else {
    }
  };
  const handleWatchLaterItemClick = () => {
    if (!user.isUserLoggedIn) {
      navigate("/login");
      showToast("Please Login First", "ERROR");
      return;
    }
    if (isLikedVideo) {
    } else {
    }
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
            <p className="video-modal-item" onClick={handleLikedItemClick}>
              {!isLikedVideo ? (
                <>
                  <AiOutlineLike className="video-modal-icon" />
                  Add to Liked Videos
                </>
              ) : (
                <>
                  <AiFillLike className="video-modal-icon" />
                  Remove from Liked Videos
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
