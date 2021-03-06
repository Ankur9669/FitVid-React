import { createContext, useContext, useState } from "react";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  return (
    <CategoryContext.Provider
      value={{ category, setCategory, search, setSearch }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => useContext(CategoryContext);

export { useCategory, CategoryProvider };
