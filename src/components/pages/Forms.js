import React from "react";

//The form in this section is derived from Aliaksandr Sushkevich's answer to a post on "Stack Overflow": myusuf, "Get form data in React",
//Stack Overflow (2 May 2014), last viewed 28 March 2023: 
//https://stackoverflow.com/questions/23427384/get-form-data-in-react#:~:text=A%20with%20a%20%3C,will%20enable%20both%20use%20cases.

class Form extends React.Component {
   
    handleSubmit = (event) => {
      event.preventDefault()
      const incomeObjectOne = {id: 1, title: event.target.incomeName1.value, value: event.target.incomeAmount1.value};
      
      console.log(event.target.username.value);
      console.log(event.target.savings.value);
      console.log(event.target.incomeName1.value);
      console.log(event.target.incomeAmount1.value);
      console.log(event.target.incomeName2.value);
      console.log(event.target.incomeAmount2.value);
      console.log(incomeObjectOne);
      
    }
   
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
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
          <article>
            <h4>Income:</h4>
            <label className="col-lg-6 col-md-6 col-sm-12">
              <p>Income 1 Name:</p>
              <input
                type="text"
                name="incomeName1"
              />
            </label>
            <label className="col-lg-6 col-md-6 col-sm-12">
              <p>Income 1 Amount:</p>
              <input
                type="text"
                name="incomeAmount1"
              />
            </label>
            <label className="col-lg-6 col-md-6 col-sm-12">
              <p>Income 2 Name:</p>
              <input
                type="text"
                name="incomeName2"
              />
            </label>
            <label className="col-lg-6 col-md-6 col-sm-12">
              <p>Income 2 Value:</p>
              <input
                type="text"
                name="incomeAmount2"
              />
            </label>
            <label className="col-lg-6 col-md-6 col-sm-12">
              <p>Income 3 Name:</p>
              <input
                type="text"
                name="incomeName3"
              />
            </label>
            <label className="col-lg-6 col-md-6 col-sm-12">
              <p>Income 3 Amount:</p>
              <input
                type="text"
                name="incomeAmount3"
              />
            </label>
            <label className="col-lg-6 col-md-6 col-sm-12">
              <p>Income 4 Name:</p>
              <input
                type="text"
                name="incomeName4"
              />
            </label>
            <label className="col-lg-6 col-md-6 col-sm-12">
              <p>Income 4 Value:</p>
              <input
                type="text"
                name="incomeAmount4"
              />
            </label>
            <label className="col-lg-6 col-md-6 col-sm-12">
              <p>Income 5 Name:</p>
              <input
                type="text"
                name="incomeName5"
              />
            </label>
            <label className="col-lg-6 col-md-6 col-sm-12">
              <p>Income 5 Value:</p>
              <input
                type="text"
                name="incomeAmount5"
              />
            </label>
          </article>
          <article>
            <h4>Expenses:</h4>
            <label className="col-lg-6 col-md-6 col-sm-12">
              <p>Expenses 1 Name:</p>
              <input
                type="text"
                name="expensesName1"
              />
            </label>
            <label className="col-lg-6 col-md-6 col-sm-12">
              <p>Expenses 1 Amount:</p>
              <input
                type="text"
                name="expensesAmount1"
              />
            </label>
            <label className="col-lg-6 col-md-6 col-sm-12">
              <p>Expenses 2 Name:</p>
              <input
                type="text"
                name="expensesName2"
              />
            </label>
            <label className="col-lg-6 col-md-6 col-sm-12">
              <p>Expenses 2 Amount:</p>
              <input
                type="text"
                name="expensesAmount2"
              />
            </label>
            <label className="col-lg-6 col-md-6 col-sm-12">
              <p>Expenses 3 Name:</p>
              <input
                type="text"
                name="expensesName3"
              />
            </label>
            <label className="col-lg-6 col-md-6 col-sm-12">
              <p>Expenses 3 Value:</p>
              <input
                type="text"
                name="expensesAmount3"
              />
            </label>
            <label className="col-lg-6 col-md-6 col-sm-12">
              <p>Expenses 4 Name:</p>
              <input
                type="text"
                name="expensesName4"
              />
            </label>
            <label className="col-lg-6 col-md-6 col-sm-12">
              <p>Expenses 4 Value:</p>
              <input
                type="text"
                name="expensesAmount4"
              />
            </label>
            <label className="col-lg-6 col-md-6 col-sm-12">
              <p>Expenses 5 Name:</p>
              <input
                type="text"
                name="expensesName5"
              />
            </label>
            <label className="col-lg-6 col-md-6 col-sm-12">
              <p>Expenses 5 Amount:</p>
              <input
                type="text"
                name="expensesAmount5"
              />
            </label>
            <label className="col-lg-6 col-md-6 col-sm-12">
              <p>Expenses 6 Name:</p>
              <input
                type="text"
                name="expensesName6"
              />
            </label>
            <label className="col-lg-6 col-md-6 col-sm-12">
              <p>Expenses 6 Value:</p>
              <input
                type="text"
                name="expensesAmount6"
              />
            </label>
            <label className="col-lg-6 col-md-6 col-sm-12">
              <p>Expenses 7 Name:</p>
              <input
                type="text"
                name="expensesName7"
              />
            </label>
            <label className="col-lg-6 col-md-6 col-sm-12">
              <p>Expenses 7 Amount:</p>
              <input
                type="text"
                name="expensesAmount7"
              />
            </label>
            <label className="col-lg-6 col-md-6 col-sm-12">
              <p>Expenses 8 Name:</p>
              <input
                type="text"
                name="expensesName8"
              />
            </label>
            <label className="col-lg-6 col-md-6 col-sm-12">
              <p>Expenses 8 Value:</p>
              <input
                type="text"
                name="expensesAmount8"
              />
            </label>
            <label className="col-lg-6 col-md-6 col-sm-12">
              <p>Expenses 9 Name:</p>
              <input
                type="text"
                name="expensesName9"
              />
            </label>
            <label className="col-lg-6 col-md-6 col-sm-12">
              <p>Expenses 9 Value:</p>
              <input
                type="text"
                name="expensesAmount9"
              />
            </label>
            <label className="col-lg-6 col-md-6 col-sm-12">
              <p>Expenses 10 Name:</p>
              <input
                type="text"
                name="expensesName10"
              />
            </label>
            <label className="col-lg-6 col-md-6 col-sm-12">
              <p>Expenses 10 Value:</p>
              <input
                type="text"
                name="expensesAmount10"
              />
            </label>
          </article>
          


          <button type="submit">Submit</button>
        </form>
      )
    }
  }



export default Form;