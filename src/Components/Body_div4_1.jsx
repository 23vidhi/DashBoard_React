import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Body_div4_1 = () => {
  const data = {
    labels: ["Weekly Completed", "Remaining"],
    datasets: [
      {
        data: [38, 62], // 38% weekly completed, 62% remaining
        backgroundColor: ["#4CAF50", "#E0E0E0"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-96">
      <div className="text-gray-700 text-lg font-bold">Order Statistics</div>
      <div className="text-gray-500 text-sm">42.82k Total Sales</div>

      <div className="mt-4">
        <div className="text-3xl font-bold text-gray-800">8,258</div>
        <div className="text-sm text-gray-500">Total Orders</div>
      </div>

      <div className="flex items-center justify-between mt-6">
        <div className="w-1/2">
          <Doughnut data={data} options={{ maintainAspectRatio: false }} />
        </div>
        <div className="w-1/2">
          <div className="text-sm text-gray-600">38% Weekly</div>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-purple-500 rounded"></div>
            <div className="text-sm text-gray-700">Electronic</div>
          </div>
          <div className="text-sm font-bold text-gray-800">82.5k</div>
        </div>

        <div className="flex items-center justify-between py-2">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <div className="text-sm text-gray-700">Fashion</div>
          </div>
          <div className="text-sm font-bold text-gray-800">23.8k</div>
        </div>

        <div className="flex items-center justify-between py-2">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            <div className="text-sm text-gray-700">Decor</div>
          </div>
          <div className="text-sm font-bold text-gray-800">849k</div>
        </div>

        <div className="flex items-center justify-between py-2">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-500 rounded"></div>
            <div className="text-sm text-gray-700">Sports</div>
          </div>
          <div className="text-sm font-bold text-gray-800">99</div>
        </div>
      </div>
    </div>
  );
};

export default Body_div4_1;
