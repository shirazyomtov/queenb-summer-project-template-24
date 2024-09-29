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
  const [anchorEl, setAnchorEl] = useState(null);
  const { register, successMessage, registerError } = useContext(AuthContext);

  // Open the Popover when clicking the Info icon
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close the Popover
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Determine if Popover is open
  const open = Boolean(anchorEl);
  const id = open ? "info-popover" : undefined;

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
          {/* Clickable Info Button */}
          <IconButton
            disableRipple
            style={{
              backgroundColor: "transparent",
            }}
            onClick={handleClick}
          >
            <InfoIcon />
          </IconButton>

          {/* Popover with more information */}
          <Popover
            position="absolute"
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Typography sx={{ p: 2 }}>
              <strong>Password must have:</strong>
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
            {successMessage} <br></br>
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
