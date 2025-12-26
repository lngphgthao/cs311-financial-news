import React from "react";
import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import BlogSection from "../components/home/BlogSection";
import RatingSection from "../components/home/RatingSection";
import CTASection from "../components/common/CTASection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <BlogSection />
      <RatingSection />
    </>
  );
};

export default HomePage;
