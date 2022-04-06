import React from "react";
import Video from "../../../Components/Video/Video";
import "./rightcontainer.css";
import { videos } from "../../../Temp/video";

const RightContainer = () => {
  const video = videos[0];
  return (
    <div className="right-container">
      <Video video={video} />
      <Video video={video} />
    </div>
  );
};

export default RightContainer;
