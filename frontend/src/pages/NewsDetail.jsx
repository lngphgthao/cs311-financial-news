import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("/vnexpress_kinhdoanh.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        const decodedUrl = decodeURIComponent(id);
        const item = data.find((n) => n.url === decodedUrl);
        setNews(item);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="p-8 text-center text-lg">Loading...</div>;
  if (error)
    return <div className="p-8 text-center text-red-500">Error: {error}</div>;
  if (!news) return <div className="p-8 text-center">News not found.</div>;

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-gray-200">
      {/* Headline */}
      <div className="mx-auto max-w-7xl px-4 pt-10">
        <h1 className="py-8 text-3xl font-bold text-white drop-shadow-lg md:text-5xl">
          {news.title}
        </h1>
      </div>

      {/* Main Content Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 lg:grid-cols-3">
        {/* Article Content */}
        <article className="prose prose-invert max-w-none rounded-xl bg-[#181818] p-8 text-lg leading-relaxed shadow-inner lg:col-span-2">
          {news.content}
        </article>
        {/* Sidebar with info */}
        <aside className="flex h-fit flex-col justify-between space-y-6 rounded-xl bg-[#141414] p-6">
          <div className="text-md space-y-2">
            <p>
              <span className="text-gray-400">Quay lại </span>
              <Link to="/news" className="text-yellow-400 hover:underline">
                Danh sách tin tức
              </Link>
            </p>
            <div className="mt-4 space-y-2 border-t border-gray-700 pt-4">
              <div>
                <span className="block text-gray-400">Ngày đăng</span>
                <span className="font-medium">
                  {news.date || "01/01/2026, 14:30"}
                </span>
              </div>
              <div>
                <span className="block text-gray-400">Tác giả</span>
                <span className="font-medium">{news.author || "Không rõ"}</span>
              </div>
              <div>
                <span className="block text-gray-400">Nguồn</span>
                {news.url ? (
                  <a
                    href={news.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="truncate text-blue-400 underline"
                  >
                    {news.url.slice(0, 40)}
                    {news.url.length > 40 ? "..." : ""}
                  </a>
                ) : (
                  <span className="font-medium">VNExpress Kinh Doanh</span>
                )}
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Similar News Section (placeholder) */}
    </div>
  );
};

export default NewsDetail;
