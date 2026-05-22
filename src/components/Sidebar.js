import {Plus,Search,MessageSquare,Folder} from "lucide-react";

import { Link } from "react-router";

export default function Sidebar() {

  const recentChats = [
    {
      id: 1,
      title: "How to deploy on AWS?"
    },
    {
      id: 2,
      title: "React component design"
    }
  ];

  return (
    <div className="h-screen w-full bg-gradient-to-b from-[#1f1f1f] to-[#171717] text-gray-300 flex flex-col p-3">

      {/* Logo */}
      <h1 className="text-3xl font-serif text-white mb-6">
        Claude
      </h1>

      {/* Top Menu */}
      <div className="space-y-2">

        <Link
          to="/new-chat"
          className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-[#2b2b2b] transition"
        >
          <Plus size={18} />
          <span>New chat</span>
        </Link>

        <Link
          to="/search"
          className="flex items-center justify-between w-full px-3 py-2 rounded-lg bg-black hover:bg-[#2b2b2b] transition"
        >

          <div className="flex items-center gap-3">
            <Search size={18} />
            <span>Search</span>
          </div>

          <span className="text-sm text-gray-500">
            Ctrl+K
          </span>

        </Link>

        <Link
          to="/recents"
          className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-[#2b2b2b] transition"
        >
          <MessageSquare size={18} />
          <span>Chats</span>
        </Link>

        <Link
          to="/projects"
          className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-[#2b2b2b] transition"
        >
          <Folder size={18} />
          <span>Projects</span>
        </Link>

      </div>

      {/* Recents */}
      <div className="mt-8 flex-1 overflow-y-auto">

        <h2 className="text-sm text-gray-500 mb-3">
          Recents
        </h2>

        <div className="space-y-1">

          {recentChats.map((chat) => (
            <Link
              key={chat.id}
              to={`/chat/${chat.id}`}
              className="block w-full text-left px-3 py-2 rounded-lg hover:bg-[#2b2b2b] truncate transition"
            >
              {chat.title}
            </Link>
          ))}

        </div>

      </div>

    </div>
  );
}

