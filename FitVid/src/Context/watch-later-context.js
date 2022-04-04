import { createContext, useContext, useReducer } from "react";
import { watchLaterReducer } from "../Reducer/watch-later-reducer";

const WatchLaterContext = createContext();
const initialState = [];

const WatchLaterProvider = ({ children }) => {
  const [watchLaterVideos, dispatchWatchLaterVideos] = useReducer(
    watchLaterReducer,
    initialState
  );
  return (
    <WatchLaterContext.Provider
      value={{ watchLaterVideos, dispatchWatchLaterVideos }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};

const useWatchLater = () => useContext(WatchLaterContext);

export { useWatchLater, WatchLaterProvider };
