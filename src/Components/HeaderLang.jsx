import React, { useState } from "react";
import { FiSearch, FiGlobe, FiSun, FiBell } from "react-icons/fi";

const HeaderLang = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language) => {
     setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Globe Icon */}
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center w-10 h-10 rounded-full focus:outline-none"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
       <FiGlobe
                 className="text-gray-500 hover:text-blue-500 cursor-pointer"
                 size={20}
               />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg">
          <ul className="py-2">
            <li>
              <button
                onClick={() => selectLanguage("English")}
                className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-violet-200 hover:text-violet-600"
              >
                English
              </button>
            </li>
            <li>
              <button
                onClick={() => selectLanguage("French")}
                className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-violet-200 hover:text-violet-600"
              >
                French
              </button>
            </li>
            <li>
              <button
                onClick={() => selectLanguage("Arabic")}
                className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-violet-200 hover:text-violet-600"
              >
                Arabic
              </button>
            </li>
            <li>
              <button
                onClick={() => selectLanguage("Spanish")}
                className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-violet-200 hover:text-violet-600"
              >
                Spanish
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HeaderLang;
