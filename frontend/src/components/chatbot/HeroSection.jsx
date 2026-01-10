import React from "react";

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="flex h-[260px] w-full items-center bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="mx-auto max-w-7xl px-4 text-white">
          <h1 className="text-3xl font-bold md:text-5xl">
            FutureTech AI Assistant
          </h1>
          <p className="mt-3 max-w-2xl text-gray-400">
            Ask questions, explore technology trends, and get instant insights
            powered by AI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
