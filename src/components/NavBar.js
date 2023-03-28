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
  // styled,
  // Box,
} from "@mui/material";
import SavingsIcon from "@mui/icons-material/Savings";
// import { TabList, TabPanel, TabContext } from "@mui/lab";

// const useStyles = makeStyles({
//   button: {
//     "&.active": {
//       background: "black",
//     },
//   },
// });

function NavBar() {
  // const [value, setValue] = React.useState("1");
  // // still needs to change this...
  // const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  //   setValue(newValue);
  // };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <SavingsIcon />
        </IconButton>
        <Typography
          className="navTitle"
          variant="h4"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          PERSONAL FINANCIAL PLANNER
        </Typography>
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
            to="//form"
            className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
          >
            Form
          </NavLink>
        </Stack>
      </Toolbar>
    </AppBar>

    // <AppBar position="static">
    //   <TabContext value={value}>
    //     <TabList onChange={handleChange} aria-label="lab API tabs example">
    //       <Tab label="Item One" value="1" />
    //       <Tab label="Item Two" value="2" />
    //       <Tab label="Item Three" value="3" />
    //     </TabList>
    //   </TabContext>
    // </AppBar>
  );
}

export default NavBar;
