import { createContext, useState, useContext } from "react";

// Create a context for the user data
const UserContext = createContext();

// UserProvider component to wrap our app and provide user data to other components
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    userName: "",
    profilePic: "",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
