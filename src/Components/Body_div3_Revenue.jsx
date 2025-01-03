import React from 'react';

import { BarChart, Bar, ResponsiveContainer, XAxis } from 'recharts';

const data = [
  { day: 'M', value: 280 },
  { day: 'T', value: 200 },
  { day: 'W', value: 260 },
  { day: 'T', value: 420 },
  { day: 'F', value: 320 },
  { day: 'S', value: 240 },
  { day: 'S', value: 280 }
];

const Body_div3_Revenue = () => {
  return (
    <div className="w-64 h-48 p-4 bg-white rounded-lg shadow">
      <div className="">
        <span className="text-gray-500 font-medium">Revenue</span>
      </div>
      
      <div className="">
        <div className="text-2xl font-bold text-gray-800">425k</div>
      </div>

      <div className="h-32">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <XAxis 
              dataKey="day" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#9CA3AF' }}
            />
            <Bar 
              dataKey="value" 
              fill="#818CF8"
              radius={[4, 4, 0, 0]}
              barSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Body_div3_Revenue;