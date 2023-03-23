import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import NavBar from "./components/NavBar";
import { NetIncome } from "./components/NetIncome";
import { RevenueOrExpense } from "./components/RevenueOrExpense";

function App() {
  return (
    <div>
      <NavBar />

      <Header />
      <div>
        <RevenueOrExpense />
        <NetIncome />
      </div>
    </div>
  );
}

export default App;
