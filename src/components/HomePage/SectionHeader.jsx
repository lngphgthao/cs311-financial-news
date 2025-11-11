import React from "react";

const SectionHeader = ({ subtitle, title, buttonText, buttonLink = "#" }) => {
  return (
    <div className="flex items-center justify-between border border-neutral-700 bg-neutral-800 px-18 py-18">
      <div>
        {/* if truthy -> render right side, else left side */}
        {subtitle && (
          <h4 className="mb-2 max-w-fit rounded-sm border-0 bg-neutral-700 px-2 py-1 text-neutral-100">
            {subtitle}
          </h4>
        )}
        <h2 className="text-4xl font-medium">{title}</h2>
      </div>

      {buttonText && (
        <button
          onClick={() => (window.location.href = buttonLink)}
          className="rounded-lg border border-neutral-600 px-4 py-3 text-neutral-400"
        >
          {buttonText} →
        </button>
      )}
    </div>
  );
};

export default SectionHeader;
