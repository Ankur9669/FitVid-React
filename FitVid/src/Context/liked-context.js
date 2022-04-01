import { createContext, useContext, useReducer } from "react";
import { likeReducer } from "../Reducer/liked-reducer";

const LikeContext = createContext();
const initialState = [];

const LikedProvider = ({ children }) => {
  const [likedVideos, dispatchLikedVideos] = useReducer(
    likeReducer,
    initialState
  );
  return (
    <LikeContext.Provider value={{ likedVideos, dispatchLikedVideos }}>
      {children}
    </LikeContext.Provider>
  );
};

const useLiked = () => useContext(LikeContext);

export { useLiked, LikedProvider };
