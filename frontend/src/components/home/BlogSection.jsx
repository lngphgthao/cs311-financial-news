import React from "react";
import { useEffect, useState } from "react";
import SectionHeader from "../common/SectionHeader";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetch("/vnexpress_kinhdoanh.json")
      .then((res) => {
        if (!res.ok) throw new Error("Không thể tải dữ liệu");
        return res.json();
      })
      .then((data) => setNewsList(data))
      .catch(() => setNewsList([]));
  }, []);

  return (
    /* Section Header */
    <section>
      <SectionHeader
        subtitle="Kho tri thức chuyên sâu"
        title="Khám phá các tin tức mới nhất"
        buttonText="Xem tin tức"
        buttonLink="/news"
      />

      {/* Blog Cards */}
      <div className="flex flex-col">
        {newsList.slice(17, 20).map((post) => (
          <BlogCard key={post.url} post={post} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
