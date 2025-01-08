import React from "react";

const Shipping = () => {
  const activities = [
    {
      title: "Order was placed (Order ID: #32543)",
      description: "Your order has been placed successfully",
      time: "Tuesday 11:29 AM",
      completed: true,
    },
    {
      title: "Pick-up",
      description: "Pick-up scheduled with courier",
      time: "Wednesday 11:29 AM",
      completed: true,
    },
    {
      title: "Dispatched",
      description: "Item has been picked up by courier",
      time: "Thursday 11:29 AM",
      completed: true,
    },
    {
      title: "Package arrived",
      description: "Package arrived at an Amazon facility, NY",
      time: "Saturday 15:20 AM",
      completed: true,
    },
    {
      title: "Dispatched for delivery",
      description: "Package has left an Amazon facility, NY",
      time: "Today 14:12 PM",
      completed: true,
    },
    {
      title: "Delivery",
      description: "Package will be delivered by tomorrow",
      time: "",
      completed: false,
    },
  ];

  return (
    <div className=" flex flex-col justify-start text-start w-[61.5%] mt-6 bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Shipping activity</h2>
      <div className="relative">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start">
            {/* Timeline Marker */}
            <div className="flex flex-col items-center mr-4">
              <div
                className={`w-4 h-4 rounded-full ${
                  activity.completed ? "bg-blue-500" : "bg-gray-300"
                 
                }`}
               
              ></div>
              {index < activities.length - 1 && (
                <div
                  className={`w-px h-full ${
                    activity.completed ? "bg-blue-500" : "bg-gray-300"
                  }`}
                ></div>
              )}
            </div>
            {/* Activity Content */}
            <div className="flex-1 mb-4">
           <div className="">
              <h3 className="text-sm font-semibold text-gray-900">
                {activity.title}
              </h3>
             
           
              
              <p className="text-sm text-gray-600">{activity.description}</p>
              {activity.time && (
                <p className="text-sm  flex justify-end text-gray-400 mt-1">{activity.time}</p>
              )}
             
             </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shipping;
