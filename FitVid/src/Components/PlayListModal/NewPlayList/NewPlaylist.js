import React, { useState } from "react";
import { RiPlayListAddFill } from "../../../Assets/icons";
import SecondaryButton from "../../Buttons/SecondaryButton";
import "./newplaylist.css";
import { createPlayList } from "../../../Util/create-playlist";
import { findIfPlayListExistsInArray } from "../../../Util/find-if-video-exists-in-array";
import { useToast } from "../../Video";
import { usePlayLists } from "../../../Context/playlist-context";

const NewPlaylist = () => {
  const [isCreateNewPlayListClicked, setCreateNewPlayListClicked] =
    useState(false);
  const [playListTitle, setPlayListTitle] = useState("");
  const { showToast } = useToast();
  const { playLists, dispatchPlayLists } = usePlayLists();

  const handleCreateNewPlayListIconClick = () => {
    setCreateNewPlayListClicked(
      (isCreateNewPlayListClicked) => !isCreateNewPlayListClicked
    );
  };

  const handleCreatePlayListClick = async () => {
    if (playListTitle === "") {
      showToast("Name Could not be Empty", "ERROR");
      return;
    }

    const ifPlayListExists = findIfPlayListExistsInArray(
      playLists,
      playListTitle
    );

    if (ifPlayListExists) {
      showToast("PlayList Already Exists", "ERROR");
      return;
    }
    const { data, success, message } = await createPlayList(playListTitle);
    if (success) {
      console.log(data.playlists);
      dispatchPlayLists({
        type: "SET_PLAYLISTS",
        payload: { value: data.playlists },
      });
      showToast("PlayList Created", "SUCCESS");
      setCreateNewPlayListClicked(false);
      setPlayListTitle("");
    } else {
      showToast("SomeThing Went Wrong", "ERROR");
      setPlayListTitle("");
    }
  };
  return !isCreateNewPlayListClicked ? (
    <div
      className="new-playlist-item"
      onClick={handleCreateNewPlayListIconClick}
    >
      <RiPlayListAddFill className="new-playlist-icon" />
      <p className="font-medium">Create New PlayList</p>
    </div>
  ) : (
    <div className="new-playlist-item-container">
      <p className="font-medium">PlayList Name</p>

      <input
        type="text"
        placeholder="Name"
        className="margin-vertical-sm font-medium"
        value={playListTitle}
        onChange={(e) => setPlayListTitle(e.target.value)}
      />
      <SecondaryButton
        buttonText="Create PlayList"
        className="create-playlist-button"
        onClick={handleCreatePlayListClick}
      />
    </div>
  );
};

export default NewPlaylist;
