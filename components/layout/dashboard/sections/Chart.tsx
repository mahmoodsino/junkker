import React from "react";
import SelectInput from "../../../inputs";
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
import { BaseButton } from "../../../buttons";

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
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => [
        1, 10, 100, 1000, 100000, 100000, 10000000, 10000000,
      ]),
      borderColor: "#FA5D3A",
      backgroundColor: "#FFEAE5",
      yAxisID: "y",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => [
        10000000, 100000, 100000, 1000, 100, 10, 1, 100000,
      ]),
      borderColor: "#414141",
      backgroundColor: "#CDCDCD",
      yAxisID: "y1",
    },
  ],
};

const Chart = () => {
  return (
    <div className="px-10 py-12">
      <div className="space-x-3 flex">
        <SelectInput optionName="Month" />
        <SelectInput optionName="Day" />
        <SelectInput optionName="Year" />
        <BaseButton title="show" />
      </div>
      <div className="bg-white px-5 mt-10 py-5 rounded-xl">
        <span className="font-bold text-lg text-gray1">Cash Orders</span>
        <Line options={options} data={data} />
      </div>
      <div className="bg-white px-5 mt-10 py-5 rounded-xl">
        <span className="font-bold text-lg text-gray1">
          Junkkers’ Consumption
        </span>
        <Line options={options} data={data} />
      </div>
      <div className="bg-white px-5 mt-10 py-5 rounded-xl">
        <span className="font-bold text-lg text-gray1">Company Profit</span>
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default Chart;
