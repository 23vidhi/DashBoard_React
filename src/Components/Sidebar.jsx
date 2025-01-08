import React, { useState } from "react";
import Logo from "../assets/pictures/sneat logo.png";

import { useNavigate } from "react-router-dom";
import {
  Home,
  Mail,
  Calendar,
  ShoppingCart,
  User,
  Lock,
  BarChart,
  MessageCircle,
  Activity,
  Loader,
  Inbox,
  Aperture,
  Wind,
  Monitor,
  Package,
  Play,
  Bookmark,
  ChevronDown,
  Radio,
  ChevronRight,
  ChevronLeft,
  LayoutGrid,
} from "lucide-react";

const SidebarItems = [
  {
    label: "Dashboards",
    icon: Home,
    link: "#",
    dropdown: [
      { label: "Overview", link: "/overview" },
      { label: "Analytics", link: "/analytics" },
      { label: "Reports", link: "/reports" },
    ],
  },
  {
    label: "Layouts",
    icon: LayoutGrid,
    link: "/Layouts",
    dropdown: [
      { label: "Collapsed Sidebar", link: "/collapsed" },
      { label: "Content navbar", link: "/Content-navbar" },
      { label: "Content nav + Sidebar", link: "/Content-nav" },
      { label: "Horizontal", link: "/Horizontal" },
      { label: "Without Sidebar", link: "/Without-Sidebar" },
      { label: "Without navbar", link: "/Without-navbar" },
      { label: "Fluid", link: "/Fluid" },
      { label: "Container", link: "/Container" },
      { label: "Blank", link: "/Blank" },
    ],
  },
  {
    label: "Front Pages",
    icon: Mail,
    link: "/Front-Pages",
    dropdown: [
      { label: "Landing", link: "/Landing" },
      { label: "Pricing", link: "/Pricing" },
      { label: "Payment", link: "/Payment" },
      { label: "Checkout", link: "/Checkout" },
      { label: "Help Center", link: "/Help-Center" },
    ],
  },
];

