import React from "react";
import Chip from "./Chip/Chip";
import "./chipscontainer.css";
import { categories } from "../../Temp/categories";

const ChipsContainer = () => {
  return (
    <div className="chips-container">
      {categories.map((category) => (
        <Chip
          key={category._id}
          title={category.categoryName}
          id={category._id}
        />
      ))}
    </div>
  );
};

export default ChipsContainer;
