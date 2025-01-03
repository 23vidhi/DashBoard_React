import React from "react";
import Body from "./Body";
import Header from "./Header";
import Card from "./Card";
import { Outlet } from "react-router-dom";

const RightContent = () => {
  return (
    <div className="  flex justify-center mt-1  ">
      <div className=" flex flex-col justify-center items-center ml-14">
        <Header />
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default RightContent;
