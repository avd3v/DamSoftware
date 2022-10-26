import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const Graphic = () => {
  const lineChartData = {
    labels: [
      "October",
      "November",
      "December",
      "hellomber",
      "7",
      "5",
      "3",
      "dasdas",
    ],
    datasets: [
      {
        data: [8137119, 9431691, 10266674, 123, 1, 2, 3, 41412421],
        label: "Infected",
        borderColor: "#3333ff",
        fill: true,
        lineTension: 0.5,
      },
      {
        data: [1216410, 1371390, 1477380, 45, 7, 7, 8, 5, 12341],
        label: "Deaths",
        borderColor: "#ff3333",
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        fill: true,
        lineTension: 0.5,
      },
    ],
  };

  return (
    <Line
      type="line"
      width={160}
      height={60}
      options={{
        title: {
          display: true,
          text: "COVID-19 Cases of Last 6 Months",
          fontSize: 20,
        },
        legend: {
          display: true, //Is the legend shown?
          position: "top", //Position of the legend.
        },
      }}
      data={lineChartData}
    />
  );
};
export default Graphic;
