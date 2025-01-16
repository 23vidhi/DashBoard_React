import React from "react";
import { FiSearch, FiGlobe, FiSun, FiBell } from "react-icons/fi";
import HeaderLang from "./HeaderLang";
import HeaderModes from "./HeaderModes";
import HeaderNoti from "./HeaderNoti";
import HeaderProfile from "./HeaderProfile";

const Header = () => {
  return (
    <header className="bg-white dark:bg-background   shadow-md p-4 flex items-center justify-between  mt-4 ml-[0.40rem] w-[69.5%] rounded-md h-14 fixed top-0 z-10 lg:w-[69.5%],fixed,justify-center">
      {/* Search Bar */}
      <div className="relative flex-1 max-w-[600px]">
        <FiSearch className="absolute left-4 top-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search (Ctrl+/)"
          className="w-full pl-12 pr-4 py-2 rounded-full  text-gray-700 dark:bg-background   focus:outline-none   "
        />
      </div>

      {/* Icons Section */}
      <div className="flex items-center space-x-6">
        <HeaderLang />
        <HeaderModes />
        <HeaderNoti />
        <div className="relative">
          <HeaderProfile />
        </div>
      </div>
    </header>
  );
};

export default Header;
