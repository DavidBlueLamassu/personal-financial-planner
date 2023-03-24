import React from "react";
import { NavLink } from "react-router-dom";
import Moment from "react-moment";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import SavingsIcon from "@mui/icons-material/Savings";

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <SavingsIcon />
        </IconButton>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          PERSONAL FINANCIAL PLANNER
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit" href="/">
            HOME
          </Button>
          <Button color="inherit" href="/PieChart">
            CHARTS
          </Button>
          <Button color="inherit" href="/Forecast">
            FORECAST
          </Button>
          <Button color="inherit" href="/Summary">
            SUMMARY
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
