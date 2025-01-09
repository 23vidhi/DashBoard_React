import React, { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const HeaderModes = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = (newTheme) => {
    if (newTheme === "system") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    } else {
      setTheme(newTheme);
    }
    setDropdownOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="p-2 rounded-lg dark:bg-gray-800 dark:text-white"
      >
        {theme === "dark" ? <FiMoon size={20} /> : <FiSun size={20} />}
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-background   dark:bg-gray-800 dark:text-white border dark:border-gray-700">
          {["light", "dark", "system"].map((mode) => (
            <button
              key={mode}
              className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => handleThemeChange(mode)}
            >
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderModes;
