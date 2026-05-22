import { useState } from "react";

import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

export default function Home() {

  // Recent Chats
  const [chatNames, setChatNames] = useState([]);

  // Track Current Chat
  const [chatStarted, setChatStarted] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <div className="hidden md:flex w-64 bg-[#1e1f23] border-r border-gray-700">

        <Sidebar chatNames={chatNames} setChatStarted={setChatStarted}/>

      </div>

      {/* Main */}
      <div className="flex-1 bg-[#212121] overflow-y-auto">

        <MainContent
          chatNames={chatNames}
          setChatNames={setChatNames}
          chatStarted={chatStarted}
          setChatStarted={setChatStarted}
        />

      </div>

    </div>
  );
}