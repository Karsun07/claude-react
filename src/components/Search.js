import { useState } from "react";

import { useOutletContext } from "react-router";

import {Search as SearchIcon,MessageCircle} from "lucide-react";

export default function Search() {

  // Shared Chats
  const { chatNames } = useOutletContext();

  const [query, setQuery] = useState("");

  // Filter Chats
  const filteredChats = chatNames.filter((chat) =>
    chat.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="h-screen bg-[#212121] text-[#d4d0c8] overflow-y-auto">

      {/* Header */}
      <div className="sticky top-0 bg-[#212121] z-10 border-b border-[#343434] px-5 py-4">

        <div className="flex items-center gap-3">

          <SearchIcon
            size={22}
            className="text-[#8b8b8b]"
          />

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search chats and projects"
            className="w-full bg-transparent outline-none text-lg placeholder:text-[#8b8b8b]"
          />

        </div>

      </div>

      {/* Results */}
      <div className="px-3 py-4">

        {query && (
          <p className="text-[#8b8b8b] text-sm mb-4 px-2">
            Search results
          </p>
        )}

        <div className="space-y-1">

          {filteredChats.map((chat) => (

            <button
              key={chat.id}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl transition bg-[#111111] hover:bg-black"
            >

              {/* Left */}
              <div className="flex items-center gap-3 min-w-0">

                <MessageCircle
                  size={16}
                  className="text-[#c8c3bc] shrink-0"
                />

                <p className="truncate text-left text-[17px]">
                  {chat.title}
                </p>

              </div>

              {/* Right */}
              <span className="text-[#8d8b86] text-sm shrink-0 ml-4">
                {chat.time}
              </span>

            </button>

          ))}

        </div>

      </div>

    </div>
  );
}