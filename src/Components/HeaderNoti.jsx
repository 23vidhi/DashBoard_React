import React, { useState } from "react";
import { FiBell } from "react-icons/fi";

const HeaderNoti = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
    
      <button
        onClick={toggleDropdown}
        className="p-2  rounded-full  transition"
      >
        <FiBell
          className="text-gray-500 hover:text-blue-500 cursor-pointer"
          size={20}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50">
          <div className="p-4 border-b">
            <h2 className="font-bold text-lg">Notification</h2>
            <span className="text-sm text-gray-500">8 New</span>
          </div>
          <div className="divide-y">
            {/* Notification Items */}
            <div className="p-4 flex items-center gap-3 hover:bg-violet-200 hover:text-violet-600 ">
              <img
                src="https://via.placeholder.com/40"
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium text-gray-800">
                  Congratulations Lettie 🎉
                </p>
                <span className="text-sm text-gray-500">
                  Won the monthly best seller gold badge
                </span>
                <div className="text-xs text-gray-400">1h ago</div>
              </div>
            </div>
            <div className="p-4 flex items-center gap-3 hover:bg-violet-200 hover:text-violet-600 ">
              <div className="w-10 h-10 bg-gray-300 flex items-center justify-center rounded-full">
                CF
              </div>
              <div>
                <p className="font-medium text-gray-800">Charles Franklin</p>
                <span className="text-sm text-gray-500">
                  Accepted your connection
                </span>
                <div className="text-xs text-gray-400">12h ago</div>
              </div>
            </div>
            <div className="p-4 flex items-center gap-3 hover:bg-violet-200 hover:text-violet-600 ">
              <img
                src="https://via.placeholder.com/40"
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium text-gray-800">New Message 📩</p>
                <span className="text-sm text-gray-500">
                  You have a new message from Natalie
                </span>
                <div className="text-xs text-gray-400">1h ago</div>
              </div>
            </div>
            <div className="p-4 text-center hover:bg-violet-200 hover:text-violet-600">
              <button className="text-blue-600 font-medium hover:underline">
                View all notifications
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderNoti;
