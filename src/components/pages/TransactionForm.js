import React, { useState } from "react";
// import "./index.css";

export default function TransactionForm() {
  const [val, setValue] = useState("");
  const options = ["Debit", "Credit"];

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div class="form-container">
      <form class="register-form">
        {/* <div class="success-message">Success! Transaction submitted</div> */}

        <input
          id="val"
          class="form-field"
          type="text"
          placeholder="Add transaction amount"
          name="val"
        />
        {/* <span id="valerror">Please enter a numeric amount</span> */}
        <input
          id="description"
          class="form-field"
          type="text"
          placeholder="Add transaction description"
          name="description"
        />
        {/* <span id="descriptionerror">Transaction description cannot be blank</span> */}
        <select
          id="debCred"
          class="form-field"
          value="Dr"
          options={options}
          onChange={handleChange}
        >
          {options.map((option) => (
            <option>{option}</option>
          ))}
        </select>
        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}
        <button class="form-field" id="submitButton" type="submit">
          SUBMIT TRANSACTION
        </button>
      </form>
    </div>
  );
}
