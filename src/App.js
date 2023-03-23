import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import PieChart from './components/pages/PieChart';
import Forecast from './components/pages/Forecast';
import Summary from './components/pages/Summary';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="pieChart" element={<PieChart />} />
          <Route path="forecast" element={<Forecast />} />
          <Route path="summary" element={<Summary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
