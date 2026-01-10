import React from "react";
import {
  PiHeartLight,
  PiChatCircleThin,
  PiPaperPlaneTiltThin,
} from "react-icons/pi";

const InteractiveButton = ({ type, value }) => {
  return (
    <button
      key={type}
      className="flex h-fit flex-row items-center rounded-4xl border border-neutral-600/60 bg-neutral-800 px-3 py-1.5 text-sm text-neutral-400"
    >
      {type === "like" && <PiHeartLight className="mr-1 inline text-sm" />}
      {type === "comment" && (
        <PiChatCircleThin className="mr-1 inline stroke-5 text-sm" />
      )}
      {type === "share" && (
        <PiPaperPlaneTiltThin className="mr-1 inline stroke-5 text-sm" />
      )}
      <p>{value > 1000 ? `${(value / 1000).toFixed(1)}k` : value}</p>
    </button>
  );
};

export default InteractiveButton;
