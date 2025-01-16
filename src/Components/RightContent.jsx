import React from "react";
import { useContext } from "react";
import Body from "./Body";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
// import {TranslateContext} from "./Sidebar";


const RightContent = () => {
  //  const {isFixed, setIsFixed} = useContext(TranslateContext);

 
  return (
    <div className=" flex justify-center mt-1  bg-gray-50 2xl:w-full dark:bg-foreground ">
      <div className=" flex flex-col space-y-1 justify-center items-center ml-14">
        <Header />
        <div className="w-[73vw] ml-2">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default RightContent;
