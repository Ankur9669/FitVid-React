import React from "react";
import "./playlistmodal.css";
import {
  useModal,
  AiOutlineClose,
  NewPlaylist,
  usePlayLists,
  PlayListItem,
} from "./index";
const PlayListModal = () => {
  const { showPlayListModal, setShowPlayListModal, clickedVideo } = useModal();
  const { playLists } = usePlayLists();

  return (
    <div
      style={showPlayListModal ? { display: "flex" } : { display: "none" }}
      className="modal-container" // Coming from CL
    >
      <div className="playlist-modal-content">
        <div className="playlist-modal-title-container">
          <p className="font-medium-large weight-semi-bold">Save to...</p>
          <AiOutlineClose
            className="playlist-modal-close-icon"
            onClick={() => setShowPlayListModal(!showPlayListModal)}
          />
        </div>
        <div className="playlists">
          {playLists.map((playlist) => (
            <PlayListItem playlist={playlist} video={clickedVideo} />
          ))}
        </div>
        <div className="playlist-modal-footer">
          <NewPlaylist />
        </div>
      </div>
    </div>
  );
};

export default PlayListModal;
