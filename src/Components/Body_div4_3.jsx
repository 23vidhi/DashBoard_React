import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Body_div4_3 = () => {
  // Data for the chart
  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Transactions",
        data: [120, 200, 150, 80, 300, 250, 400],
        borderColor: "#4F46E5",
        backgroundColor: "rgba(79, 70, 229, 0.2)",
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  // Transactions data
  const transactions = [
    {
      id: 1,
      type: "Paypal",
      description: "Send money",
      amount: 82.6,
      currency: "USD",
      color: "text-orange-500",
    },
    {
      id: 2,
      type: "Wallet",
      description: "Mac'D",
      amount: 270.69,
      currency: "USD",
      color: "text-green-500",
    },
    {
      id: 3,
      type: "Transfer",
      description: "Refund",
      amount: 637.91,
      currency: "USD",
      color: "text-blue-500",
    },
    {
      id: 4,
      type: "Credit Card",
      description: "Ordered Food",
      amount: -838.71,
      currency: "USD",
      color: "text-red-500",
    },
    {
      id: 5,
      type: "Wallet",
      description: "Starbucks",
      amount: 203.33,
      currency: "USD",
      color: "text-green-500",
    },
    {
      id: 6,
      type: "Mastercard",
      description: "Ordered Food",
      amount: -92.45,
      currency: "USD",
      color: "text-red-500",
    },
  ];

  return (
    <div className="p-6 space-y-6 bg-white dark:bg-background   rounded-lg shadow-md w-[99%]">
      {/* Transactions List */}
      <div className="bg-white dark:bg-background   p-4 rounded-lg w-[100%] ">
        <h2 className="text-lg font-semibold mb-4">Transactions</h2>
        <ul className="space-y-4">
          {transactions.map((transaction) => (
            <li
              key={transaction.id}
              className="flex justify-between items-center border-b pb-2 last:border-b-0 w-[297px]"
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center ${transaction.color}`}
                >
                  <span className="text-xl font-bold">
                    {transaction.type[0]}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {transaction.type}
                  </p>
                  <p className="text-xs text-gray-500">
                    {transaction.description}
                  </p>
                </div>
              </div>
              <p className={`text-sm font-semibold ${transaction.color}`}>
                {transaction.amount > 0 ? "+" : ""}
                {transaction.amount.toFixed(2)} {transaction.currency}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Body_div4_3;
