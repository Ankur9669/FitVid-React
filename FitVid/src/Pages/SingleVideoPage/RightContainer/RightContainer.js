import React from "react";
import Video from "../../../Components/Video/Video";
import "./rightcontainer.css";
import { videos } from "../../../Temp/video";
import { useVideos } from "../../../Context/video-context";

const RightContainer = () => {
  const { videos } = useVideos();

  const video = videos[0];
  return (
    <div className="right-container">
      <Video video={video} />
      <Video video={video} />
    </div>
  );
};

export default RightContainer;
