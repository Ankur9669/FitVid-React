import { createContext, useContext, useReducer } from "react";
import { playListReducer } from "../Reducer/playlist-reducer";

const PlayListsContext = createContext();
const initialState = [];

const PlayListsProvider = ({ children }) => {
  const [playLists, dispatchPlayLists] = useReducer(
    playListReducer,
    initialState
  );
  return (
    <PlayListsContext.Provider value={{ playLists, dispatchPlayLists }}>
      {children}
    </PlayListsContext.Provider>
  );
};

const usePlayLists = () => useContext(PlayListsContext);

export { usePlayLists, PlayListsProvider };
