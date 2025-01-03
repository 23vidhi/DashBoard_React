import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import Sidebar from "./Components/Sidebar";
import RightContent from "./Components/RightContent";
import AppRoutes from "./Router/AppRoutes";

function App() {
  return <AppRoutes />;
}

export default App;
