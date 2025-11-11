import React from "react";
import SubcribeBar from "./components/SubcribeBar";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/HomePage/FeaturesSection";
import BlogSection from "./components/HomePage/BlogSection";
import RatingSection from "./components/HomePage/RatingSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <SubcribeBar />
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <BlogSection />
      <RatingSection />
      <CTASection />
      <Footer />
    </>
  );
};

export default App;
