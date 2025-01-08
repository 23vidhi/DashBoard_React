import React from "react";
import Body_div1 from "./Body_div1";
import Body_div2 from "./Body_div2";
import Body_div3 from "./Body_div3";
import Body_div4 from "./Body_div4";
import Body_div5 from "./Body_div5";
import Footer from "./Footer";
const Body = () => {
  return (
    <div className="flex flex-col w-[100%] ml-8 mt-20">
      <div className="flex flex-row mt-4 w-screen ">
        <div className="flex flex-col items-start">
          <Body_div1 />

          <Body_div2 />
        </div>
        <div className="flex flex-row bg-transparent ">
          <Body_div3 />
        </div>
      </div>
      <div className="flex ">
        <Body_div4 />
      </div>
      <Body_div5 />
      <Footer />
    </div>
  );
};
export default Body;
