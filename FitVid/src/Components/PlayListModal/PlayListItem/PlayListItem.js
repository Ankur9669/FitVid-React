import React from "react";
import "./playlistitem.css";

const PlayListItem = (props) => {
  const playlist = props.playlist;
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
