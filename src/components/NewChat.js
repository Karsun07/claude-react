import { useState } from "react";

import { useOutletContext } from "react-router";

import {Plus,Mic,AudioLines,Code2,GraduationCap,PenLine,Coffee,ChartNoAxesCombined} from "lucide-react";

export default function NewChat() {

  // Shared State
  const {chatNames,setChatNames,chatStarted,setChatStarted} = useOutletContext();

  // Input State
  const [input, setInput] = useState("");

  // Messages State
  const [messages, setMessages] = useState([]);

  // Dynamic Greeting
  const hour = new Date().getHours();

  const greeting =hour < 12? "Good morning": hour < 18? "Good afternoon": "Good evening";

  const username = "kartik";

  // Suggestions
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

      // Create Recent Chat ONLY once
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

      // User Message
      const userMessage = {
        id: Date.now(),
        text: input,
        sender: "user"
      };

      // Bot Message
      const botMessage = {
        id: Date.now() + 1,
        text: "Will let you know",
        sender: "bot"
      };

      // Update Messages
      setMessages((prev) => [
        ...prev,
        userMessage,
        botMessage
      ]);

      // Clear Input
      setInput("");
    }
  };

  return (
    <div className="h-screen bg-[#212121] flex flex-col">

      {/* EMPTY SCREEN */}
      {messages.length === 0 ? (

        <div className="flex-1 flex flex-col items-center justify-center px-4">

          {/* Heading */}
          <h1 className="flex items-center gap-3 text-[#d7d2cb] text-4xl md:text-6xl font-serif font-medium mb-8">

            <span className="text-[#d97757] text-3xl md:text-4xl">
              ✳
            </span>

            {greeting},{username}

          </h1>

          {/* Input Box */}
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
            <div className="flex items-center justify-between mt-10">

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

          {/* Suggestions */}
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

      ) : (

        /* CHAT SCREEN */
        <>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-10">

            <div className="w-full max-w-4xl mx-auto space-y-6">

              {messages.map((message) => (

                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >

                  <div
                    className={`
                      max-w-[75%]
                      px-5
                      py-4
                      rounded-3xl
                      text-[#e0ddd7]

                      ${
                        message.sender === "user"
                          ? "bg-[#3a3a3a]"
                          : "bg-[#2a2a2a] border border-[#3a3a3a]"
                      }
                    `}
                  >

                    {message.text}

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Bottom Input */}
          <div className="px-4 pb-6">

            <div className="w-full max-w-4xl mx-auto bg-[#2b2b2b] border border-[#3a3a3a] rounded-[28px] px-6 py-5">

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
              <div className="flex items-center justify-between mt-10">

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

          </div>

        </>

      )}

    </div>
  );
}