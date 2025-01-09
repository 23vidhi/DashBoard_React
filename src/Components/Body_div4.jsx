import React from 'react';
import Body_div4_1 from './Body_div4_1'
import Body_div4_2 from './Body_div4_2'
import Body_div4_3 from './Body_div4_3'


const Body_div4=()=>{
    return (
        <div className="flex gap-5 mt-6  bg-transparent">
            <div className="flex w-[59%] gap-5 ">
            <Body_div4_1/>
            <Body_div4_2/>
            </div>
            <div className="flex w-[100%]">
            <Body_div4_3/>
            </div>
        </div>
    )
}
export default Body_div4