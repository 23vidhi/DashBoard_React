import React from "react";
import {
  FiCalendar,
  FiCheckCircle,
  FiCreditCard,
  FiAlertCircle,
} from "react-icons/fi";

const OrderStatsCard = () => {
  const stats = [
    {
      label: "Pending Payment",
      value: 56,
      icon: <FiCalendar />,
    },
    {
      label: "Completed",
      value: 12689,
      icon: <FiCheckCircle />,
    },
    {
      label: "Refunded",
      value: 124,
      icon: <FiCreditCard />,
    },
    {
      label: "Failed",
      value: 32,
      icon: <FiAlertCircle />,
    },
  ];

  return (
    <div className="bg-white dark:bg-background   shadow-md rounded-lg p-6 flex justify-between items-center w-[100%]]">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`flex items-center w-64 h-8 ${
            index !== stats.length - 1 && "border-r"
          } pr-6 last:pr-0`}
        >
          <div className="bg-gray-100 p-3 rounded-lg text-gray-600 text-xl ">
            {stat.icon}
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              {stat.value}
            </h1>
            <p className="text-gray-500 text-sm">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderStatsCard;
