import React from "react";
import "./playlistitem.css";
import { findIfVideoExistsInArray } from "../../../Util/find-if-video-exists-in-array";

const PlayListItem = (props) => {
  const playlist = props.playlist;
  const playlistVideos = props.playlist.videos;

  console.log(playlistVideos);
  //   let ifVideoExistsInPlayList = findIfVideoExistsInArray(playlistVideos);
  const handleInputChange = () => {};
  return (
    <div className="playlist-item" key={playlist._id}>
      <input
        type="checkbox"
        name="playlist"
        id="Test1"
        className="playlist-item-checkbox"
      />
      <label htmlFor="Test1" className="playlist-item-label">
        {playlist.title}
      </label>
    </div>
  );
};

export default PlayListItem;
