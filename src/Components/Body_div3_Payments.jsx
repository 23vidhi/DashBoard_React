import React from "react";

import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { MoreVertical } from "lucide-react";

const generateDummyData = () => {
  return Array.from({ length: 12 }, (_, i) => ({
    name: `Month ${i + 1}`,
    value: Math.floor(Math.random() * 3000) + 1500,
  }));
};

const Body_div3_Payments = () => {
  const data = generateDummyData();
  const currentValue = 2456;
  const percentageChange = -14.82;

  return (
    <div className="w-64 h-48 p-4 bg-white dark:bg-background   rounded-lg shadow-md mb-4 ml-6">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center mr-2">
            <svg
              className="w-4 h-4 text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2"
              />
            </svg>
          </div>
          <span className="text-gray-500 font-medium">Payments</span>
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
              stroke="#f87171"
              fill="#fecaca"
              fillOpacity={0.2}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Body_div3_Payments;
