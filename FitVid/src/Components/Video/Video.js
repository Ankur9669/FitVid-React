import React, { useState, useEffect } from "react";
import {
  FiMoreVertical,
  MdWatchLater,
  RiPlayListAddFill,
  AiFillLike,
  AiOutlineLike,
  MdOutlineWatchLater,
} from "../../Assets/icons";
import {
  ReactPlayer,
  useLiked,
  useWatchLater,
  findIfVideoExistsInArray,
  addToLikedVideos,
  removeFromLikedVideos,
  addToWatchLaterVideos,
  removeFromWatchLaterVideos,
  useToast,
  useUser,
  useNavigate,
  useHistory,
  addToHistoryVideos,
  removeFromHistoryVideos,
  useModal,
} from "./index";
import { usePlayLists } from "../../Context/playlist-context";
import { removeFromPlayList } from "../PlayListModal/PlayListItem";
import { Link, useParams } from "react-router-dom";
import "./video.css";

const Video = (props) => {
  const video = props.video;
  const isPlayListVideo = props.isPlayListVideo || false;
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
  const { historyVideos, dispatchHistoryVideos } = useHistory();
  const { watchLaterVideos, dispatchWatchLaterVideos } = useWatchLater();
  const { showPlayListModal, setShowPlayListModal, setClickedVideo } =
    useModal();
  const navigate = useNavigate();
  const { playLists, dispatchPlayLists } = usePlayLists();
  const { playlistId } = useParams();

  const handleClickOnMoreIcon = () => {
    setShowModal((showModal) => !showModal);
  };

  let isLikedVideo = findIfVideoExistsInArray(likedVideos, _id);
  let isVideoInHistory = findIfVideoExistsInArray(historyVideos, _id);
  let isVideoInWatchLater = findIfVideoExistsInArray(watchLaterVideos, _id);

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

  const handlePlayListItemClick = async () => {
    if (!user.isUserLoggedIn) {
      navigate("/login");
      showToast("Please Login First", "ERROR");
      return;
    }
    if (!isPlayListVideo) {
      setShowPlayListModal((showPlayListModal) => !showPlayListModal);
      setClickedVideo(video);
    } else {
      const { data, success, message } = await removeFromPlayList(
        _id,
        playlistId
      );
      if (success) {
        dispatchPlayLists({
          type: "SET_PLAYLIST_VIDEOS",
          payload: { value: data.playlist },
        });
        showToast("Removed From PlayList", "SUCCESS");
      } else {
        showToast("Something Went Wrong", "ERROR");
      }
    }
  };
  const handleWatchLaterItemClick = async () => {
    if (!user.isUserLoggedIn) {
      navigate("/login");
      showToast("Please Login First", "ERROR");
      return;
    }
    if (!isVideoInWatchLater) {
      const { data, success, message } = await addToWatchLaterVideos(video);
      if (success) {
        dispatchWatchLaterVideos({
          type: "SET_WATCH_LATER_LIST",
          payload: { value: data.watchlater },
        });
        showToast(message, "SUCCESS");
      } else {
        // Show Error
        showToast(message, "ERROR");
      }
    } else {
      const { data, success, message } = await removeFromWatchLaterVideos(_id);
      if (success) {
        dispatchWatchLaterVideos({
          type: "SET_WATCH_LATER_LIST",
          payload: { value: data.watchlater },
        });
        showToast(message, "SUCCESS");
      } else {
        // Show Error
        showToast(message, "ERROR");
      }
    }
  };

  const handleVideoPlayClick = async () => {
    if (!isVideoInHistory) {
      const { data, success, message } = await addToHistoryVideos(video);
      if (success) {
        dispatchHistoryVideos({
          type: "SET_HISTORY_LIST",
          payload: { value: data.history },
        });
      } else {
        showToast("Unable to push in history", "ERROR");
      }
    } else {
      // This means Video is available in
      // history that means we first need to remove
      // than update the history list

      const { data, success, message } = await removeFromHistoryVideos(_id);
      if (success) {
        const { data, success, message } = await addToHistoryVideos(video);
        if (success) {
          dispatchHistoryVideos({
            type: "SET_HISTORY_LIST",
            payload: { value: data.history },
          });
        } else {
          showToast("Unable to push in history", "ERROR");
        }
      } else {
        showToast("Error in deleting item", "ERROR");
      }
    }
    navigate(`/videos/${_id}`);
  };

  return (
    <div
      className="videolisting-video-container"
      onClick={handleVideoPlayClick}
    >
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
            <p className="video-modal-item" onClick={handleWatchLaterItemClick}>
              {!isVideoInWatchLater ? (
                <>
                  <MdOutlineWatchLater className="video-modal-icon" />
                  Add to Watch Later
                </>
              ) : (
                <>
                  <MdWatchLater className="video-modal-icon" />
                  Remove from Watch Later
                </>
              )}
            </p>
            <p className="video-modal-item" onClick={handlePlayListItemClick}>
              <RiPlayListAddFill className="video-modal-icon" />
              {!isPlayListVideo ? (
                <>Save to Playlist</>
              ) : (
                <>Remove From PlayList</>
              )}
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
