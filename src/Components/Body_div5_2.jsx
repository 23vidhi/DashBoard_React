import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";


ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Body_div5_2 = () => {
  const chartData = {
    labels: ["Chrome", "Safari", "Firefox", "Edge", "Opera", "UC Browser"],
    datasets: [
      {
        label: "Data in Percentage",
        data: [64.75, 18.43, 8.37, 6.12, 2.12, 20.14],
        backgroundColor: [
          "#4CAF50", // Chrome
          "#2196F3", // Safari
          "#00BCD4", // Firefox
          "#FFC107", // Edge
          "#F44336", // Opera
          "#FF5722", // UC Browser
        ],
        borderRadius: 8,
        barPercentage: 0.5,
      },
    ],
  };

  return (
    <div className="max-w-2xl  bg-white shadow-md rounded-lg p-6 space-y-6 w-[44.6%]">
      <div className="flex items-center justify-between border-b pb-4">
      
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-md">
            Browser
          </button>
          <button className="px-4 py-2 text-gray-500 hover:text-gray-800">
            Operating System
          </button>
          <button className="px-4 py-2 text-gray-500 hover:text-gray-800">
            Country
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-500">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th scope="col" className="px-4 py-3">
                No
              </th>
              <th scope="col" className="px-4 py-3">
                Browser
              </th>
              <th scope="col" className="px-4 py-3">
                Visits
              </th>
              <th scope="col" className="px-4 py-3">
                Data in Percentage
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                id: 1,
                name: "Chrome",
                visits: "8.92k",
                percentage: 64.75,
                color: "bg-green-500",
              },
              {
                id: 2,
                name: "Safari",
                visits: "1.29k",
                percentage: 18.43,
                color: "bg-blue-500",
              },
              {
                id: 3,
                name: "Firefox",
                visits: 328,
                percentage: 8.37,
                color: "bg-cyan-500",
              },
              {
                id: 4,
                name: "Edge",
                visits: 142,
                percentage: 6.12,
                color: "bg-yellow-500",
              },
              {
                id: 5,
                name: "Opera",
                visits: 82,
                percentage: 2.12,
                color: "bg-red-500",
              },
              {
                id: 6,
                name: "UC Browser",
                visits: 328,
                percentage: 20.14,
                color: "bg-orange-500",
              },
            ].map((browser) => (
              <tr key={browser.id} className="border-b">
                <td className="px-4 py-3">{browser.id}</td>
                <td className="px-4 py-3 flex items-center space-x-2">
                  <span
                    className={`inline-block w-5 h-5 rounded-full ${browser.color}`}
                  ></span>
                  <span>{browser.name}</span>
                </td>
                <td className="px-4 py-3">{browser.visits}</td>
                <td className="px-4 py-3 flex items-center space-x-2">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className={`${browser.color} h-2.5 rounded-full`}
                      style={{ width: `${browser.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500">
                    {browser.percentage.toFixed(2)}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
    </div>
  );
};

export default Body_div5_2;
