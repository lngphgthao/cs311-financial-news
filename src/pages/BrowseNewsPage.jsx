import React from "react";
import HeroSection from "../components/browse-news/HeroSection";
import RecommendationSection from "../components/browse-news/RecommendationSection";
import BlogSection from "../components/home/BlogSection";

const BrowseNewsPage = () => {
  const newsList = [
    {
      id: 1,
      title: "Global Climate Summit Addresses Urgent Climate Action",
      subtitle:
        "World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets.",
      category: "Environment",
      date: "October 10, 2023",
      author: "Jane Smith",
      numbers: { like: 1200, comment: 300, share: 150 },
    },
    {
      id: 2,
      title: "Breakthrough in Cancer Research Offers New Hope",
      subtitle:
        "Scientists have announced a breakthrough in cancer research that could lead to more effective treatments and improved survival rates.",
      category: "Health",
      date: "October 12, 2023",
      author: "John Doe",
      numbers: { like: 900, comment: 200, share: 100 },
    },
    {
      id: 3,
      title: "Tech Giants Unveil Latest Innovations at Annual Conference",
      subtitle:
        "Leading technology companies showcased their latest innovations and products at the annual tech conference, highlighting advancements in AI and consumer electronics.",
      category: "Technology",
      date: "October 15, 2023",
      author: "Alice Johnson",
      numbers: { like: 1500, comment: 400, share: 250 },
    },
    {
      id: 4,
      title: "Global Markets React to Economic Policy Changes",
      subtitle:
        "Financial markets around the world responded to recent economic policy changes, with investors closely monitoring the impact on stocks and currencies.",
      category: "Finance",
      date: "October 18, 2023",
      author: "Michael Brown",
      numbers: { like: 800, comment: 150, share: 75 },
    },
  ];

  return (
    <>
      <HeroSection
        title="Today's Headlines: Stay Informed"
        subtitle="Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends, and stories. Discover the world through our news coverage."
      />
      <RecommendationSection news={newsList} />
      <BlogSection />
    </>
  );
};

export default BrowseNewsPage;
