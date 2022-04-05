import React, { useState, useEffect } from "react";
import Chip from "./Chip/Chip";
import "./chipscontainer.css";
import { categories } from "../../Temp/categories";
import { useVideos } from "../../Context/videos-context";
const ChipsContainer = () => {
  const [activeChipCategory, setActiveChipCategory] = useState(
    categories[0].categoryName
  );
  const { videos, setVideos } = useVideos();

  useEffect(() => {
    console.log(videos);
    console.log(activeChipCategory);
    const filteredVideos = videos.filter(
      (video) => video.categoryName === activeChipCategory
    );

    setVideos(filteredVideos);
  }, [activeChipCategory]);

  return (
    <div className="chips-container">
      {categories.map((category) => (
        <Chip
          key={category._id}
          title={category.categoryName}
          id={category._id}
          activeChipCategory={activeChipCategory}
          setActiveChipCategory={setActiveChipCategory}
        />
      ))}
    </div>
  );
};

export default ChipsContainer;
