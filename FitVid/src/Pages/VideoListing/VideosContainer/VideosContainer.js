import React, { useEffect, useState } from "react";
import Video from "../../../Components/Video/Video";
import "../videolisting.css";
import { fetchVideos } from "../../../Util/fetch-videos";
import { useCategory } from "../../../Context/category-context";

const VideosContainer = () => {
  const [videos, setVideos] = useState([]);
  const [videoToShow, setVideosToShow] = useState([]);
  const { category } = useCategory();

  useEffect(async () => {
    const { data, success, message } = await fetchVideos();

    if (success) {
      setVideos(data);
      setVideosToShow(data);
    } else {
      console.log(message);
    }
  }, []);

  useEffect(() => {
    let filteredVideos = [];
    if (category !== "All") {
      filteredVideos = videos.filter(
        (video) => video.categoryName === category
      );
    } else {
      filteredVideos = videos;
    }
    setVideosToShow(filteredVideos);
  }, [category]);
  return (
    <div className="videos-container">
      {videoToShow.map((video) => {
        return <Video key={video._id} video={video} />;
      })}
    </div>
  );
};

export default VideosContainer;
