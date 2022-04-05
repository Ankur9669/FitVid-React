import React from "react";
import "./chip.css";

const Chip = ({ title, id, activeChipCategory, setActiveChipCategory }) => {
  return (
    <div
      className={title === activeChipCategory ? "chip chip-active" : "chip"}
      onClick={() => setActiveChipCategory(title)}
    >
      {title}
    </div>
  );
};

export default Chip;
