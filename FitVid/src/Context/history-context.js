import { createContext, useContext, useReducer } from "react";
import { historyReducer } from "../Reducer/history-reducer";

const HistoryContext = createContext();
const initialState = [];

const HistoryProvider = ({ children }) => {
  const [historyVideos, dispatchHistoryVideos] = useReducer(
    historyReducer,
    initialState
  );
  return (
    <HistoryContext.Provider value={{ likedVideos, dispatchLikedVideos }}>
      {children}
    </HistoryContext.Provider>
  );
};

const useLiked = () => useContext(HistoryContext);

export { useLiked, HistoryProvider };
