import { useContext } from "react";
import { DiagramMaker } from "../../App.js";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
import DemoExpensesPieChart from "./assets/DemoExpensesPieChart.json";
import DemoIncomePieChart from "./assets/DemoIncomePieChart.json";
import DemoIncomePieChartKeyed from "./assets/DemoIncomePieChartKeyed.json";
import DemoExpensesPieChartKeyed from "./assets/DemoExpensesPieChartKeyed.json";
import DemoName from "./assets/DemoName.json";

const DemoSavings = 5000;

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

//Page component for Home.js; this includes a modal

export default function ModalWelcome() {
 
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  //Variables to allow state to be changed in the pie charts, legends, graph, tables and personalised headings throughout
  //the webpage

  const [pieState, setPieState] = useContext(DiagramMaker);
  const incomePieChart = JSON.parse(localStorage.getItem("income"));
  const expensesPieChart = JSON.parse(localStorage.getItem("expenses"));
  const incomePieChartKey = JSON.parse(localStorage.getItem("incomeKey"));
  const expensesPieChartKey = JSON.parse(localStorage.getItem("expensesKey"));
  const username = localStorage.getItem("username");
  const userSavings = localStorage.getItem("savings");
  const balanceInteger = parseInt(userSavings);
  console.log("Home Page");
  console.log(incomePieChart);
  return (
    <div>
      {/* <Button onClick={handleOpen}>Create/Edit profile</Button> */}
      <Button variant="contained" color="success" onClick={handleOpen}>
        Begin/Review
      </Button>
      
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
          <Link to="formName" role="button" className="btn btn-link">
            START
          </Link>
          {/* Functions to check there is user date in localStorage and to change state*/}
          <Button
            onClick={() => {
              reviewTest();
              setPieState({
                ...pieState,
                pieArrayIncome: incomePieChart,
                pieArrayExpenses: expensesPieChart,
                tableIncome: incomePieChartKey,
                tableExpenses: expensesPieChartKey,
                name: username,
                savings: balanceInteger,
              });
            }}
          >
            REVIEW
          </Button>
          {/* Functions to clear localStorage and to return state to demo data*/}
          <Button
            onClick={() => {
              clearLocalStorage();
              setPieState({
                ...pieState,
                pieArrayIncome: DemoIncomePieChart,
                pieArrayExpenses: DemoExpensesPieChart,
                tableIncome: DemoIncomePieChartKeyed,
                tableExpenses: DemoExpensesPieChartKeyed,
                name: DemoName,
                savings: DemoSavings,
              });
            }}
          >
            CLEAR
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

function reviewTest() {
  //This function prevents the state change from demo to user data should user date not have been entered into localStorage,
  //thereby preventing errors.
  
  const incomePieChart = JSON.parse(localStorage.getItem("income"));
  const expensesPieChart = JSON.parse(localStorage.getItem("expenses"));
  const incomePieChartKey = JSON.parse(localStorage.getItem("incomeKey"));
  const expensesPieChartKey = JSON.parse(localStorage.getItem("expensesKey"));
  const username = localStorage.getItem("username");
  const userSavings = localStorage.getItem("savings");
  if (incomePieChart === null || expensesPieChart === null || incomePieChartKey === null || expensesPieChartKey === null || 
    username === null || userSavings === null) {
    alert(
      `I'm sorry you must first enter data before you can review your finances. Click "Start" to begin.`
    );
    return;
  }
}

function clearLocalStorage() {
  
  //Clears all peronsonal financial data from localStorage

  localStorage.removeItem("income");
  localStorage.removeItem("expenses");
  localStorage.removeItem("incomeKey");
  localStorage.removeItem("expensesKey");
  localStorage.removeItem("username");
  localStorage.removeItem("savings");
  alert("Your information has been deleted.");
}
