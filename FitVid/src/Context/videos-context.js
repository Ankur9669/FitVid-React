import { createContext, useContext, useState } from "react";
// import { historyReducer } from "../Reducer/history-reducer";

const VideosContext = createContext();
const initialState = [];

const VideosProvider = ({ children }) => {
  const [videos, setVideos] = useState(initialState);
  return (
    <VideosContext.Provider value={{ videos, setVideos }}>
      {children}
    </VideosContext.Provider>
  );
};

const useVideos = () => useContext(VideosContext);

export { useVideos, VideosProvider };
