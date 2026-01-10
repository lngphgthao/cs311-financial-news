import React from "react";

const HeroSection = () => {
  return (
    <section className="relative">
      <img
        src="/hero.jpg"
        alt="AI Healthcare"
        className="h-[420px] w-full object-cover"
      />
      <div className="absolute inset-0 flex items-end bg-black/60">
        <div className="mx-auto max-w-7xl px-4 pb-12 text-white">
          <h1 className="max-w-3xl text-3xl font-bold md:text-5xl">
            The Rise of Artificial Intelligence in Healthcare
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
