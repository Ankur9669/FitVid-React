import { createContext, useContext, useState } from "react";

const PlayListModalContext = createContext();

const PlayListModalProvider = ({ children }) => {
  const [showPlayListModal, setShowPlayListModal] = useState(false);
  const [clickedVideo, setClickedVideo] = useState({});
  return (
    <PlayListModalContext.Provider
      value={{
        showPlayListModal,
        setShowPlayListModal,
        clickedVideo,
        setClickedVideo,
      }}
    >
      {children}
    </PlayListModalContext.Provider>
  );
};

const useModal = () => useContext(PlayListModalContext);

export { useModal, PlayListModalProvider };
