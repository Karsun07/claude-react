import { useState, useEffect } from "react";

import { useOutletContext } from "react-router";

import {
  Plus,
  Mic,
  AudioLines,
  Code2,
  GraduationCap,
  PenLine,
  Coffee,
  ChartNoAxesCombined
} from "lucide-react";

export default function NewChat() {

  // Shared State
  const {
    chatNames,
    setChatNames
  } = useOutletContext();

  // Input State
  const [input, setInput] = useState("");

  // Track Current Chat
  const [chatStarted, setChatStarted] = useState(false);

  // Reset when opening new chat
  useEffect(() => {
    setChatStarted(false);
  }, []);

  // Dynamic Greeting
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Morning"
      : hour < 18
      ? "Afternoon"
      : "Evening";

  const username = "kartik";

  // Suggestion Buttons
  const suggestions = [
    {
      icon: <Code2 size={15} />,
      text: "Code"
    },
    {
      icon: <GraduationCap size={15} />,
      text: "Learn"
    },
    {
      icon: <ChartNoAxesCombined size={15} />,
      text: "Strategize"
    },
    {
      icon: <PenLine size={15} />,
      text: "Write"
    },
    {
      icon: <Coffee size={15} />,
      text: "Life stuff"
    }
  ];

  // Handle Enter
  const handleKeyDown = (e) => {

    if (e.key === "Enter" && input.trim()) {

      // Only first message creates chat title
      if (!chatStarted) {

        const newChat = {
          id: Date.now(),
          title: input
        };

        setChatNames([
          newChat,
          ...chatNames
        ]);

        setChatStarted(true);
      }

      // Future messages logic goes here

      setInput("");
    }
  };

  return (
    <div className="h-screen bg-[#212121] flex flex-col items-center justify-center px-4">

      {/* Heading */}
      <h1 className="flex items-center gap-3 text-[#d7d2cb] text-4xl md:text-6xl font-serif font-medium mb-8">

        <span className="text-[#d97757] text-3xl md:text-4xl">
          ✳
        </span>

        {greeting},{username}

      </h1>

      {/* Input Container */}
      <div className="w-full max-w-4xl bg-[#2b2b2b] border border-[#3a3a3a] rounded-[28px] px-6 py-5">

        {/* Input */}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="How can I help you today?"
          className="w-full bg-transparent outline-none text-[#d6d3cd] placeholder:text-[#8a8884] text-lg"
        />

        {/* Bottom */}
        <div className="flex items-center justify-between mt-16">

          {/* Left */}
          <button className="text-[#a1a1a1] hover:text-white transition">
            <Plus size={22} />
          </button>

          {/* Right */}
          <div className="flex items-center gap-4 text-[#c7c3bc]">

            <button className="flex items-center gap-1 text-sm hover:text-white transition">

              <span>
                Sonnet 4.5
              </span>

            </button>

            <button className="hover:text-white transition">
              <Mic size={18} />
            </button>

            <button className="hover:text-white transition">
              <AudioLines size={18} />
            </button>

          </div>

        </div>

      </div>

      {/* Suggestion Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 mt-5">

        {suggestions.map((item, index) => (

          <button
            key={index}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#3a3a3a] bg-[#242424] text-[#d0ccc5] hover:bg-[#2e2e2e] transition"
          >

            {item.icon}

            <span className="text-sm">
              {item.text}
            </span>

          </button>

        ))}

      </div>

    </div>
  );
}