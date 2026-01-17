import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const SectionHeader = ({ subtitle, title, buttonText, buttonLink = "#" }) => {
  return (
    <div className="flex flex-col items-start justify-between gap-4 border border-neutral-700 bg-neutral-800 px-4 py-16 sm:flex-row sm:items-center sm:px-14">
      <div>
        {/* if truthy -> render right side, else left side */}
        {subtitle && (
          <h4 className="mb-2 max-w-fit rounded-sm border-0 bg-neutral-700 px-2 py-1 text-neutral-100">
            {subtitle}
          </h4>
        )}
        <h2 className="text-3xl font-medium sm:text-4xl">{title}</h2>
      </div>

      {buttonText && (
        <button
          onClick={() => (window.location.href = buttonLink)}
          className="cursor-pointer rounded-lg border border-neutral-700/50 bg-neutral-900/80 px-4 py-3 text-neutral-400 hover:bg-neutral-700 hover:text-white"
        >
          {buttonText}
          <BsArrowUpRight className="ml-2 inline text-lg text-amber-300" />
        </button>
      )}
    </div>
  );
};

export default SectionHeader;
