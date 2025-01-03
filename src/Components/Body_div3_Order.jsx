import React from 'react';

import { LineChart, Line, ResponsiveContainer, YAxis, XAxis, Tooltip } from 'recharts';
import { Search } from 'lucide-react';


const data = [
  { name: 'Jan', value: 220 },
  { name: 'Feb', value: 260 },
  { name: 'Mar', value: 180 },
  { name: 'Apr', value: 140 },
  { name: 'May', value: 200 },
  { name: 'Jun', value: 276 },
];

const Body_div3_Order = () => {
  return (
    <div className="w-64 h-48 bg-white rounded-xl shadow mb-4 ml-6 ">
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-sm text-gray-500 font-medium">Order</h3>
            <p className="text-2xl font-semibold">276k</p>
          </div>
          <div className="p-2 bg-green-100 rounded-lg">
            <Search className="w-4 h-4 text-green-500" />
          </div>
        </div>
        
        <div className="h-12 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#22C55E"
                strokeWidth={2}
                dot={false}
                isAnimationActive={true}
              />
              <YAxis hide={true} />
              <XAxis hide={true} />
              <Tooltip 
                contentStyle={{
                  background: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}
                labelStyle={{ color: '#666' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Body_div3_Order;