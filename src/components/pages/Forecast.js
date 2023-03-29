import React from "react";
import { useContext } from "react";
import { DiagramMaker } from "../../App.js";

function Forecast() {
  const [pieState] = useContext(DiagramMaker);
  return (
    <div>
      <h1>{pieState.name}'s Financial Forecast</h1>
    </div>
  );
}

export default Forecast;
