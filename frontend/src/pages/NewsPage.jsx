import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/vnexpress_kinhdoanh.json")
      .then((res) => {
        if (!res.ok) throw new Error("Không thể tải dữ liệu");
        return res.json();
      })
      .then((data) => {
        setNews(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0d0d] px-2 py-8 text-gray-200 sm:px-4">
      <h1 className="mb-6 text-3xl font-bold text-white">Tin tức tài chính</h1>
      {loading && <p>Đang tải dữ liệu...</p>}
      {error && <p style={{ color: "red" }}>Lỗi: {error}</p>}
      {!loading && !error && news.length === 0 && <p>Không có tin tức nào.</p>}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {!loading &&
          !error &&
          news.map((item) => (
            <div
              key={item.url}
              className="flex flex-col justify-between rounded bg-[#181818] p-4 shadow transition-shadow hover:shadow-lg"
            >
              <Link
                to={`/news/${encodeURIComponent(item.url)}`}
                className="block hover:underline"
              >
                <h2 className="mb-2 text-xl font-semibold text-white">
                  {item.title}
                </h2>
              </Link>
              <p className="mb-1 line-clamp-2 text-sm text-gray-400">
                {item.content}
              </p>
              <div className="mt-2 flex flex-wrap gap-2 text-xs text-gray-400">
                {item.date && <span>🗓 {item.date}</span>}
                {item.author && <span>✍️ {item.author}</span>}
              </div>
              <Link
                to={`/news/${encodeURIComponent(item.url)}`}
                className="mt-3 self-start text-green-400 underline"
              >
                Xem chi tiết
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewsPage;
// import React from "react";
// import HeroSection from "../components/news/HeroSection.jsx";
// import Content from "../components/news/Content.jsx";
// import SimilarNews from "../components/news/SimilarNews.jsx";

// const NewsPage = () => {
//   return (
//     <>
//       <HeroSection />
//       <Content />
//       <SimilarNews />
//     </>
//   );
// };

// export default NewsPage;
