import React from "react";

import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

import tickerData from "../data/charts.json";

const LineGraph = () => {
  return (
    <div className="dataCard revenueCard">
      <Line
        data={{
          labels: tickerData.map((data) => data.date),
          datasets: [
            {
              label: "close",
              data: tickerData.map((data) => data.close),
            },
            {
              label: "high",
              data: tickerData.map((data) => data.high),
            },
          ],
        }}
        options={{
          element: {
            tension: 0.1,
          },
          interaction: {
            mode: "nearest",
          },
          responsive: true,
          maintainAspectRatio: true,
          resizeDelay: 0.3,
        }}
      />
    </div>
  );
};

export default LineGraph;
