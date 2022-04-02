import React from "react";
import { useModal } from "../../Context/playlist-modal-context";
import "./playlistmodal.css";
import { AiOutlineClose } from "../../Assets/icons";
import NewPlaylist from "./NewPlayList/NewPlaylist";
import { usePlayLists } from "../../Context/playlist-context";
import PlayListItem from "./PlayListItem/PlayListItem";

const PlayListModal = (props) => {
  const { showPlayListModal, setShowPlayListModal } = useModal();
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
            <PlayListItem playlist={playlist} />
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
