import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-transparent   text-gray-600 text-sm py-4 h-20 flex justify-between items-center w-[95%] ">
      <div className="flex flex-row justify-between gap-4 w-[100%]">
        <div className="">
          © 2025, made with{" "}
          <span className="text-red-500 font-semibold">❤️</span> by{" "}
          <a
            href="https://themeselection.com"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            ThemeSelection
          </a>
        </div>
        <div className="space-x-4">
          <a href="#license" className="text-blue-500 hover:underline">
            License
          </a>
          <a href="#more-themes" className="text-blue-500 hover:underline">
            More Themes
          </a>
          <a href="#documentation" className="text-blue-500 hover:underline">
            Documentation
          </a>
          <a href="#support" className="text-blue-500 hover:underline">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
