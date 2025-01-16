import React from "react";
import RightContent from "./RightContent";
import "../App.css";
import "../index.css";
// import Sidebar,{isFixed,setIsFixed} from "./Sidebar";
import Sidebar from "./Sidebar";
 
 

const RouteLayout = () => {
  // const [isFixed, setIsFixed] = useState(true);
  return (
 
    <div className="flex flex-row h-[100%] dark:bg-gray-900 text-gray-900 dark:text-gray-100 ">
      <Sidebar />

      <div className="bg-gray-50 dark:bg-gray-900  sm:bg-gray-50 w-screen h-full">
        <RightContent />
      </div>
    </div>
  
  );
};
export default RouteLayout;
