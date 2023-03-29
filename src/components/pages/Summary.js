import { useContext } from "react";
import { DiagramMaker } from "../../App.js";
import React from 'react';
// import DemoIncomePieChartKeyed from "./assets/DemoIncomePieChartKeyed.json";
import TableMaker from "./TableMaker.js";
// import DemoExpensesPieChartKeyed from "./assets/DemoExpensesPieChartKeyed.json";

const styles = {
  totalContainer: {
    // marginLeft: "500px"
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
    // position: "relative",
    width: "65px",
    background: "#E5E4E4",
    //right: "75px",
    borderTop: "1px solid black",
    margin: "0"
  },
  totalMain: {
    // position: "relative",
    width: "65px",
    background: "#E5E4E4",
    //right: "75px",
    margin: "0"
  }
}

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
      <h1>Summary</h1>
      <p>
        Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
        molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
        magna a ultrices. Aenean pellentesque placerat lacus imperdiet
        efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
        mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
        posuere, eget tristique dui dapibus. Maecenas fermentum elementum
        faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin
        ipsum. Nulla facilisi. Sed ut erat ligula. Nam tincidunt nunc in nibh
        dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at
        rhoncus. Etiam vel condimentum magna, quis tempor nulla.
      </p>
      <h4 style={styles.totalContainer}>Monthly Income:</h4>
      <div style={styles.totalContainer}>
      {TableMakerIncome()}
      </div>
      <div className="row" style={styles.totalContainer}>
        <p style={styles.totalText}>Total Income:</p>
        <p style={styles.total}>£{totalIncome}</p>
      </div>
      <h4 style={styles.totalContainer}>Monthly Expenses:</h4>
      <div style={styles.totalContainer}>
        {TableMakerExpenses()}
      </div>
      <div className="row" style={styles.totalContainer}>
        <p style={styles.totalText}>Total Expenses:</p>
        <p style={styles.total}>£{totalExpenses}</p>
      </div>
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
  );
}

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
