import React from "react";
import HeroSection from "../components/browse-news/HeroSection";
import RecommendationSection from "../components/browse-news/RecommendationSection";
import BlogSection from "../components/home/BlogSection";
import { useEffect, useState } from "react";

const BrowseNewsPage = () => {
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
    <>
      <HeroSection
        title="Tiêu điểm hôm nay"
        subtitle="Khám phá những tin tức mới nhất từ khắp nơi trên thế giới. Chúng tôi mang đến cho bạn những cập nhật từng phút về các sự kiện, xu hướng và câu chuyện quan trọng nhất. Khám phá thế giới qua góc nhìn của chúng tôi."
      />
      <RecommendationSection news={newsList} />
      <BlogSection />
    </>
  );
};

export default BrowseNewsPage;
