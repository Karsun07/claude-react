import { useState } from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

export default function Home() {

  // Dynamic Chats State
  const [chatNames, setChatNames] = useState([]);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <div className="hidden md:flex w-64 bg-[#1e1f23] border-r border-gray-700">

        <Sidebar
          chatNames={chatNames}
        />

      </div>

      {/* Main */}
      <div className="flex-1 bg-[#212121] overflow-y-auto">

        <MainContent
          chatNames={chatNames}
          setChatNames={setChatNames}
        />

      </div>

    </div>
  );
}