import React from "react";
import RightContent from "./RightContent";
import "../App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "../index.css";
import Sidebar from "./Sidebar";

const RouteLayout = () => {
  return (
    <div className="flex h-[100%]">
      <div className="bg-white ">
        <Sidebar />
      </div>
      <div className="bg-gray-50 w-full h-full">
        <RightContent />
      </div>
    </div>
  );
};
export default RouteLayout;
