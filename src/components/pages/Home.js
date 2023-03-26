import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import acquireData from "./AcquireData";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalWelcome() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Create/Edit profile</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Welcome
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            In order to provide an analysis of your finances and to make a
            financial forecast we will first need you to provide financial
            information. When you are ready to begin, click START. Or if you
            would like to review an earlier financial assessment click REVIEW.
            If you would like to delete all financial data held in this system
            click CLEAR.
          </Typography>
          <Button onClick={acquireData}>START</Button>
          <Button>REVIEW</Button>
          <Button>CLEAR</Button>
        </Box>
      </Modal>
    </div>
  );
}
