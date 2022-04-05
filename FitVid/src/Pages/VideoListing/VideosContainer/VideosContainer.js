import React, { useEffect, useState } from "react";
import Video from "../../../Components/Video/Video";
import "../videolisting.css";
import { fetchVideos } from "../../../Util/fetch-videos";
import { useCategory } from "../../../Context/category-context";

const VideosContainer = () => {
  const [videos, setVideos] = useState([]);
  const [videoToShow, setVideosToShow] = useState([]);
  const { category, search } = useCategory();

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
    let filteredVideos = videos;

    if (search !== "") {
      filteredVideos = videos.filter(
        (video) =>
          video.categoryName.toLowerCase().includes(search.toLowerCase()) ||
          video.title.toLowerCase().includes(search.toLowerCase()) ||
          video.channelName.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category !== "All") {
      filteredVideos = filteredVideos.filter(
        (video) => video.categoryName === category
      );
    }
    setVideosToShow(filteredVideos);
  }, [category, search]);
  return (
    <div className="videos-container">
      {videoToShow.map((video) => {
        return <Video key={video._id} video={video} />;
      })}
    </div>
  );
};

export default VideosContainer;