const SidebarItems2 = [
  { label: "Email", icon: Mail, link: "#" },
  { label: "Chat", icon: MessageCircle, link: "#" },
  { label: "Calendar", icon: Calendar, link: "#" },
  { label: "Kanban", icon: Bookmark, link: "#" },
  {
    label: "eCommerce",
    icon: ShoppingCart,
    link: "#",
    dropdown: [
      { label: "Products", link: "/" },
      {
        label: "Order",
        link: "/OrderList",
        dropdown: [
          { label: "Order List", link: "/OrderList" },
          { label: "Order Details", link: "/OrderDetails?" },
        ],
      },
      { label: "Customer", link: "/" },
      { label: "Referrals", link: "/" },
      { label: "Settings", link: "/" },
    ],
  },
  {
    label: "Academy",
    icon: Activity,
    link: "#",
    dropdown: [
      { label: "Course", link: "/course" },
      { label: "Lessons", link: "/lessons" },
      { label: "Resources", link: "/resources" },
    ],
  },
  {
    label: "Logistics",
    icon: Loader,
    link: "#",
    dropdown: [
      { label: "Dashboard", link: "/logistics" },
      { label: "Fleet", link: "/fleet" },
      { label: "Tracking", link: "/tracking" },
    ],
  },
  {
    label: "Invoice",
    icon: Inbox,
    link: "#",
    dropdown: [
      { label: "List", link: "/invoices" },
      { label: "Preview", link: "/preview" },
      { label: "Edit", link: "/edit" },
    ],
  },
  {
    label: "Users",
    icon: User,
    link: "#",
    dropdown: [
      { label: "List", link: "/users" },
      { label: "View", link: "/view" },
      { label: "Edit", link: "/edit" },
    ],
  },
  {
    label: "Roles & Permissions",
    icon: Lock,
    link: "#",
    dropdown: [
      { label: "Roles", link: "/roles" },
      { label: "Permissions", link: "/permissions" },
      { label: "Users", link: "/users" },
    ],
  },
  {
    label: "Pages",
    icon: Package,
    link: "#",
    dropdown: [
      { label: "User Profile", link: "/profile" },
      { label: "Account Settings", link: "/settings" },
      { label: "FAQ", link: "/faq" },
    ],
  },
  {
    label: "Authentication",
    icon: Aperture,
    link: "#",
    dropdown: [
      { label: "Login", link: "/login" },
      { label: "Register", link: "/register" },
      { label: "Reset Password", link: "/reset" },
    ],
  },
  {
    label: "Wizard Examples",
    icon: Wind,
    link: "#",
    dropdown: [
      { label: "Checkout", link: "/wizard-checkout" },
      { label: "Property List", link: "/wizard-property" },
      { label: "Create Deal", link: "/wizard-deal" },
    ],
  },
  { label: "Modal Examples", icon: Monitor, link: "#" },
];

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeDropdowns, setActiveDropdowns] = useState(new Set());
  const navigate = useNavigate();

  const toggleDropdown = (itemPath) => {
    setActiveDropdowns((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemPath)) {
        newSet.delete(itemPath);
      } else {
        newSet.add(itemPath);
      }
      return newSet;
    });
  };

  const renderNavItem = (item, path = "") => {
    const itemPath = `${path}/${item.label}`;
    const isDropdownOpen = activeDropdowns.has(itemPath);
    const Icon = item.icon;

    return (
      <li key={itemPath} className="mb-1">
        <a
          href={item.link}
          className={`
            flex items-center w-full px-4 py-2 rounded-lg cursor-pointer
            ${isDropdownOpen ? "bg-violet-50 text-violet-600" : "text-gray-600"}
            hover:bg-violet-50 hover:text-violet-600 transition-colors
          `}
          onClick={(e) => {
            if (item.dropdown) {
              e.preventDefault();
              toggleDropdown(itemPath);
            }
          }}
        >
          <div className="flex items-center gap-3 flex-1">
            {Icon && <Icon className="w-5 h-5" strokeWidth={1.5} />}
            {isExpanded && (
              <span className="text-sm font-medium truncate">{item.label}</span>
            )}
          </div>
          {item.dropdown && isExpanded && (
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              strokeWidth={1.5}
            />
          )}
        </a>

        {item.dropdown && isDropdownOpen && isExpanded && (
          <ul className="mt-1 ml-4 space-y-1">
            {item.dropdown.map((subItem, idx) =>
              renderNavItem(subItem, itemPath)
            )}
          </ul>
        )}
      </li>
    );
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 h-screen bg-white border-r transition-all duration-300
        ${isExpanded ? "w-64" : "w-16"}
      `}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Logo */}

      <div
        className="flex items-center h-16 px-3 "
        onClick={() => navigate(`/Body`)}
      >
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 ">
            <span className="text-lg font-bold text-white">
              <img src={Logo} />
            </span>
          </div>
          <span
            className={`
            font-semibold text-xl transition-opacity duration-300
            ${isExpanded ? "opacity-100" : "opacity-0"}
          `}
          >
            Sneat
          </span>
        </div>
      </div>

      {/* Navigation Items */}
      <div className="h-[calc(100vh-4rem)] overflow-y-auto custom-scrollbar">
        <div className="">
          <ul className="space-y-1">
            {SidebarItems.map((item) => renderNavItem(item))}
          </ul>

          {isExpanded && (
            <h2 className="text-xs font-semibold text-gray-400 uppercase mt-6 mb-2 px-4">
              APPS & PAGES
            </h2>
          )}

          <ul className="space-y-1">
            {SidebarItems2.map((item) => renderNavItem(item))}
          </ul>

          {isExpanded && (
            <>
              <h2 className="text-xs font-semibold text-gray-400 uppercase mt-6 mb-2 px-4">
                COMPONENTS
              </h2>
              <h2 className="text-xs font-semibold text-gray-400 uppercase mt-6 mb-2 px-4">
                FORMS & TABLES
              </h2>
              <h2 className="text-xs font-semibold text-gray-400 uppercase mt-6 mb-2 px-4">
                CHARTS & MAPS
              </h2>
              <h2 className="text-xs font-semibold text-gray-400 uppercase mt-6 mb-2 px-4">
                MISC
              </h2>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #e5e7eb transparent;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #e5e7eb;
          border-radius: 20px;
        }
      `}</style>
    </nav>
  );
};

export default Sidebar;
