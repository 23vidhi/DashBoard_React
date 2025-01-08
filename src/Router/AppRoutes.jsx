import React from "react";
import RouteLayout from "../Components/RouteLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "../Components/Body";
import "../index.css";
import OrderList from "../Components/Orders/OrderList/OrderList";
import OrderDetails from "../Components/Orders/OrderDetails/OrderDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    children: [
      {
        path: "Body",
        element: <Body />,
      },
      {
        path: "/OrderList",
        element: <OrderList />,
      },
      {
        path: "/OrderDetails?",
        element: <OrderDetails />,
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
