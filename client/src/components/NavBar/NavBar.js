import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import styles from "../../styles/App.module.css";
import { Menu, MenuItem, IconButton, Avatar } from "@mui/material";

export const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  const [popup, setPopup] = useState(null);

  const handleClick = (event) => {
    setPopup(event.currentTarget);
  };

  const handleClose = () => {
    setPopup(null);
  };

  return (
    <nav className={styles.appNav}>
      {user.isLoggedIn ? (
        <div>
          <IconButton onClick={handleClick}>
            <Avatar
              src={user.profilePic}
              alt="profile pic"
              sx={{ width: 50, height: 50 }}
            />
          </IconButton>

          <Menu anchorEl={popup} open={Boolean(popup)} onClose={handleClose}>
            <MenuItem
              disabled
              sx={{
                "&.Mui-disabled": {
                  opacity: 1,
                },
              }}
            >
              Hello, {user.userName}!
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                logout();
              }}
            >
              Log Out
            </MenuItem>
          </Menu>
        </div>
      ) : (
        <Link to="/login" className={styles.appLink}>
          Log In / Register
        </Link>
      )}
    </nav>
  );
};
