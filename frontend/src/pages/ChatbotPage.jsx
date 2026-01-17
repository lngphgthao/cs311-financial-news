import React from "react";
import HeroSection from "../components/chatbot/HeroSection.jsx";
import ChatbotSection from "../components/chatbot/ChatbotSection.jsx";

const ChatbotPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white dark:bg-gray-900">
      <HeroSection />
      <ChatbotSection />
    </div>
  );
};

export default ChatbotPage;
