import React from "react";
import { useState } from "react";
import ChatMessage from "./ChatMessage.jsx";

const ChatbotSection = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I am the FutureTech AI Assistant. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    const botMsg = {
      role: "assistant",
      content:
        "This is a demo response. Connect me to your AI backend to get real answers.",
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <section className="bg-[#0d0d0d] py-12">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex h-[70vh] flex-col rounded-2xl bg-[#141414]">
          {/* Chat header */}
          <div className="border-b border-gray-800 px-6 py-4">
            <h2 className="font-semibold text-white">AI Chatbot</h2>
            <p className="text-xs text-gray-400">Powered by FutureTech</p>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto p-6">
            {messages.map((msg, idx) => (
              <ChatMessage key={idx} role={msg.role} content={msg.content} />
            ))}
          </div>

          {/* Input */}
          <div className="flex gap-3 border-t border-gray-800 p-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 rounded-lg border border-gray-700 bg-black px-4 py-2 text-sm text-white focus:border-yellow-400 focus:outline-none"
            />
            <button
              onClick={sendMessage}
              className="rounded-lg bg-yellow-400 px-5 py-2 text-sm font-semibold text-black hover:bg-yellow-300"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;
