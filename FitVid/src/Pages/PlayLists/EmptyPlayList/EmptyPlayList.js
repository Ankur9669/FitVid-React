import React from "react";
import PrimaryButton from "../../../Components/Buttons/PrimaryButton";
import { useModal } from "../../../Context/playlist-modal-context";
import "./emptyplaylist.css";

const EmptyPlayList = () => {
  const { showPlayListModal, setShowPlayListModal, setClickedVideo } =
    useModal();

  const handleCreatePlayListClick = () => {
    setShowPlayListModal(true);
    setClickedVideo("");
  };
  return (
    <div className="empty-playlist-container">
      <div className="empty-playlist-image-container">
        <img
          src="images/fitvid-empty-list.svg"
          alt="empty-playlist"
          className="img-responsive"
        />
      </div>
      <p className="font-large weight-semi-bold">
        You don't have any Playlists
      </p>
      <div className="spacer-1"></div>
      <PrimaryButton
        buttonText="Create PlayList"
        onClick={handleCreatePlayListClick}
      />
    </div>
  );
};

export default EmptyPlayList;
