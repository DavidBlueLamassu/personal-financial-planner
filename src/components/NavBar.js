import * as React from "react";
import { NavLink } from "react-router-dom";
// import Moment from "react-moment";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Container,
  Box,
  MenuItem,
  Menu,
} from "@mui/material";
import SavingsIcon from "@mui/icons-material/Savings";
import MenuIcon from "@mui/icons-material/Menu";

// const pages = ["HOME", "CHARTS", "FORECAST", "SUMMARY"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          >
            <SavingsIcon />
          </IconButton>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* {pages.map((page) => ( */}
              <MenuItem
                component={NavLink}
                to="/Home"
                onClick={handleCloseNavMenu}
              >
                HOME
              </MenuItem>
              <MenuItem
                component={NavLink}
                to="/PieChart"
                onClick={handleCloseNavMenu}
              >
                CHARTS
              </MenuItem>
              <MenuItem
                component={NavLink}
                to="/Forecast"
                onClick={handleCloseNavMenu}
              >
                FORECAST
              </MenuItem>

              <MenuItem
                component={NavLink}
                to="/Summary"
                onClick={handleCloseNavMenu}
              >
                SUMMARY
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            className="navTitle"
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex" } }}
          >
            PERSONAL FINANCIAL PLANNER
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
            <Stack direction="row" spacing={2}>
              <Button color="inherit" component={NavLink} to="/">
                HOME
              </Button>
              <Button color="inherit" component={NavLink} to="/PieChart">
                CHARTS
              </Button>
              <Button color="inherit" component={NavLink} to="/Forecast">
                FORECAST
              </Button>
              <Button color="inherit" component={NavLink} to="/Summary">
                SUMMARY
              </Button>
              <NavLink
                to="formName"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {/* FormName */}
              </NavLink>
              <NavLink
                to="formIncome"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {/* FormName */}
              </NavLink>
              <NavLink
                to="formExpenses"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {/* FormName */}
              </NavLink>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
