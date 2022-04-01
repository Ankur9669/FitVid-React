import { createContext, useContext, useReducer } from "react";
import { userReducer } from "../Reducer/user-reducer";

const UserContext = createContext();
const initialState = {
  user: {},
  isUserLoggedIn: false,
};

const UserProvider = ({ children }) => {
  const [user, dispatchUser] = useReducer(userReducer, initialState);
  return (
    <UserContext.Provider value={{ user, dispatchUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { useUser, UserProvider };
