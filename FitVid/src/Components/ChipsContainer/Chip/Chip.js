import React from "react";
import { useCategory } from "../../../Context/category-context";
import "./chip.css";

const Chip = ({ title, id }) => {
  const { category, setCategory } = useCategory();
  return (
    <div
      className={category === title ? "chip chip-active" : "chip"}
      onClick={() => setCategory(title)}
    >
      {title}
    </div>
  );
};

export default Chip;
