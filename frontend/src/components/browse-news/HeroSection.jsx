import React from "react";

const HeroSection = ({ title, subtitle }) => {
  return (
    <section className="flex flex-col items-center gap-4 border-b border-neutral-700/50 px-4 py-8 sm:px-10 md:grid md:grid-cols-2 md:gap-0 md:px-18 md:py-8 lg:py-12">
      <h1 className="text-3xl leading-normal font-semibold text-amber-300 md:text-5xl">
        {title}
      </h1>
      <p className="text-md md:p-12">{subtitle}</p>
    </section>
  );
};

export default HeroSection;
