import React from "react";
import RouteLayout from "../Components/RouteLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "../Components/Body";
import "../index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    children: [
      {
        path: "",
        element: <Body />, 
      },
      {
        path: "/page1",
        element: <Body />, // Add the Body component as a rout
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
