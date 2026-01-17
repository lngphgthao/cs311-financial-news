import React from "react";

const ChatMessage = ({ role, content, references = [] }) => {
  return (
    <div
      className={`flex ${role === "user" ? "justify-end" : "justify-start"}`}
    >
      <div className="w-full max-w-2xl px-4">
        <div
          className={`max-w-[75%] rounded-xl px-4 py-3 text-sm leading-relaxed ${
            role === "user"
              ? "ml-auto rounded-br-none bg-yellow-400 text-black"
              : "rounded-bl-none bg-[#1a1a1a] text-gray-200"
          }`}
        >
          {content}
        </div>
        {role === "assistant" && references.length > 0 && (
          <div className="mt-3 space-y-2">
            {references.map((ref, idx) => (
              <a
                key={idx}
                href={ref}
                target="_blank"
                rel="noopener noreferrer"
                className="block max-w-[75%] rounded-lg border border-gray-700 bg-[#1a1a1a] p-3 text-xs text-gray-300 transition hover:border-yellow-400 hover:bg-[#252525]"
              >
                <p className="truncate font-semibold text-gray-200">
                  📄 Reference {idx + 1}
                </p>
                <p className="mt-1 wrap-break-word text-gray-400">{ref}</p>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
