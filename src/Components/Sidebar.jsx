import React, { useState } from "react";
import {
  FiHome,
  FiGrid,
  FiMail,
  FiCalendar,
  FiShoppingCart,
  FiUser,
  FiLock,
  FiBarChart,
  FiMessageCircle,
  FiActivity,
  FiLoader,
  FiInbox,
  FiAperture,
  FiWind,
  FiMonitor,
  
  FiPackage,
  FiPlay,
  FiBookmark,
  FiChevronDown,
  FiRadio,
} from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa";
const SidebarItems = [
  {
    label: "Dashboards",
    icon: <FiHome />,
    link: "#",
    dropdown: [
      { label: "Overview", link: "/overview" },
      { label: "Analytics", link: "/analytics" },
      { label: "Reports", link: "/reports" },
    ],
  },
  {
    label: "Layouts",
    icon: <FiHome />,
    link: "/Layouts",
    dropdown: [
      { label: "Collapsed Sidebar", link: "/collapsed" },
      { label: "Content navbar ", link: "/Content navbar" },
      { label: " Content nav + Sidebar", link: "/Content nav" },
      { label: " Horizontal", link: "/Horizontal" },
      { label: " Without Sidebar", link: "/Without Sidebar" },
      { label: "Without navbar ", link: "/Without navbar" },
      { label: "Fluid ", link: "/Fluid" },
      { label: "Container ", link: "/Container" },
      { label: "Blank ", link: "/Blank" },
    ],
  },
  {
    label: "Front Pages",
    icon: <FiMail />,
    link: "/ Front Pages",
    dropdown: [
      { label: "Landing", link: "/Landing" },
      { label: "Pricing", link: "/Pricing" },
      { label: "Payment", link: "/Payment" },
      { label: "Chekout", link: "/Chekout" },
      { label: "Help Center", link: "/Help Center" },
    ],
  },
];
const SidebarItems2 = [
  { label: "Email", icon: <FiMail />, link: "#" },
  { label: "Chat", icon: <FiMessageCircle />, link: "#" },
  { label: "Calendar", icon: <FiCalendar />, link: "#" },
  { label: "Kanban", icon: <FiBookmark />, link: "#" },
  {
    label: "eCommerce",
    icon: <FiLock />,
    link: "#",
    dropdown: [
      { label: "Products", link: "/" },
      { label: "Order", link: "/",dropdown: [{ label: "Order List", link: "/Order List" },{ label: "Order Details", link: "/Order Details" },] },
      { label: "Customer", link: "/" },
      { label: "Referrals", link: "/" },
      { label: "Settings", link: "/" },
    ],
  },
  {
    label: "Academy",
    icon: <FiActivity />,
    link: "#",
    dropdown: [
      { label: "", link: "/" },
      { label: "", link: "/" },
      { label: "", link: "/" },
    ],
  },
  {
    label: "Logistics",
    icon: <FiLoader />,
    link: "#",
    dropdown: [
      { label: "", link: "/" },
      { label: "", link: "/" },
      { label: "", link: "/" },
    ],
  },
  {
    label: "Invoice",
    icon: <FiInbox />,
    link: "#",
    dropdown: [
      { label: "", link: "/" },
      { label: "", link: "/" },
      { label: "", link: "/" },
    ],
  },
  {
    label: "Users",
    icon: <FiUser />,
    link: "#",
    dropdown: [
      { label: "", link: "/" },
      { label: "", link: "/" },
      { label: "", link: "/" },
    ],
  },
  {
    label: "Roles & Permissions",
    icon: <FiRadio />,
    link: "#",
    dropdown: [
      { label: "", link: "/" },
      { label: "", link: "/" },
      { label: "", link: "/" },
    ],
  },
  {
    label: "Pages",
    icon: <FiPackage />,
    link: "#",
    dropdown: [
      { label: "", link: "/" },
      { label: "", link: "/" },
      { label: "", link: "/" },
    ],
  },
  {
    label: "Authentications",
    icon: <FiAperture />,
    link: "#",
    dropdown: [
      { label: "", link: "/" },
      { label: "", link: "/" },
      { label: "", link: "/" },
    ],
  },
  {
    label: "Wizard Examples",
    icon: <FiWind />,
    link: "#",
    dropdown: [
      { label: "", link: "/" },
      { label: "", link: "/" },
      { label: "", link: "/" },
    ],
  },
  { label: "Modal Examples", icon: <FiMonitor />, link: "#" },
];
const Sidebar = () => {
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };
  const handleMouseEnter = () => {
    setIsSidebarOpen(true);
  };

  const handleMouseLeave = () => {
    setIsSidebarOpen(false);
  };
  return (
    <nav className={`bg-white p-4 shadow-md h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-transparent fixed transition-all duration-300 ${isSidebarOpen ? 'w-[270px]' : 'w-[70px]'}`}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      
 
      <ul className="flex flex-col ">
        <div className="flex justify-start mt-1 mb-2 size-8 w-full">
          <img
            className=" bg-transparent "
            src="src\assets\pictures\sneat logo.PNG"
          />
          <div className="flex flex-row justify-between items-center gap-35 w-[100%]">
          <span class="app-brand-text demo menu-text font-semibold ms-2 text-lg ">
            sneat
          </span>
         <button onClick={()=>I}> <span className="flex items-end text-end">< FaChevronRight className="bg-violet-600 text-white rounded-lg text-base p-[0.20rem] "/></span></button>
          </div>
        </div>
 
        {SidebarItems.map((item, index) => (
          <li key={index} className="mb-4 text-sm">
            <button
              className={`flex items-center justify-between w-[100%]  space-x-2 text-black hover:text-violet-600 hover:bg-violet-100${!isSidebarOpen ? 'rotate-90' : ''}`}
              onClick={() => toggleDropdown(index)}
            >
              <div className="flex items-center space-x-1">
                {item.icon}
                <div>{item.label}</div>
              </div>

              {item.dropdown && <FiChevronDown className="" />}
            </button>

            {item.dropdown && dropdownOpen === index && (
              <ul className=" list-disc left-1 ml-5 mt-2 w-48 rounded-md bg-white  ">
                {item.dropdown.map((subItem, subIndex) => (
                  <li key={subIndex} className="">
                    <a
                      href={subItem.link}
                      className="block px-4 py-2 text-black hover:bg-gray-100"
                    >
                      {subItem.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        <div>
          <h1 className="text-gray-500 mb-4">Apps & Pages</h1>
        </div>
        {SidebarItems2.map((item, index) => (
          <li key={index} className="mb-4 text-sm ">
            <button
              className="flex items-center justify-between w-[100%]  space-x-2 text-black hover:text-violet-600 hover:bg-violet-100"
              onClick={() => toggleDropdown(index)}
            >
              <div className="flex items-center space-x-1">
                {item.icon}
                <div>{item.label}</div>
              </div>

              {item.dropdown && <FiChevronDown className="" />}
            </button>

            {item.dropdown && dropdownOpen === index && (
              <ul className=" list-disc left-1 ml-5 mt-2 w-48 rounded-md bg-white  ">
                {item.dropdown.map((subItem, subIndex) => (
                  <li key={subIndex} className="">
                    <a
                      href={subItem.link}
                      className="block px-4 py-2 text-black hover:bg-gray-100"
                    >
                      {subItem.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
