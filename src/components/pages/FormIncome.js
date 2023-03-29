import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

let incomeArray = [];
let incomeArrayKey = [];
let i = 0;
let j = 1;
let l = 0;

let lastMonth = moment().add(-1, "months").format("MMMM YYYY");

//The form in this section is derived from Aliaksandr Sushkevich's answer to a post on "Stack Overflow": myusuf,
//"Get form data in React", Stack Overflow (2 May 2014), last viewed 28 March 2023:
//https://stackoverflow.com/questions/23427384/get-form-data-in-react#:~:text=A%20with%20a%20%3C,will%20enable%20both%20use%20cases.

class FormIncome extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Hello!");
    let incomeTitle = event.target.incomeName.value;
    let numberIncome = parseInt(event.target.incomeAmount.value);

    if (isNaN(numberIncome) || numberIncome === "") {
      alert(
        "Please enter only numbers for income (no letters, symbols or blanks)."
      );
      return;
    }
    if (incomeTitle === "") {
      alert("Please enter a name for the income item into the name field.");
      return;
    }
    const incomeObject = {
      title: incomeTitle,
      value: numberIncome,
      color: colorSelector(),
    };
    const incomeObjectKey = {
      id: j,
      title: incomeTitle,
      value: numberIncome,
      color: colorSelectorKey(),
    };
    incomeArray.push(incomeObject);
    incomeArrayKey.push(incomeObjectKey);

    //Use of the "reset" code below, to clear inputs  upon submit, comes from Trần Bảo Huy's answer to a question on
    //"Stack Overflow": ChemseddineZ, "Clear and reset form input fields", Stack Overflow (11 May 2017),
    //last viewed 29 March 2023: https://stackoverflow.com/questions/43922508/clear-and-reset-form-input-fields
    event.target.reset();
    j++;
  };
  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <h4>Income Section</h4>
          <p>
            Please submit all your income with its sources for the month of{" "}
            {lastMonth}. <br />
            Please click "Submit" after you have entered each source of income.{" "}
            <br />
            You may enter as many sources as you wish. When you have finished
            click "Save" Then click "Next" to proceed to the next section.
          </p>
          <article>
            <label for="incomeSource" className="col-lg-4 col-md-6 col-sm-12">
              Income source:{" "}
            </label>

            <input
              type="text"
              className="form-control"
              name="incomeName"
              id="incomeSource"
              placeholder="Insert income source"
            />
            <label for="incomeVal" className="col-lg-4 col-md-6 col-sm-12">
              Monthly Income:{" "}
            </label>
            <input
              type="text"
              className="form-control"
              name="incomeAmount"
              id="incomeVal"
              placeholder="Insert income amount"
            />
          </article>
          <button type="submit" id="submitButton">
            Submit
          </button>
          <button type="reset" onClick={incomeFunction}>
            Save
          </button>
          <Link to="/formExpenses/*" role="button" className="btn btn-link">
            Next
          </Link>
        </form>
      </div>
    );
  }
}

function incomeFunction() {
  console.log("FormIncome test:");
  console.log(incomeArray);
  console.log(incomeArrayKey);
  localStorage.setItem("income", JSON.stringify(incomeArray));
  localStorage.setItem("incomeKey", JSON.stringify(incomeArrayKey));
  incomeArray = [];
  incomeArrayKey = [];
  j = 1;
  i = 0;
  l = 0;
  alert("Thank you. Your income information has been saved.");
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
  if (i === 15) {
    i = i - 15;
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

export default FormIncome;
