import { createContext, useState } from "react";
import axiosInstance from "../services/api";
import { useNavigate } from "react-router-dom";

const defaultImage =
  "https://www.pngitem.com/pimgs/m/391-3918613_personal-service-platform-person-icon-circle-png-transparent.png";

// Create a context for the user data
export const AuthContext = createContext();

// AuthProvider component to wrap our app and provide user data to other components
const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    isLoggedIn: false,
    userName: "",
    profilePic: "",
  });
  const [error, setError] = useState(null);

  const login = async ({ email, password }) => {
    try {
      const response = await axiosInstance.post(
        "http://localhost:5000/api/users/login",
        {
          email,
          password,
        }
      );

      const { userName, profilePic } = response.data;

      setUser({
        isLoggedIn: true,
        userName,
        profilePic: profilePic ?? defaultImage,
      });
      navigate("/"); //return to home page
    } catch (err) {
      console.log(err);
      setError("Incorrect username or password");
    }
  };

  const logout = async () => {
    setUser({ isLoggedIn: false, userName: "", profilePic: "" });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
