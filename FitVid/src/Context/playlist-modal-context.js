import { createContext, useContext, useState } from "react";

const PlayListModalContext = createContext();

const PlayListModalProvider = ({ children }) => {
  const [showPlayListModal, setShowPlayListModal] = useState(true);
  return (
    <PlayListModalContext.Provider
      value={{ showPlayListModal, setShowPlayListModal }}
    >
      {children}
    </PlayListModalContext.Provider>
  );
};

const useModal = () => useContext(PlayListModalContext);

export { useModal, PlayListModalProvider };
