import React from "react";
import { Link } from "react-router-dom";
import InteractiveButton from "../common/InteractiveButton";
import { BsArrowUpRight } from "react-icons/bs";

const RecommendationSection = ({ news }) => {
  const additional = news.slice(1, 4);

  return (
    <section>
      <div className="flex flex-row items-center gap-12 border-b border-neutral-700 px-18 py-12">
        <img
          className="aspect-5/4 h-72 rounded-md object-cover"
          src="src/assets/images/dog.jpg"
          alt="Recommendation Banner"
        />

        <div className="flex flex-col justify-between gap-10">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold"> {news[0].title}</h3>
            <p className="text-neutral-400"> {news[0].subtitle}</p>
          </div>
          <div className="flex flex-row gap-10 text-neutral-400">
            <div>
              <p>Category</p>
              <p className="mt-1 text-white"> {news[0].category}</p>
            </div>
            <div>
              <p>Publication date</p>
              <p className="mt-1 text-white"> {news[0].date}</p>
            </div>
            <div>
              <p>Author</p>
              <p className="mt-1 text-white"> {news[0].author}</p>
            </div>
          </div>
          <div className="flex flex-row justify-between gap-10 text-neutral-400">
            <div className="flex flex-row gap-2 text-sm">
              {Object.entries(news[0].numbers).map(([key, value]) => (
                <InteractiveButton type={key} value={value} />
              ))}
            </div>
            <button className="cursor-pointer rounded-sm border border-neutral-700 px-4 py-3 hover:bg-neutral-700 hover:text-white">
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Grid of 3 */}
      <div className="grid grid-cols-3 gap-8 px-18 py-12">
        {additional.map((item) => (
          // item card
          <Link
            to={`/news/${item.id}`}
            key={item.id}
            className="flex flex-col justify-between"
          >
            <div className="flex flex-col gap-2">
              <img
                className=""
                src="src/assets/images/dog.jpg"
                alt="Additional Recommendation"
              />
              <h4 className="">{item.title} </h4>
              <p>{item.category}</p>
            </div>

            <div className="flex flex-row items-center justify-between text-neutral-400">
              <div className="flex flex-row gap-2 text-sm">
                <InteractiveButton type="like" value={item.numbers.like} />
                <InteractiveButton type="share" value={item.numbers.share} />
              </div>
              <button className="cursor-pointer justify-end rounded-sm border border-neutral-700 px-12 py-2 hover:bg-neutral-700 hover:text-white">
                Read More
                <BsArrowUpRight className="ml-2 inline text-lg text-amber-300" />
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecommendationSection;
