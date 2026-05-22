import { useState } from "react";

import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

export default function Home() {

  // All Chats
  const [chatNames, setChatNames] = useState([]);

  // Current Chat Id
  const [currentChatId, setCurrentChatId] = useState(null);

  // Reset Trigger
  const [resetChat, setResetChat] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <div className="hidden md:flex w-64 bg-[#1e1f23] border-r border-gray-700">

        <Sidebar chatNames={chatNames} setResetChat={setResetChat} setCurrentChatId={setCurrentChatId}/>

      </div>

      {/* Main */}
      <div className="flex-1 bg-[#212121] overflow-y-auto">

        <MainContent
          context={{chatNames,setChatNames,currentChatId,setCurrentChatId,resetChat}}
        />

      </div>

    </div>
  );
}