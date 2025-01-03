import React, { useState } from 'react';
import { FiSun } from 'react-icons/fi';

const HeaderModes = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center rounded-full   py-2 bg-white text-sm  focus:outline-none   "
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={handleDropdownToggle}
        >
           <FiSun
                  className="text-gray-500 hover:text-blue-500 cursor-pointer"
                  size={20}
                />
        </button>
       
      </div>

      {dropdownOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button
              className="block px-4 py-2 text-sm hover:bg-violet-200 hover:text-violet-600 w-full text-left"
              role="menuitem"
              onClick={() => console.log('Light mode selected')}
            >
              Light
            </button>
            <button
              className="block px-4 py-2 text-sm hover:bg-violet-200 hover:text-violet-600 w-full text-left"
              role="menuitem"
              onClick={() => console.log('Dark mode selected')}
            >
              Dark
            </button>
            <button
              className="block px-4 py-2 text-sm hover:bg-violet-200 hover:text-violet-600 w-full text-left"
              role="menuitem"
              onClick={() => console.log('System mode selected')}
            >
              System
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderModes;

