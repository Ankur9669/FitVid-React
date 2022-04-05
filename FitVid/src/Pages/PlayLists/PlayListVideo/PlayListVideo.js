import React from "react";
import "./playlistvideo.css";
import { RiPlayListAddFill, AiFillDelete } from "../../../Assets/icons";
import { Link } from "react-router-dom";
import { usePlayLists } from "../../../Context/playlist-context";
import { deletePlayList } from "../../../Util/remove-playlist";
import { useToast } from "../../LikedVideos";

const PlayListVideo = (props) => {
  const playList = props.playList;
  const { dispatchPlayLists } = usePlayLists();
  const { showToast } = useToast();

  const handleDeleteIconClick = async () => {
    const { data, success, message } = await deletePlayList(playList._id);
    if (success) {
      showToast("PlayList Deleted", "SUCCESS");
      dispatchPlayLists({
        type: "SET_PLAYLISTS",
        payload: { value: data.playlists },
      });
    } else {
      showToast("Error in deleting playlist", "ERROR");
    }
  };

  return (
    <div className="playlist-video">
      <Link to={`/playlist/${playList._id}`}>
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
      </Link>
      <div className="playlist-video-text-container">
        <p className="playlist-name font-medium">{playList.title}</p>
        <p className="playlist-cta-button font-medium">View Full PlayList</p>
        <AiFillDelete
          className="playlist-delete-icon"
          onClick={handleDeleteIconClick}
        />
      </div>
    </div>
  );
};

export default PlayListVideo;
