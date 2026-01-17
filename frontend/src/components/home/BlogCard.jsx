import React from "react";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";

const BlogCard = ({ post }) => {
  return (
    // Author Info
    <div className="flex flex-col gap-4 border-y border-neutral-800 px-4 py-8 sm:px-10 md:flex-row md:px-18 md:py-12">
      <div className="flex-1 pr-3 pb-3">
        <div className="flex flex-row gap-4">
          {/* <img className="size-15 rounded-full border-0" src={"#"} alt={"#"} /> */}
          <div className="flex flex-col justify-center gap-3 text-sm">
            <p className="text-neutral-400">Tác giả:</p>
            <h4 className="font-semibold">{post.author}</h4>
          </div>
        </div>
      </div>

      {/* Blog Info */}
      <div className="flex flex-3 flex-row items-center justify-between">
        <div className="flex-3 pr-20 pb-7">
          <p className="mb-6 text-sm font-semibold text-neutral-400">
            {post.date}
          </p>
          <h3 className="mb-3 text-lg font-semibold">{post.title}</h3>
          <p className="text-sm text-neutral-400">
            {post.content.slice(0, 250) + "..."}
          </p>
        </div>

        {/* View Blog Button */}
        <Link
          to={`/news/${encodeURIComponent(post.url)}`}
          className="cursor-pointer rounded-lg border border-neutral-600/60 px-4 py-3 text-neutral-400 hover:bg-neutral-700 hover:text-white"
        >
          Đọc thêm
          <BsArrowUpRight className="ml-2 inline text-lg text-amber-300" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
