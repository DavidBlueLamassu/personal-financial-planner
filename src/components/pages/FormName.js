import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

let lastMonth = moment().add(-1, "months").format("MMMM YYYY");

//The form in this section is derived from Aliaksandr Sushkevich's answer to a post on "Stack Overflow": myusuf,
//"Get form data in React", Stack Overflow (2 May 2014), last viewed 28 March 2023:
//https://stackoverflow.com/questions/23427384/get-form-data-in-react#:~:text=A%20with%20a%20%3C,will%20enable%20both%20use%20cases.

class FormName extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    let username = event.target.username.value;
    let savingsInteger = parseInt(event.target.savings.value);

    if (isNaN(savingsInteger) || savingsInteger === "") {
      alert(
        "Please enter only numbers for savings (no letters, symbols or blanks)."
      );
      return;
    }
    if (username === "") {
      alert("Please enter a name or nickname into the name field.");
      return;
    }
    localStorage.setItem("username", username);
    localStorage.setItem("savings", savingsInteger);

    //Use of the "reset" code below, to clear inputs  upon submit, comes from Trần Bảo Huy's answer to a question on
    //"Stack Overflow": ChemseddineZ, "Clear and reset form input fields", Stack Overflow (11 May 2017),
    //last viewed 29 March 2023: https://stackoverflow.com/questions/43922508/clear-and-reset-form-input-fields
    event.target.reset();
    alert(
      `Thank you ${username}. Your information has been saved. Please press "Next" to continue.`
    );
  };

  //A form to collect name and savings data

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <p>
              Please submit your name, or nickname,
              <br />
              and your total savings as of 1st {lastMonth}.{" "}
            </p>
            <article>
              <label htmlFor="nameInput" className="col-lg-4 col-md-6 col-sm-12">
                Name:{" "}
              </label>
              <input
                type="text"
                className="form-control"
                name="username"
                id="nameInput"
                placeholder="Insert name"
              />
              <label htmlFor="savingsInput" className="col-lg-4 col-md-6 col-sm-12">
                Savings:{" "}
              </label>
              <input
                type="text"
                className="form-control"
                name="savings"
                id="savingsInput"
                placeholder="Add total savings"
              />
            </article>
            <button type="submit" id="submitButton">
              Submit
            </button>
            <Link to="/formIncome/*" role="button" className="btn btn-link">
              Next
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default FormName;
