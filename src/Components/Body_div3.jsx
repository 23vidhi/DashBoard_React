import React from 'react';
import Body_div3_Order from './Body_div3_Order'
import Body_div3_Sales from './Body_div3_Sales'
import Body_div3_Payments from './Body_div3_Payments'
import Body_div3_Revenue from './Body_div3_Revenue'
import Body_div3_ProfileReport from './Body_div3_ProfileReport'
const Body_div3=()=>{
    return (
        <div className="  bg-transparent w-[78%] ">
            <div className="flex flex-row gap-5 ">
            <Body_div3_Order/>
            <Body_div3_Sales/>
            </div>
            <div className="flex flex-row gap-5 mt-2 ">
            <Body_div3_Payments/>
            <Body_div3_Revenue/>
            </div>
            <div className="flex">
            <Body_div3_ProfileReport/>
            </div>
        </div>
    )
}
export default Body_div3