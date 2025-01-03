import React from 'react';

import { LineChart, Line, ResponsiveContainer } from 'recharts';

const generateDummyData = () => {
  return Array.from({ length: 12 }, (_, i) => ({
    name: `Month ${i + 1}`,
    value: Math.floor(Math.random() * (90000 - 70000) + 70000)
  }));
};

const Body_div3_ProfileReport = () => {
  const data = generateDummyData();
  
  return (
    <div className="w-full h-48  p-6 bg-white rounded-lg shadow ml-6">
      <div className="flex flex-col ">
        <div className="flex justify-between items-start ">
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">Profile Report</h3>
            <span className="inline-block px-3 py-1 bg-amber-100 text-amber-600 rounded-full text-sm font-medium">
              YEAR 2022
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <span className="flex items-center text-green-500 text-sm">
            <svg 
              className="w-4 h-4 mr-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
            68.2%
          </span>
        </div>

        <div className="text-2xl font-bold text-gray-800 mb-4">
          ${(84686).toLocaleString()}k
        </div>

        <div className="h-16">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#F59E0B" 
                strokeWidth={3}
                dot={false}
                smooth
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Body_div3_ProfileReport;