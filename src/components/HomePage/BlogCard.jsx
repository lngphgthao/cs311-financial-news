import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import {
  PiHeartLight,
  PiChatCircleThin,
  PiPaperPlaneTiltThin,
} from "react-icons/pi";

const BlogCard = ({ post }) => {
  return (
    // Author Info
    <div className="flex flex-row gap-4 border-y border-neutral-800 px-18 py-12">
      <div className="flex-1 pr-3 pb-3">
        <div className="flex flex-row gap-4">
          <img
            className="size-15 rounded-full border-0"
            src={post.author.avatar}
            alt={post.author.name}
          />
          <div className="flex flex-col justify-center text-sm">
            <h4 className="font-semibold">{post.author.name}</h4>
            <h5 className="text-neutral-400">{post.author.category}</h5>
          </div>
        </div>
      </div>

      {/* Blog Info */}
      <div className="flex flex-3 flex-row items-center justify-between">
        <div>
          <div className="pb-7">
            <p className="mb-6 text-sm font-semibold text-neutral-400">
              {post.date}
            </p>
            <h3 className="mb-3 text-lg font-semibold">{post.title}</h3>
            <p className="text-sm text-neutral-400">{post.description}</p>
          </div>
          <div className="flex flex-row gap-2 text-sm text-neutral-400">
            {Object.entries(post.numbers).map(([key, value]) => (
              <button
                key={key}
                className="flex flex-row items-center rounded-4xl border border-neutral-600/60 bg-neutral-800 px-3 py-2 text-sm text-neutral-400"
              >
                {key === "like" && (
                  <PiHeartLight className="mr-1 inline text-lg" />
                )}
                {key === "comment" && (
                  <PiChatCircleThin className="mr-1 inline stroke-3 text-lg" />
                )}
                {key === "share" && (
                  <PiPaperPlaneTiltThin className="mr-1 inline stroke-3 text-lg" />
                )}
                <p>{value > 1000 ? `${(value / 1000).toFixed(1)}k` : value}</p>
              </button>
            ))}
          </div>
        </div>

        {/* View Blog Button */}
        <button className="rounded-lg border border-neutral-600/60 px-4 py-3 text-neutral-400">
          View Blog
          <BsArrowUpRight className="ml-2 inline text-lg text-amber-300" />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
