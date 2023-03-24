import React from "react";
import { PieChart } from 'react-minimal-pie-chart';
import DemoExpensesPieChart from "./assets/DemoExpensesPieChart.json"
import DemoIncomePieChart from "./assets/DemoIncomePieChart.json"

const styles = {
  chart: {
    height: "250px",
    width: "250px"
  }
}

function Chart() {
  return (
    <div>
      <h1>Pie Charts</h1>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui
        mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus
        porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam
        semper imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed
        rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
      <PieChart
        style={styles.chart} data={DemoIncomePieChart}
      />
      <PieChart
      style={styles.chart} data={DemoExpensesPieChart}
      />
    </div>
  );
}

export default Chart;
