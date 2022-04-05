import React from "react";
import ChartOne from "../ChartOne/ChartOne";
import ChartTwo from "../ChartTwo/ChartTwo";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="chart-container">
      <div className="chartOne">
        <h2>Month wise sell</h2>
        <ChartOne></ChartOne>
      </div>
      <div className="chartTwo">
        <h2>Investment vs Revenue</h2>
        <ChartTwo></ChartTwo>
      </div>
    </div>
  );
};

export default Dashboard;
