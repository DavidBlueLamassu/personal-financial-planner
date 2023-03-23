import React from "react";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function Home() {
  // return (
  //   <Box sx={{ flexGrow: 1 }}>
  //     <Grid container spacing={0}>
  //       <h2>Welcome to Your Personal Financial Planner</h2>
  //       <p>
  //         In order to provide an analysis of your finances and to make a
  //         financial forecast we will first need you to provide financial
  //         information. When you are ready to begin, click START. Or if you would
  //         like to review an earlier financial assessment click REVIEW. If you
  //         would like to delete all financial data held in this system click
  //         CLEAR.
  //       </p>
  //       <div className="gap-8 columns-3xs ...">
  //         <Button variant="outlined">START</Button>
  //         <Button variant="outlined">REVIEW</Button>
  //         <Button variant="outlined" color="secondary">
  //           CLEAR
  //         </Button>
  //       </div>
  //     </Grid>
  //   </Box>

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">
            Welcome to Your Personal Financial Planner
          </h2>
          <p id="child-modal-description">
            Lorem i In order to provide an analysis of your finances and to make
            a financial forecast we will first need you to provide financial
            information. When you are ready to begin, click START. Or if you
            would like to review an earlier financial assessment click REVIEW.
            If you would like to delete all financial data held in this system
            click CLEAR.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default Home;
