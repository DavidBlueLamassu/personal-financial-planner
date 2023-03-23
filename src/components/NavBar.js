// import React from "react";
// import { NavLink } from "react-router-dom";
// import Moment from "react-moment";

// // import styles from "./Navbar.styles.css";

// function NavBar() {
//   return (
//     <ul className="nav nav-tabs">
//       <li className="nav-item">
//         <NavLink
//           to="/"
//           end
//           className={({ isActive }) =>
//             isActive ? "nav-link active" : "nav-link"
//           }
//         >
//           Home
//         </NavLink>
//       </li>
//       <li className="nav-item">
//         <NavLink
//           to="pieChart"
//           className={({ isActive }) =>
//             isActive ? "nav-link active" : "nav-link"
//           }
//         >
//           Pie Chart
//         </NavLink>
//       </li>
//       <li className="nav-item">
//         <NavLink
//           to="forecast"
//           className={({ isActive }) =>
//             isActive ? "nav-link active" : "nav-link"
//           }
//         >
//           Forecast
//         </NavLink>
//       </li>
//       <li className="nav-item">
//         <NavLink
//           to="summary"
//           end
//           className={({ isActive }) =>
//             isActive ? "nav-link active" : "nav-link"
//           }
//         >
//           Summary
//         </NavLink>
//       </li>
//       <li>
//         <Moment format="dddd, DD MMMM YYYY"></Moment>
//       </li>
//     </ul>
//   );
// }

// export default NavBar;

import React from "react";
import {
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  Typography,
  IconButton,
  Stack,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { green, red } from "@mui/material/colors";
import SavingsIcon from "@mui/icons-material/Savings";
import { NavLink as Router, Switch, Route } from "react-router-dom";

const useStyles = styled((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <SavingsIcon />
        </IconButton>

        <Typography variant="h6" sx={{ flexGrow: 1 }} className={classes.logo}>
          Personal Financial Planner
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Charts</Button>
          <Button color="inherit">Forecast</Button>
          <Button color="inherit">Summary</Button>
        </Stack>
        {/* <div className={classes.navlinks}>
          <NavLink to="/" className={classes.link}>
            Home
          </NavLink>
          <NavLink to="/about" className={classes.link}>
            About
          </NavLink>
          <NavLink to="/contact" className={classes.link}>
            Contact
          </NavLink>
          <NavLink to="/faq" className={classes.link}>
            FAQ
          </NavLink>
        </div> */}
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
