import { createContext, useState } from "react";
import { httpService } from "../services/api";
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
  const [registerError, setRegisterError] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const register = async ({ userName, email, password, profilePicURL }) => {
    //check if password meets the criteria - at least 8 characters, numbers letters capital case and a sign
    if (password.length < 8) {
      setRegisterError("Password must be at least 8 characters long");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setRegisterError("Password must contain at least one capital letter");
      return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>~[\]\\/'`_+=-]/.test(password)) {
      setRegisterError("Password must contain at least one spacial symbol");
      return;
    }
    try {
      await httpService.post("http://localhost:5000/api/users", {
        userName,
        email,
        password,
        profilePicURL,
      });
      setSuccessMessage("new user created");
    } catch (err) {
      console.log(err);
      setRegisterError("Couldn't register user, try again");
    }
  };

  const login = async ({ email, password }) => {
    try {
      const response = await httpService.post(
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
      setLoginError("Incorrect username or password");
    }
  };

  const logout = async () => {
    setUser({ isLoggedIn: false, userName: "", profilePic: "" });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        logout,
        successMessage,
        registerError,
        loginError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
