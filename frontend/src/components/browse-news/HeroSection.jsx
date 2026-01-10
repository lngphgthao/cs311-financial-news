import React from "react";

const HeroSection = ({ title, subtitle }) => {
  return (
    <section className="grid grid-cols-2 border-b border-neutral-700/50 px-18 py-28">
      <h1 className="text-5xl leading-normal font-semibold">{title}</h1>
      <p className="p-12 text-sm">{subtitle}</p>
    </section>
  );
};

export default HeroSection;
