import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "Chart.js Line Chart - Multi Axis",
    },
  },
  scales: {
    y: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
    },
    y1: {
      type: "linear" as const,
      display: true,
      position: "right" as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => [
        0.5,1,0.3,2,0.4,0.9,9,0.7,10,0.1,7
      ]),
      borderColor: "#FA5D3A",
      backgroundColor: "#FFEAE5",
      yAxisID: "y",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => [
        1,2,4,8,5,9,2
      ]),
      borderColor: "#414141",
      backgroundColor: "#CDCDCD",
      yAxisID: "y1",
    },
  ],
};

const Chart = () => {
  return (
    <div className="px-10 ">
      <div className="bg-white px-5  py-5 rounded-xl">
        <span className="font-bold text-lg text-gray1">Cash Orders</span>
        <Line options={options} data={data} />
      </div>
      <div className="bg-white px-5 mt-10 py-5 rounded-xl">
        <span className="font-bold text-lg text-gray1">
          Junkkers’ Consumption
        </span>
        <Line options={options} data={data} />
      </div>
      <div className="bg-white px-5 my-10 py-5 rounded-xl">
        <span className="font-bold text-lg text-gray1">Company Profit</span>
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default Chart;
