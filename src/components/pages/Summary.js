import { useContext } from "react";
import { DiagramMaker } from "../../App.js";
import React from 'react';
import TableMaker from "./TableMaker.js";

const styles = {
  name: {
    textAlign: "center",
    marginBottom: "50px"
  },
  totalContainer: {
    marginLeft: "500px"
  },
  totalText: {
    margin: "0",
    width: "225px",
    background: "#E5E4E4",
    borderTop: "1px solid black",
    paddingLeft: "12px",
    height: "30px"
  },
  totalMainText: {
    margin: "0",
    width: "225px",
    background: "#E5E4E4",
    paddingLeft: "12px",
    height: "30px"
  },
  total: {
    position: "relative",
    width: "65px",
    background: "#E5E4E4",
    right: "75px",
    borderTop: "1px solid black",
    margin: "0"
  },
  totalMain: {
    position: "relative",
    width: "65px",
    background: "#E5E4E4",
    right: "75px",
    margin: "0"
  }
}

//Page component for Summary.js. This includes income and expenes tables made using props from TableMaker.js

function Summary() {
  let totalIncome = 0;
  let totalExpenses = 0;
  let balance = 0;
  const [pieState] = useContext(DiagramMaker);
  for (let i = 0; i < pieState.tableIncome.length; i++) {
        totalIncome = totalIncome + pieState.tableIncome[i].value;
    }
  for (let i = 0; i < pieState.tableExpenses.length; i++) {
    totalExpenses = totalExpenses + pieState.tableExpenses[i].value;
  }
  balance = totalIncome - totalExpenses; 
  return (
    <div>
      <h1 style={styles.name}>Summary of {pieState.name}'s Monthly Income and Expenditure</h1>
      <div className="row">
        <div className="row">
          <h4 style={styles.totalContainer}>Monthly Income:</h4>
          <div style={styles.totalContainer}>
            {TableMakerIncome()}
          </div>
          <div className="row" style={styles.totalContainer}>
            <p style={styles.totalText}>Total Income:</p>
            <p style={styles.total}>£{totalIncome}</p>
          </div>
          </div>
      
        <div className="row">
          <h4 style={styles.totalContainer}>Monthly Expenses:</h4>
          <div style={styles.totalContainer}>
            {TableMakerExpenses()}
          </div>
          <div className="row" style={styles.totalContainer}>
            <p style={styles.totalText}>Total Expenses:</p>
            <p style={styles.total}>£{totalExpenses}</p>
          </div>
        </div>

        <div className="row">
          <h4 style={styles.totalContainer}>Monthly Balance</h4>
          <div className="row" style={styles.totalContainer}>
            <p style={styles.totalMainText}>Monthly Income</p>
            <p style={styles.totalMain}>£{totalIncome}</p>
          </div>
          <div className="row" style={styles.totalContainer}>
            <p style={styles.totalMainText}>Monthly Expenses:</p>
            <p style={styles.totalMain}>£{totalExpenses}</p>
          </div>
          <div className="row" style={styles.totalContainer}>
            <p style={styles.totalText}>Balance:</p>
            <p style={styles.total}>£{balance}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

//These functions make tables using props from the TableMake.js file. User and demo and switched using State and Context
//hooks.

function TableMakerIncome() {
  const [pieState] = useContext(DiagramMaker);
  return ( <div>
    {
    pieState.tableIncome.map(function(currentObject) {
         return <TableMaker 
          key={currentObject.id}
          title={currentObject.title} 
          value={currentObject.value} />
    })
    }
  </div>
  )
}

function TableMakerExpenses() {
  const [pieState] = useContext(DiagramMaker);
  return ( <div>
    {
    pieState.tableExpenses.map(function(currentObject) {
         return <TableMaker 
          key={currentObject.id}
          title={currentObject.title} 
          value={currentObject.value} />
    })
    }
  </div>
  )
}

export default Summary;
