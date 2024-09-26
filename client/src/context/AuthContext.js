import { createContext, useState } from "react";

// Create a context for the user data
export const AuthContext = createContext();

// AuthProvider component to wrap our app and provide user data to other components
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    isLoggedIn: false,
    userName: "",
    profilePic: "",
  });

  // update the state after a user is logged in
  const updateAuthState = async (
    userName,
    profilePic = "https://www.pngitem.com/pimgs/m/391-3918613_personal-service-platform-person-icon-circle-png-transparent.png"
  ) => {
    setUser({
      isLoggedIn: true,
      userName,
      profilePic,
    });
  };

  return (
    <AuthContext.Provider value={{ user, updateAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
