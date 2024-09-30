import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { IconButton, Popover, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import styles from "../../styles/App.module.css";

const UserForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicURL, setProfilePicURL] = useState("");
  const [popup, setPopup] = useState(null);
  const { register, successMessage, registerError } = useContext(AuthContext);

  // Determine if Popup is open
  const open = Boolean(popup);
  const id = open ? "info-popover" : undefined;

  // Open the Popup when clicking the Info icon
  const handleClick = (event) => {
    setPopup(event.currentTarget);
  };

  // Close the Popup
  const handleClose = () => {
    setPopup(null);
  };

  // fetch the data of the new user after clicking the "Sign Up" button
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register({ userName, email, password, profilePicURL });
      setUserName("");
      setEmail("");
      setPassword("");
      setProfilePicURL("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <form className="create" onSubmit={handleSubmit}>
        <h3>Register</h3>

        <label>Username:</label>
        <input
          type="text"
          required
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
        <br />
        <label>Email:</label>
        <input
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br />
        <div style={{ display: "flex", alignItems: "left" }}>
          <label>Password:</label>
          <IconButton
            disableRipple
            style={{
              backgroundColor: "transparent",
            }}
            onClick={handleClick}
          >
            <InfoIcon />
          </IconButton>

          <Popover
            position="absolute"
            id={id}
            open={open}
            anchorEl={popup}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Typography sx={{ p: 2 }}>
              <strong>Password must include:</strong>
              <ul className={styles.paragraph}>
                <li>At least 8 characters</li>
                <li>At least one capital letter</li>
                <li>At least one number</li>
                <li>At least one special sign</li>
              </ul>
            </Typography>
          </Popover>
        </div>
        <input
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        <label>Profile Picture URL:</label>
        <input
          type="text"
          onChange={(e) => setProfilePicURL(e.target.value)}
          value={profilePicURL}
        />
        <br />
        <button>Sign Up</button>
        {registerError && <div className="error">{registerError}</div>}
        {successMessage && (
          <div className="success">
            {successMessage} <br />
            <Link to="/login" className={"../styles.appLink"}>
              Log In
            </Link>
          </div>
        )}
      </form>
    </div>
  );
};

export default UserForm;
