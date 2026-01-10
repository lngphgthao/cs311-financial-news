import React from "react";
import HeroSection from "../components/news/HeroSection.jsx";
import Content from "../components/news/Content.jsx";
import SimilarNews from "../components/news/SimilarNews.jsx";

const NewsPage = () => {
  return (
    <>
      <HeroSection />
      <Content />
      <SimilarNews />
    </>
  );
};

export default NewsPage;
