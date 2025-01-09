import React from "react";
import RightContent from "./RightContent";
import "../App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "../index.css";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const RouteLayout = () => {
  return (
    <div className="flex flex-row h-[100%] dark:bg-gray-900 text-gray-900 dark:text-gray-100 ">
      <Sidebar />

      <div className="bg-gray-50 dark:bg-gray-900   w-full h-full">
        <RightContent />
      </div>
    </div>
  );
};
export default RouteLayout;
