import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler
);

const Body_div4_2 = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Income",
        data: [50, 60, 80, 120, 90, 70, 100],
        fill: true,
        backgroundColor: "rgba(102, 126, 234, 0.2)",
        borderColor: "#667EEA",
        pointBackgroundColor: "#667EEA",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "#E5E7EB",
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <div className="bg-white dark:bg-background   shadow-md rounded-lg p-6 w-[400px]">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4">
          <button className="px-4 py-1 text-white bg-blue-500 rounded-md font-semibold">
            Income
          </button>
          <button className="px-4 py-1 text-gray-500 bg-gray-100 rounded-md">
            Expenses
          </button>
          <button className="px-4 py-1 text-gray-500 bg-gray-100 rounded-md">
            Profit
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-4 mb-6">
        <div className="p-2 bg-blue-100 rounded-full">
          <img
            src="src/assets/pictures/icon.png"
            alt="Icon"
            className="w-6 h-6"
          />
        </div>
        <div>
          <div className="text-gray-700 dark:bg-background   text-sm">
            Total Balance
          </div>
          <div className="text-xl font-bold text-gray-800">$459.10</div>
          <div className="text-sm text-green-500 font-medium">42.9% ↑</div>
        </div>
      </div>

      <div className="h-40 mb-6">
        <Line data={data} options={options} />
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative w-12 h-12">
          <svg
            className="absolute top-0 left-0"
            viewBox="0 0 36 36"
            width="48"
            height="48"
          >
            <circle
              cx="18"
              cy="18"
              r="16"
              stroke="#E5E7EB"
              strokeWidth="4"
              fill="none"
            />
            <circle
              cx="18"
              cy="18"
              r="16"
              stroke="#667EEA"
              strokeWidth="4"
              strokeDasharray="65, 100"
              fill="none"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-blue-500 font-bold">
            $65
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold text-gray-700 dark:bg-background  ">
            Income this week
          </div>
          <div className="text-sm text-gray-500">$39k less than last week</div>
        </div>
      </div>
    </div>
  );
};

export default Body_div4_2;
