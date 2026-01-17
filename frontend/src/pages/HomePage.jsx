import React from "react";
import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import BlogSection from "../components/home/BlogSection";
import RatingSection from "../components/home/RatingSection";
import CTASection from "../components/common/CTASection";

const HomePage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-neutral-900">
      <HeroSection />
      <FeaturesSection />
      <BlogSection />
      <RatingSection />
    </div>
  );
};

export default HomePage;
