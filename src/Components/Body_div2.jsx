import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FiChevronDown } from "react-icons/fi";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BodyDiv2 = () => {
  // Bar chart data
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "2023",
        data: [20, 10, 15, 30, 20, 25, 15],
        backgroundColor: "#6366F1", // Indigo for 2023
      },
      {
        label: "2022",
        data: [-10, -5, 5, -15, 10, -10, -5],
        backgroundColor: "#06B6D4", // Cyan for 2022
      },
    ],
  };

  // Bar chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex w-[100%]  mt-5 h-[65.8%] ">
      {/* Chart Section */}
      <div className="flex-1 w-60 pr-3 justify-center items-center">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Total Revenue
        </h2>
        <Bar data={data} options={options} />
      </div>

      {/* Stats Section */}
      <div className="w-1/3 pl-6 border-l border-gray-200">
        <div className="flex justify-between items-center mb-4 p-4">
          <h3 className="text-gray-700 text-lg font-medium">2023</h3>
          <button className="text-sm bg-purple-100 text-purple-600 px-2 py-1 rounded">
            <FiChevronDown />
          </button>
        </div>
        <div className="text-center mb-6">
          <div className="text-3xl font-bold text-purple-600">78%</div>
          <p className="text-gray-500">Growth</p>
          <p className="text-sm text-gray-400">62% Company Growth</p>
        </div>
        <div className="flex justify-around">
          <div className="text-center">
            <div className="text-purple-600 text-xl font-bold">$32.5k</div>
            <p className="text-gray-500">2023</p>
          </div>
          <div className="text-center">
            <div className="text-cyan-600 text-xl font-bold">$41.2k</div>
            <p className="text-gray-500">2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyDiv2;
