import { createContext, useContext, useState } from "react";

const VideosContext = createContext();
const VideosProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  return (
    <VideosContext.Provider value={{ videos, setVideos }}>
      {children}
    </VideosContext.Provider>
  );
};

const useVideos = () => useContext(VideosContext);

export { useVideos, VideosProvider };
