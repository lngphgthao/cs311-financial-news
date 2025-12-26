import React from "react";

const ChatMessage = ({ role, content }) => {
  return (
    <div
      className={`flex ${role === "user" ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[75%] rounded-xl px-4 py-3 text-sm leading-relaxed ${
          role === "user"
            ? "rounded-br-none bg-yellow-400 text-black"
            : "rounded-bl-none bg-[#1a1a1a] text-gray-200"
        }`}
      >
        {content}
      </div>
    </div>
  );
};

export default ChatMessage;
