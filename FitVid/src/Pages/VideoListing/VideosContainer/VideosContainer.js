import React from "react";
import Video from "./Video";
import "../videolisting.css";
import { videos } from "../../../Temp/video";

const VideosContainer = () => {
  return (
    <div className="videos-container">
      {videos.map((video) => {
        return <Video key={video._id} video={video} />;
      })}
    </div>
  );
};

export default VideosContainer;
