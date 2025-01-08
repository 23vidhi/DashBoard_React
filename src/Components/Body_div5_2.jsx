import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderList from "./Orders/OrderList/OrderList";
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
  const [browserData, setBrowserData] = useState("Browser");
  const HandleBrowser = (BrowserData) => {
    setBrowserData(BrowserData);
  };

  const navigate = useNavigate();
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
    <div className="max-w-2xl  bg-white shadow-md rounded-lg p-6 space-y-6 w-[47%]">
      <div className="flex items-center justify-between border-b pb-4">
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 rounded-md ${
              browserData === "Browser" ? "bg-blue-100 text-blue-600" : "text-gray-500 hover:text-gray-800 "
            }`}
            onClick={() => HandleBrowser("Browser")}
          >
            Browser
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              browserData === "OsData" ? "bg-blue-100 text-blue-600" : "text-gray-500 hover:text-gray-800"
            }`}
            onClick={() => HandleBrowser("OsData")}
          >
            Operating System
          </button>

          <button
            className={`px-4 py-2 rounded-md ${
              browserData === "CountryData" ? "bg-blue-100 text-blue-600" : "text-gray-500 hover:text-gray-800"
            }`}
            onClick={() => HandleBrowser("CountryData")}
          >
            Country
          </button>
        </div>
      </div>
      {/* browserData */}
      {browserData === "Browser" && (
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
      )}
      {/* OsData */}
      {browserData === "OsData" && (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-500">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
              <tr>
                <th scope="col" className="px-4 py-3">
                  No
                </th>
                <th scope="col" className="px-4 py-3">
                  System
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
                  name: "Windows",
                  visits: "7.92k",
                  percentage: 64.75,
                  color: "bg-green-500",
                },
                {
                  id: 2,
                  name: "Mac",
                  visits: "2.29k",
                  percentage: 18.43,
                  color: "bg-blue-500",
                },
                {
                  id: 3,
                  name: "Ubuntu",
                  visits: 428,
                  percentage: 8.37,
                  color: "bg-cyan-500",
                },
                {
                  id: 4,
                  name: "Chrome",
                  visits: 342,
                  percentage: 6.12,
                  color: "bg-yellow-500",
                },
                {
                  id: 5,
                  name: "Cent",
                  visits: 82,
                  percentage: 2.12,
                  color: "bg-red-500",
                },
                {
                  id: 6,
                  name: "Linux",
                  visits: 328,
                  percentage: 20.14,
                  color: "bg-orange-500",
                },
              ].map((browseOs) => (
                <tr key={browseOs.id} className="border-b">
                  <td className="px-4 py-3">{browseOs.id}</td>
                  <td className="px-4 py-3 flex items-center space-x-2">
                    <span
                      className={`inline-block w-5 h-5 rounded-full ${browseOs.color}`}
                    ></span>
                    <span>{browseOs.name}</span>
                  </td>
                  <td className="px-4 py-3">{browseOs.visits}</td>
                  <td className="px-4 py-3 flex items-center space-x-2">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`${browseOs.color} h-2.5 rounded-full`}
                        style={{ width: `${browseOs.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500">
                      {browseOs.percentage.toFixed(2)}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* CountryData */}
      {browserData === "CountryData" && (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-500">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
              <tr>
                <th scope="col" className="px-4 py-3">
                  No
                </th>
                <th scope="col" className="px-4 py-3">
                  Country
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
                  name: "USA",
                  visits: "7.92k",
                  percentage: 64.75,
                  color: "bg-green-500",
                },
                {
                  id: 2,
                  name: "Brazil",
                  visits: "2.29k",
                  percentage: 18.43,
                  color: "bg-blue-500",
                },
                {
                  id: 3,
                  name: "India",
                  visits: 428,
                  percentage: 8.37,
                  color: "bg-cyan-500",
                },
                {
                  id: 4,
                  name: "Australia",
                  visits: 342,
                  percentage: 6.12,
                  color: "bg-yellow-500",
                },
                {
                  id: 5,
                  name: "France",
                  visits: 82,
                  percentage: 2.12,
                  color: "bg-red-500",
                },
                {
                  id: 6,
                  name: "Canada",
                  visits: 328,
                  percentage: 20.14,
                  color: "bg-orange-500",
                },
              ].map((Country) => (
                <tr key={Country.id} className="border-b">
                  <td className="px-4 py-3">{Country.id}</td>
                  <td className="px-4 py-3 flex items-center space-x-2">
                    <span
                      className={`inline-block w-5 h-5 rounded-full ${Country.color}`}
                    ></span>
                    <span>{Country.name}</span>
                  </td>
                  <td className="px-4 py-3">{Country.visits}</td>
                  <td className="px-4 py-3 flex items-center space-x-2">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`${Country.color} h-2.5 rounded-full`}
                        style={{ width: `${Country.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500">
                      {Country.percentage.toFixed(2)}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Body_div5_2;
