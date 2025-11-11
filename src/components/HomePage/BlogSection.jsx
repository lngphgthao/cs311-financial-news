import React from "react";
import SectionHeader from "./SectionHeader";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  const categories = [
    "All",
    "Quantum Computing",
    "AI Ethics",
    "Space Exploration",
    "Biotechnology",
    "Renewable Energy",
  ];

  const blogPosts = [
    {
      id: 1,
      author: {
        name: "John Techson",
        avatar: "src/assets/images/dog.jpg",
        category: "Quantum Computing",
      },

      date: "October 15, 2023",
      title: "The Future of Quantum Computing",
      description:
        "Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
      numbers: { like: 24500, comment: 50, share: 20 },
    },
    {
      id: 2,
      author: {
        name: "Sarah Ethicist",
        avatar: "src/assets/images/dog.jpg",
        category: "AI Ethics",
      },

      date: "November 5, 2023",
      title: "The Ethical Dilemmas of AI",
      description:
        "A deep dive into the ethical challenges posed by AI, including bias, privacy, and transparency.",
      numbers: { like: 32000, comment: 72, share: 18 },
    },
    {
      id: 3,
      author: {
        name: "Astronomer X",
        avatar: "src/assets/images/dog.jpg",
        category: "Space Exploration",
      },

      date: "December 10, 2023",
      title: "The Mars Colonization Challenge",
      description:
        "Exploring the technical challenges of human colonization on Mars.",
      numbers: { like: 20000, comment: 31, share: 12 },
    },
  ];

  return (
    /* Section Header */
    <section>
      <SectionHeader
        subtitle="A Knowledge Treasure Trove"
        title="Explore FutureTech’s In-Depth Blog Posts"
        buttonText="View All Blogs"
        buttonLink="/blogs"
      />

      {/* Blog Tabs */}
      <div className="flex flex-row items-center justify-center gap-4 px-18 py-8">
        {categories.map((category) => (
          <div
            key={category}
            className="h-f w-55 cursor-pointer rounded border border-neutral-700 p-5 text-center text-sm text-neutral-400 transition-colors hover:bg-neutral-700 hover:text-white"
          >
            {category}
          </div>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="flex flex-col">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
