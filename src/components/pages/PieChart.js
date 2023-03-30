import { useContext } from "react";
import { DiagramMaker } from "../../App.js";
import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import IncomeLegend from "./DemoIncomeLegend.js";
import ExpensesLegend from "./DemoExpensesLegend.js";

const styles = {
  name: {
    textAlign: "center",
    marginBottom: "50px"
  },
  chart: {
    height: "250px",
    width: "250px",
  },
};

function Chart() {
  const [pieState] = useContext(DiagramMaker);
  return (
    <div>
      <div className="row">
        <h1 style={styles.name}>{pieState.name}'s Finances</h1>
      </div>
      <div className="d-flex justify-content-center">
        <div className="row incomePie">
          <div className="col-6">
            <PieChart style={styles.chart} data={pieState.pieArrayIncome} />
          </div>
          <div className="col-6">
            <h4>Income Breakdown:</h4>
            {LegendMakerIncome()}
          </div>
        </div>
        <div className="row expensesPie">
          <div className="col-6">
            <PieChart style={styles.chart} data={pieState.pieArrayExpenses} />
          </div>
          <div className="col-6">
            <h4>Expenses Breakdown:</h4>
            {LegendMakerExpenses()}
          </div>
        </div>
      </div>
    </div>
  );
}

function LegendMakerIncome() {
  const [pieState] = useContext(DiagramMaker);
  return (
    <div style={styles.legendContainer}>
      {pieState.tableIncome.map(function (currentObject) {
        return (
          <IncomeLegend
            key={currentObject.id}
            title={currentObject.title}
            value={currentObject.value}
            color={currentObject.color}
          />
        );
      })}
    </div>
  );
}

function LegendMakerExpenses() {
  const [pieState] = useContext(DiagramMaker);
  return (
    <div style={styles.legendContainer}>
      {pieState.tableExpenses.map(function (currentObject) {
        return (
          <ExpensesLegend
            key={currentObject.id}
            title={currentObject.title}
            value={currentObject.value}
            color={currentObject.color}
          />
        );
      })}
    </div>
  );
}

export default Chart;
