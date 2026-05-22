import { Plus, Search, MessageSquare, Folder } from "lucide-react";

export default function Sidebar() {

  const recentChats = [];

  return (
    <div className="h-screen w-full bg-gradient-to-b from-[#1f1f1f] to-[#171717] text-gray-300 flex flex-col p-3">

      {/* Logo */}
      <h1 className="text-3xl font-serif text-white mb-6">
        Claude
      </h1>

      {/* Menu */}
      <div className="space-y-2">

        <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-[#2b2b2b] transition">
          <Plus size={18} />
          <span>New chat</span>
        </button>

        <button className="flex items-center justify-between w-full px-3 py-2 rounded-lg bg-black hover:bg-[#2b2b2b] transition">

          <div className="flex items-center gap-3">
            <Search size={18} />
            <span>Search</span>
          </div>

          <span className="text-sm text-gray-500">
            Ctrl+K
          </span>

        </button>

        <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-[#2b2b2b] transition">
          <MessageSquare size={18} />
          <span>Chats</span>
        </button>

        <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-[#2b2b2b] transition">
          <Folder size={18} />
          <span>Projects</span>
        </button>

      </div>

      {/* Dynamic Recents */}
      <div className="mt-8 flex-1 overflow-y-auto">

        <h2 className="text-sm text-gray-500 mb-3">
          Recents
        </h2>

        <div className="space-y-1">

          {recentChats.map((chat) => (
            <button
              key={chat.id}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#2b2b2b] truncate transition"
            >
              {chat.title}
            </button>
          ))}

        </div>

      </div>

    </div>
  );
}

