import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Badge from "@material-ui/core/Badge";
import LogoutIcon from "@mui/icons-material/Logout";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    [theme.breakpoints.up("sm")]: {
      zIndex: theme.zIndex.drawer + 1,
    },
  },
  rightIcons: {
    marginLeft: theme.spacing(0.5),
  },
  spacer: {
    flexGrow: 1,
  },
}));

export default function Header({
  handleDrawerToggle,
  toggleDarkMode,
  darkMode,
}) {
  const classes = useStyles();
  const [username, setUsername] = useState('');

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = localStorage.getItem('token');
  
        if (token) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  
          const response = await axios.get('https://hvac-system.azurewebsites.net/user/me');
          console.log(response.data.name);
          if (response.status === 200) {
            // Assuming the response.data has the structure { name: user.fname, id: user._id }
            setUsername(response.data.name); 
          } else {
          }
        } else {
        }
      } catch (error) {
        console.error('Error fetching user authentication status:', error);
      }
    };
  
    checkAuthStatus();
  }, []); 
  
  
  return (
    <AppBar position="fixed" className={classes.appbar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Your Dashboard
        </Typography>
        <div className={classes.spacer} />
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDarkMode}
          edge="start"
          className={classes.rightIcons}
        >
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          className={classes.rightIcons}
          onClick={() => {
            localStorage.removeItem("token");
            window.location.reload();
          }}
        >
          <div style={{ margin: "5px 20px 5px 5px" }}>
            <Typography variant="h6" noWrap>
              Hello {username}!!
            </Typography>
          </div>

          <Badge color="secondary">
            <LogoutIcon />
          </Badge>
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          className={classes.rightIcons}
        >
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
