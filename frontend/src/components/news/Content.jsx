import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Content = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/vnexpress_kinhdoanh.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
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
    <section className="bg-[#0d0d0d] py-12 text-gray-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 lg:grid-cols-3">
        {/* Main news articles */}
        <article className="space-y-8 lg:col-span-2">
          {loading && <p>Đang tải...</p>}
          {error && <p style={{ color: "red" }}>Lỗi: {error}</p>}
          {!loading && !error && news.length === 0 && (
            <p>Không có tin tức nào.</p>
          )}
          {!loading &&
            !error &&
            news.map((item) => (
              <div key={item.url} className="mb-8 rounded bg-[#181818] p-4">
                <Link
                  to={`/news/${encodeURIComponent(item.url)}`}
                  className="block hover:underline"
                >
                  <h2 className="mb-2 text-xl font-semibold text-white">
                    {item.title}
                  </h2>
                </Link>
                <p className="mb-1 text-sm text-gray-400">
                  {item.date} {item.author && `| ${item.author}`}
                </p>
                <p className="mb-2 leading-relaxed">{item.content}</p>
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                  >
                    Xem nguồn
                  </a>
                )}
                <div className="mt-2">
                  <Link
                    to={`/news/${encodeURIComponent(item.url)}`}
                    className="text-green-400 underline"
                  >
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            ))}
        </article>
        {/* Sidebar (optional, can be customized or removed) */}
        <aside className="space-y-6 rounded-xl bg-[#141414] p-6">
          <div className="space-y-2 text-sm">
            <p>
              <span className="text-gray-400">Nguồn:</span>{" "}
              vnexpress_kinhdoanh.json
            </p>
            <p>
              <span className="text-gray-400">Tổng số tin:</span> {news.length}
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Content;
