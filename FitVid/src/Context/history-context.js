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
    <HistoryContext.Provider value={{ historyVideos, dispatchHistoryVideos }}>
      {children}
    </HistoryContext.Provider>
  );
};

const useHistory = () => useContext(HistoryContext);

export { useHistory, HistoryProvider };
