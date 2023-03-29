import React from "react";
import moment from 'moment';
import { Link } from 'react-router-dom';



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
            alert("Please enter only numbers for savings (no letters, symbols or blanks)."); 
            return; 
        } 
        if (username === "") {
            alert("Please enter a name or nickname into the name field.");
            return;
        }
        localStorage.setItem("username", (username));
        localStorage.setItem("savings", (savingsInteger));

        //Use of the "reset" code below, to clear inputs  upon submit, comes from Trần Bảo Huy's answer to a question on 
        //"Stack Overflow": ChemseddineZ, "Clear and reset form input fields", Stack Overflow (11 May 2017), 
        //last viewed 29 March 2023: https://stackoverflow.com/questions/43922508/clear-and-reset-form-input-fields
        event.target.reset();
        alert(`Thank you ${username}. Your information has been saved. Please press "Next" to continue.`)
    }
    render() {
    return(
        <form onSubmit={this.handleSubmit}>
            <p>Please submit your name, or nickname, and your total savings as of 1 {lastMonth}.  </p>
            <article>
            <label className="col-lg-4 col-md-6 col-sm-12">
              <p>Name:</p>
              <input
                type="text"
                name="username"
              />
            </label>
            <label className="col-lg-4 col-md-6 col-sm-12">
              <p>Savings:</p>
              <input
                type="text"
                name="savings"
              />
            </label>
          </article>
            
            <button type="submit">Submit</button>
      <Link to="/formIncome/*" role="button" className="btn btn-link">
        Next
      </Link>
      
        </form>
  )
}}

export default FormName;

