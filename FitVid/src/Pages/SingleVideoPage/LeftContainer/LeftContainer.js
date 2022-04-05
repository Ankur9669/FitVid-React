import React, { useEffect, useState } from "react";
import "./leftcontainer.css";
import ReactPlayer from "react-player";
import {
  AiFillLike,
  AiOutlineLike,
  MdWatchLater,
  MdOutlineWatchLater,
  RiPlayListAddFill,
} from "../../../Assets/icons";
import {
  useNavigate,
  useParams,
  Axios,
  useToast,
  addToLikedVideos,
  removeFromLikedVideos,
  findIfVideoExistsInArray,
  useLiked,
  usePlayLists,
  useUser,
  useModal,
} from "./index";

const LeftContainer = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState({});
  const { showToast } = useToast();
  const navigate = useNavigate();
  const { likedVideos, dispatchLikedVideos } = useLiked();
  const { playLists, dispatchPlayLists } = usePlayLists();
  const { user } = useUser();
  const { showPlayListModal, setShowPlayListModal, setClickedVideo } =
    useModal();

  let isLikedVideo = findIfVideoExistsInArray(likedVideos, videoId);

  useEffect(async () => {
    if (videoId !== "" && videoId != undefined) {
      try {
        const response = await Axios.get(`/api/video/${videoId}`);
        if (response.status === 200) {
          setVideo(response.data.video);
        } else {
          showToast("Unable to fetch Video", "ERROR");
          navigate("/videos");
        }
      } catch (e) {
        console.log(e);
        showToast("Unable to fetch Video", "ERROR");
        navigate("/videos");
      }
    }
  }, [videoId]);

  const handleLikeIconClick = async () => {
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
      const { data, success, message } = await removeFromLikedVideos(videoId);
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

  const handlePlayListIconClick = () => {
    if (!user.isUserLoggedIn) {
      navigate("/login");
      showToast("Please Login First", "ERROR");
      return;
    }
    setShowPlayListModal((showPlayListModal) => !showPlayListModal);
    setClickedVideo(video);
  };
  return (
    <div className="left-container">
      <div className="single-video-container">
        <ReactPlayer
          url={video?.url}
          className="single-video"
          width="100%"
          height="100%"
        />
        <div className="single-video-info">
          <p className="font-medium-large weight-semi-bold single-video-title">
            {video?.title}
          </p>

          <div className="single-video-icons-container">
            <div
              className="single-video-icon-container"
              onClick={handleLikeIconClick}
            >
              {!isLikedVideo ? (
                <>
                  <AiOutlineLike className="single-video-icon" />
                  <p className="font-medium">Like</p>
                </>
              ) : (
                <>
                  <AiFillLike className="single-video-icon" />
                  <p className="font-medium">Remove</p>
                </>
              )}
            </div>

            <div
              className="single-video-icon-container"
              onClick={handlePlayListIconClick}
            >
              <RiPlayListAddFill className="single-video-icon" />
              <p className="font-medium">Save</p>
            </div>
          </div>
        </div>
        <div className="thumbnail-text-container">
          <div className="thumbnail-container">
            <img
              src={video?.authorImageUrl}
              alt="author-image"
              className="img-responsive img-round"
            />
          </div>
          <div className="text-container">
            <p className="weight-semi-bold font-small video-title">
              {video?.channelName}
            </p>
            <p className="weight-normal video-sub-title">
              {video?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftContainer;
