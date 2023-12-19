import AccountCircle from "@mui/icons-material/AccountCircle";
import {
  AppBar,
  Box,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import SearchList from "../SearchList/SearchList";
import Searchbox from "../Searchbox/Searchbox";
import { DarkMode } from "@mui/icons-material";
import { MovieContext } from "../../context/movieContext";
import LightModeIcon from "@mui/icons-material/LightMode";

function Header() {
  const { mode, setMode } = useContext(MovieContext);

  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const logoutHandler = () => {
    setAuth(false);
    localStorage.clear();
    navigate("login");
  };
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const UserBox = styled(Box)({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    justifyContent: "space-around",
  });
  return (
    <Box>
      <AppBar sx={{ backgroundColor: "primary" ,opacity:"0.9"}}>
        <StyledToolbar>
          <Typography variant="h4" color="error">
            MovieWorld
          </Typography>
          <ListItem
            disablePadding
            sx={{
              backgroundColor: "primary",
              width: "50px",
              borderRadius: "45%",
            }}
          >
            <ListItemButton>
              <ListItemIcon
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {mode == "light" ? <DarkMode /> : <LightModeIcon />}
                {/* <DarkMode
                  onClick={() => setMode(mode === "light" ? "dark" : "light")}
                /> */}
              </ListItemIcon>
              {/* <Switch
                // checked={checked}
                onChange={() => setMode(mode === "light" ? "dark" : "light")}
                // inputProps={{ "aria-label": "controlled" }}
              /> */}
            </ListItemButton>
          </ListItem>
          {auth && (
            <UserBox>
              <Typography variant="h6">Logout</Typography>
              <IconButton
                onClick={logoutHandler}
                sx={{
                  backgroundColor: "primary",
                  "&:hover": {
                    color: "red",
                  },
                }}
              >
                <AccountCircle />
              </IconButton>
            </UserBox>
          )}
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
