import React from "react";

import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { MoreVertical } from "lucide-react";

const generateDummyData = () => {
  return Array.from({ length: 12 }, (_, i) => ({
    name: `Month ${i + 1}`,
    value: Math.floor(Math.random() * 6000) + 2000,
  }));
};

const Body_div3_Sales = () => {
  const data = generateDummyData();
  const currentValue = 4679;
  const percentageChange = 28.42;

  return (
    <div className="w-64 h-48 p-4 bg-white dark:bg-background   rounded-lg shadow-md mb-4">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-2">
            <svg
              className="w-4 h-4 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <span className="text-gray-500 font-medium">Sales</span>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreVertical size={20} />
        </button>
      </div>

      <div className="mb-4">
        <div className="text-2xl font-bold">
          ${currentValue.toLocaleString()}
        </div>
        <div className="flex items-center mt-1">
          <span
            className={`text-sm ${
              percentageChange >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {percentageChange >= 0 ? "↑" : "↓"} {Math.abs(percentageChange)}%
          </span>
        </div>
      </div>

      <div className="h-16">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <Area
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              fill="#93c5fd"
              fillOpacity={0.2}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Body_div3_Sales;
