import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

let lastMonth = moment().add(-1, "months").format("MMMM YYYY");
let expensesArray = [];
let expensesArrayKey = [];
let i = 0;
let k = 1;
let l = 0;

//The form in this section is derived from Aliaksandr Sushkevich's answer to a post on "Stack Overflow": myusuf,
//"Get form data in React", Stack Overflow (2 May 2014), last viewed 28 March 2023:
//https://stackoverflow.com/questions/23427384/get-form-data-in-react#:~:text=A%20with%20a%20%3C,will%20enable%20both%20use%20cases.

class FormExpenses extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Hello!");
    let expensesTitle = event.target.expensesName.value;
    let numberExpenses = parseInt(event.target.expensesAmount.value);

    if (isNaN(numberExpenses) || numberExpenses === "") {
      alert(
        "Please enter only numbers for expenses (no letters, symbols or blanks)."
      );
      return;
    }
    if (expensesTitle === "") {
      alert("Please enter a name for the expenses item into the name field.");
      return;
    }
    const expensesObject = {
      title: expensesTitle,
      value: numberExpenses,
      color: colorSelector(),
    };
    const expensesObjectKey = {
      id: k,
      title: expensesTitle,
      value: numberExpenses,
      color: colorSelectorKey(),
    };
    expensesArray.push(expensesObject);
    expensesArrayKey.push(expensesObjectKey);

    //Use of the "reset" code below, to clear inputs  upon submit, comes from Trần Bảo Huy's answer to a question on
    //"Stack Overflow": ChemseddineZ, "Clear and reset form input fields", Stack Overflow (11 May 2017),
    //last viewed 29 March 2023: https://stackoverflow.com/questions/43922508/clear-and-reset-form-input-fields
    event.target.reset();
    k++;
  };

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <h4>Expenses Section</h4>
            <p>
              Please submit all your expenses, with identifying names, for the
              month of {lastMonth}. <br />
              Please click "Submit" after you have entered each source of
              income. <br />
              You may enter as many sources as you wish. When you have finished
              click "Save". Then click "Finish".
            </p>
            <article>
              <label
                htmlFor="expenseSource"
                className="col-lg-4 col-md-6 col-sm-12"
              >
                Expenses Name (Rent etc.):{" "}
              </label>
              <input
                type="text"
                className="form-control"
                name="expensesName"
                id="expenseSource"
                placeholder="Insert expense source"
              />

              <label htmlFor="expenseVal" className="col-lg-4 col-md-6 col-sm-12">
                Expenses Amount:
              </label>
              <input
                type="text"
                className="form-control"
                name="expensesAmount"
                id="expenseVal"
                placeholder="Insert expense amount"
              />
            </article>
            <button type="submit" id="submitButton">
              Submit
            </button>
            <button type="reset" onClick={expensesFunction}>
              Save
            </button>
            <Link to="/*" role="button" className="btn btn-link">
              Finish
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

function expensesFunction() {
  console.log("FormExpenses test:");
  console.log(expensesArray);
  console.log(expensesArrayKey);
  localStorage.setItem("expenses", JSON.stringify(expensesArray));
  localStorage.setItem("expensesKey", JSON.stringify(expensesArrayKey));
  k = 1;
  l = 0;
  i = 0;
  expensesArray = [];
  expensesArrayKey = [];
  alert("Thank you. Your expenses information has been saved.");
  alert(
    `Please click "Finish", then click "Review" in the main menu. You may then view you financial analysis in Charts, Forecasts and Summary.`
  );
}

function colorSelector() {
  const colorArray = [
    "#6A2135",
    "#F71A05",
    "#CD05F7",
    "#05F5F7",
    "#F78F05",
    "#C13C37",
    "#F7C805",
    "#F71A05",
    "#F78F05",
    "#E5D3F9",
    "#F7C805",
    "#F4F705",
    "#B1F705",
    "#2DF705",
    "#05F784",
    "#05F7C0",
    "#05F5F7",
  ];
  i++;
  if (i === 21) {
    i = i - 21;
  }
  let colorPicked = colorArray[i];
  console.log(colorPicked);
  return colorPicked;
}

function colorSelectorKey() {
  const colorArray = [
    "#6A2135",
    "#F71A05",
    "#CD05F7",
    "#05F5F7",
    "#F78F05",
    "#C13C37",
    "#F7C805",
    "#F71A05",
    "#F78F05",
    "#E5D3F9",
    "#F7C805",
    "#F4F705",
    "#B1F705",
    "#2DF705",
    "#05F784",
    "#05F7C0",
  ];
  l++;
  if (l === 15) {
    l = l - 15;
  }
  let colorPicked = colorArray[i];
  console.log(colorPicked);
  return colorPicked;
}

export default FormExpenses;
