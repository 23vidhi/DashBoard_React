import React from "react";

const Body_div1 = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex h-auto  w-[100%]">
      {/* Left Section */}
      <div className="h-auto ">
        <h2 className="text-lg font-semibold text-violet-600 flex items-center">
          Congratulations John! <span className="ml-2">🎉</span>
        </h2>
        <p className="text-gray-600 h-10 w-96 m-2">
          You have done <span className="font-semibold">72%</span> more sales today. <br/>
          Check your new badge in your profile.
        </p>
        <button className="mt-4 px-4 py-2 bg-violet-100 text-violet-600 font-semibold rounded hover:bg-blue-200">
          View Badges
        </button>
      </div>

      {/* Right Section */}
      <div className="w-1/3">
        <img
          src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/illustrations/man-with-laptop.png"
          alt="Person at laptop"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Body_div1;
