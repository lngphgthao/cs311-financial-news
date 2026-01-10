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

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botMsg = {
        role: "assistant",
        content: data.response,
        references: data.references || [],
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error("Error:", error);
      const errorMsg = {
        role: "assistant",
        content: "Error connecting to backend. Make sure the server is running.",
      };
      setMessages((prev) => [...prev, errorMsg]);
    }
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
              <ChatMessage 
                key={idx} 
                role={msg.role} 
                content={msg.content}
                references={msg.references}
              />
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
