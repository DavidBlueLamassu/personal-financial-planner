import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import PieChart from "./components/pages/PieChart";
import Forecast from "./components/pages/Forecast";
import Summary from "./components/pages/Summary";
import { createContext, useState } from 'react';
import DemoExpensesPieChart from "./components/pages/assets/DemoExpensesPieChart.json";
import DemoIncomePieChart from "./components/pages/assets/DemoIncomePieChart.json";
import DemoIncomePieChartKeyed from "./components/pages/assets/DemoIncomePieChartKeyed.json";
import DemoExpensesPieChartKeyed from "./components/pages/assets/DemoExpensesPieChartKeyed.json";

export const DiagramMaker = createContext();

function App() {
  const [pieState, setPieState] = useState({
    pieArrayIncome: DemoIncomePieChart,
    pieArrayExpenses: DemoExpensesPieChart,
    tableIncome: DemoIncomePieChartKeyed,
    tableExpenses: DemoExpensesPieChartKeyed
    }); 
  return (
    <DiagramMaker.Provider value={[pieState, setPieState]}>
      <Router>
        <NavBar />
        {/* Wrap Route elements in a Routes component */}
        <div className="container">
          <div>{/* <AcquireData /> */}</div>
          <Routes>
            {/* Define routes using the Route component to render different page components at different paths */}
            {/* Define a default route that will render the Home component */}
            <Route path="/*" element={<Home />} />
            <Route path="pieChart" element={<PieChart />} />
            <Route path="forecast" element={<Forecast />} />
            <Route path="summary" element={<Summary />} />
          </Routes>
        </div>
      </Router>
    </DiagramMaker.Provider>
  );
}

export default App;
