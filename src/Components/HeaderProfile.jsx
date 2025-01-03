import React, { useState } from "react";
import { FiUser, FiSettings, FiCreditCard, FiDollarSign, FiHelpCircle, FiLogOut } from "react-icons/fi";

const HeaderProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Profile Icon */}
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 p-2  rounded-full  transition"
      >
       <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full border border-gray-300"
          />
          <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border border-white"></span>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-50">
          {/* User Info */}
          <div className="p-4 border-b">
            <div className="flex items-center gap-3">
              <img
                src="https://via.placeholder.com/40"
                alt="User"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h2 className="font-medium text-gray-800">John Doe</h2>
                <span className="text-sm text-gray-500">Admin</span>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <ul className="divide-y">
            <li className="flex items-center gap-3 p-3 hover:bg-violet-200 hover:text-violet-600 transition">
              <FiUser className="text-gray-600" />
              <span className="font-medium text-gray-800">My Profile</span>
            </li>
            <li className="flex items-center gap-3 p-3 hover:bg-violet-200 hover:text-violet-600 transition">
              <FiSettings className="text-gray-600" />
              <span className="font-medium text-gray-800">Settings</span>
            </li>
            <li className="flex items-center justify-between gap-3 p-3 hover:bg-violet-200 hover:text-violet-600 transition">
              <div className="flex items-center gap-3 ">
                <FiCreditCard className="text-gray-600" />
                <span className="font-medium text-gray-800">Billing Plan</span>
              </div>
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">4</span>
            </li>
            <li className="flex items-center gap-3 p-3 hover:bg-violet-200 hover:text-violet-600 transition">
              <FiDollarSign className="text-gray-600" />
              <span className="font-medium text-gray-800">Pricing</span>
            </li>
            <li className="flex items-center gap-3 p-3 hover:bg-violet-200 hover:text-violet-600 transition">
              <FiHelpCircle className="text-gray-600" />
              <span className="font-medium text-gray-800">FAQ</span>
            </li>
            <li className="flex items-center gap-3 p-3 hover:bg-violet-200 hover:text-violet-600 transition">
              <FiLogOut className="text-gray-600" />
              <span className="font-medium text-gray-800">Log Out</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HeaderProfile;
