import { useState } from "react";

import { useOutletContext } from "react-router";

import {Search,MessageCircle} from "lucide-react";

import { Link } from "react-router";

export default function Chats() {

  // Shared Chats
  const { chatNames } = useOutletContext();

  const [query, setQuery] = useState("");

  // Filter Chats
  const filteredChats = chatNames.filter((chat) =>
    chat.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="h-screen bg-[#212121] text-[#d4d0c8] overflow-y-auto px-6 md:px-10 py-8">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">

        <h1 className="text-4xl font-serif text-[#d7d2cb]">
          Chats
        </h1>

        <div className="flex items-center gap-3">

          <button className="bg-[#343434] hover:bg-[#404040] transition px-5 py-3 rounded-xl text-sm font-medium">
            Select chats
          </button>

          <Link
            to="/new-chat"
            className="bg-white text-black hover:bg-gray-200 transition px-5 py-3 rounded-xl text-sm font-medium"
          >
            New chat
          </Link>

        </div>

      </div>

      {/* Search */}
      <div className="flex items-center gap-3 bg-[#2b2b2b] border border-[#3a3a3a] rounded-2xl px-4 py-4 mb-8">

        <Search
          size={20}
          className="text-[#8a8884]"
        />

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search chats..."
          className="w-full bg-transparent outline-none text-[#d6d3cd] placeholder:text-[#8a8884] text-lg"
        />

      </div>

      {/* Chats */}
      <div>

        {filteredChats.map((chat) => (

          <div
            key={chat.id}
            className="flex items-center justify-between py-8 border-b border-[#2f2f2f] hover:bg-[#242424] transition px-3 rounded-xl cursor-pointer"
          >

            {/* Left */}
            <div className="flex items-center gap-4 min-w-0">

              <MessageCircle
                size={18}
                className="text-[#c8c3bc] shrink-0"
              />

              <p className="truncate text-xl text-[#e1ddd6]">
                {chat.title}
              </p>

            </div>

            {/* Right */}
            <div className="flex items-center gap-3 shrink-0 ml-5">

              <span className="text-[#8d8b86] text-lg">
                {chat.time}
              </span>

              {chat.shared && (
                <span className="bg-[#343434] text-[#d4d0c8] text-sm px-3 py-1 rounded-lg">
                  Shared
                </span>
              )}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}