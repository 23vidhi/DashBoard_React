// Import necessary libraries
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



const Body_div5_1 = () => {
  return (
    <div className=" flex flex-col max-w-lg  bg-white shadow rounded-lg p-6 space-y-6 w-[100%] justify-items-start">
      <h2 className="text-lg font-semibold text-gray-800">Activity Timeline</h2>

      {/* Invoice Paid Section */}
      <div className="flex items-start  space-x-4">
        <div className="w-3 h-3 bg-blue-500 rounded-full mt-1.5"></div>
        <div className="w-[100%]">
          <div className="flex   justify-between">
          <h3 className="text-sm font-medium text-gray-900">12 Invoices have been paid</h3><span className="text-xs text-gray-400 mt-1">12 min ago</span></div>
          <p className="text-sm text-gray-500">Invoices have been paid to the company</p>
         
          <button className="text-sm  text-blue-500 hover:underline">invoices.pdf</button>
          
          
        </div>
      </div>

      {/* Client Meeting Section */}
      <div className="flex items-start space-x-4">
        <div className="w-3 h-3 bg-green-500 rounded-full mt-1.5"></div>
        <div className="w-[100%]">
          <div className="flex justify-between"> 
          <h3 className="text-sm font-medium text-gray-900">Client Meeting</h3><span className="text-xs text-gray-400 mt-1 ">12 min ago</span></div>
          <p className="text-sm text-gray-500">Project meeting with John @10:15am</p>
          <div className="flex items-center space-x-2 mt-2">
            <img
              src="https://via.placeholder.com/32"
              alt="Client Avatar"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="text-sm text-gray-900">Lester McCarthy (Client)</p>
              <p className="text-xs text-gray-500">CEO of ThemeSelection</p>
            </div>
          </div>
         
        </div>
      </div>

      {/* New Project Section */}
      <div className="flex  gap-3 ">
        <div className="w-3 h-3 bg-cyan-500 rounded-full mt-1.5"></div>
        <div className="w-[100%]">
          <div className="flex justify-between">
          <h3 className="text-sm font-medium text-gray-900">Create a new project for client</h3><span className="text-xs text-gray-400 mt-1 ">12 min ago</span></div>
          <p className="text-sm text-gray-500">6 team members in a project</p>
          <div className="flex items-center space-x-1 mt-2">
            <img
              src="https://via.placeholder.com/32"
              alt="Team Member 1"
              className="w-6 h-6 rounded-full"
            />
            <img
              src="https://via.placeholder.com/32"
              alt="Team Member 2"
              className="w-6 h-6 rounded-full"
            />
            <img
              src="https://via.placeholder.com/32"
              alt="Team Member 3"
              className="w-6 h-6 rounded-full"
            />
            <div className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full text-xs text-gray-600">
              +3
            </div>
          </div>
          
        </div>
      </div>

      
    </div>
  );
};

export default Body_div5_1;

