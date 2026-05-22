import React from "react";
import ReactDOM from "react-dom/client";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
function App() {
  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <div className="hidden md:flex w-64 bg-[#1e1f23] border-r border-gray-700">
        <Sidebar />
      </div>

      {/* Main */}
      <div className="flex-1 bg-[#2b2d31] overflow-y-auto">
        <MainContent />
      </div>

    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
