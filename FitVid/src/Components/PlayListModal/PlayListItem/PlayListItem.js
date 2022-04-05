import React from "react";
import "./playlistitem.css";
import {
  findIfVideoExistsInArray,
  addToPlayList,
  removeFromPlayList,
  useToast,
  usePlayLists,
} from "./index";

const PlayListItem = (props) => {
  const playlist = props.playlist;
  const playlistVideos = props.playlist.videos;
  const video = props.video;
  const { showToast } = useToast();
  const { playLists, dispatchPlayLists } = usePlayLists();

  let ifVideoExistsInPlayList = findIfVideoExistsInArray(
    playlistVideos,
    video._id
  );
  const handleInputChange = async () => {
    if (video === "") {
      showToast("First Select the Video", "ERROR");
      return;
    }
    if (!ifVideoExistsInPlayList) {
      // Add To Playlist
      const { data, success, message } = await addToPlayList(
        video,
        playlist._id
      );
      if (success) {
        dispatchPlayLists({
          type: "SET_PLAYLIST_VIDEOS",
          payload: { value: data.playlist },
        });
        showToast("Added To PlayList", "SUCCESS");
      } else {
        showToast("Cannot Add To PlayList", "ERROR");
      }
    } else {
      // Remove From PlayList
      const { data, success, message } = await removeFromPlayList(
        video._id,
        playlist._id
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
  return (
    <div className="playlist-item" key={playlist._id}>
      <input
        type="checkbox"
        name="playlist"
        id={playlist._id}
        className="playlist-item-checkbox"
        onChange={handleInputChange}
        checked={ifVideoExistsInPlayList}
      />
      <label htmlFor={playlist._id} className="playlist-item-label">
        {playlist.title}
      </label>
    </div>
  );
};

export default PlayListItem;
