import React from "react";
import { Link } from "react-router-dom";
import InteractiveButton from "../common/InteractiveButton";
import { BsArrowUpRight } from "react-icons/bs";

const RecommendationSection = ({ news }) => {
  if (!Array.isArray(news) || news.length === 0) {
    return null;
  }
  const additional = news.slice(1, 16);

  return (
    <section>
      <div className="flex flex-row items-center gap-12 border-b border-neutral-700 px-18 py-12">
        <img
          className="aspect-3/2 h-84 rounded-md object-cover"
          src="src/assets/images/image-1.jpg"
          alt="Recommendation Banner"
        />

        <div className="flex w-full flex-col justify-between gap-8">
          <h3 className="text-2xl font-semibold"> {news[0]?.title || ""}</h3>
          <div className="flex flex-row gap-10 text-neutral-400">
            <div>
              <p>Ngày đăng</p>
              <p className="mt-1 text-white"> {news[0]?.date || ""}</p>
            </div>
            <div>
              <p>Tác giả</p>
              <p className="mt-1 text-white"> {news[0]?.author || ""}</p>
            </div>
          </div>
          <p className="text-sm text-neutral-400">
            {news[0]?.content.slice(0, 300) + "..."}
          </p>
          <button className="max-w-fit cursor-pointer rounded-sm border border-neutral-700 px-4 py-3 hover:bg-neutral-700 hover:text-white">
            Xem thêm
          </button>
        </div>
      </div>

      {/* Grid of 3 */}
      <div className="grid grid-cols-1 gap-10 px-4 py-8 sm:grid-cols-2 sm:px-10 sm:py-12 md:grid-cols-3 md:px-18">
        {additional.map((item) =>
          item && item.url ? (
            <Link
              to={`/news/${encodeURIComponent(item.url)}`}
              key={item.url}
              className="flex flex-col justify-between"
            >
              <div className="flex flex-col gap-2">
                <img
                  className="aspect-auto h-72 rounded-md object-cover"
                  src={`src/assets/images/image-${additional.indexOf(item) + 2}.jpg`}
                  alt="Additional Recommendation"
                />
                <h4 className="mt-1 text-lg font-semibold">
                  {item.title || ""}{" "}
                </h4>
                <p>{item.category || ""}</p>
              </div>

              <div className="flex flex-row items-center justify-between text-sm text-white">
                <p className="flex flex-row gap-2">
                  Tác giả: {item.author || "Unknown"}
                </p>
                <button className="cursor-pointer justify-end rounded-lg px-4 py-3 text-neutral-400 hover:bg-neutral-700 hover:text-white">
                  Xem thêm →
                </button>
              </div>
            </Link>
          ) : null,
        )}
      </div>
    </section>
  );
};

export default RecommendationSection;
