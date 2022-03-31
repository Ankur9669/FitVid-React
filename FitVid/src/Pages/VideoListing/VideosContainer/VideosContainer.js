import React, { useEffect, useState } from "react";
import Video from "./Video";
import "../videolisting.css";
import { videos } from "../../../Temp/video";
import { fetchVideos } from "../../../Util/fetch-videos";

const VideosContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(async () => {
    const { data, success, message } = await fetchVideos();

    if (success) {
      setVideos(data);
    } else {
      console.log(message);
    }
  }, []);

  return (
    <div className="videos-container">
      {videos.map((video) => {
        return <Video key={video._id} video={video} />;
      })}
    </div>
  );
};

export default VideosContainer;
