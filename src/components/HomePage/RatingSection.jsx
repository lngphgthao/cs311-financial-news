import React from "react";
import SectionHeader from "./SectionHeader";
import RatingCard from "./RatingCard";

const RatingSection = () => {
  const ratings = [
    {
      id: 1,
      user: {
        name: "Sarah Thompson",
        location: "San Francisco, USA",
        image: "src/assets/images/dog.jpg",
      },
      comment:
        "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.",
      rating: 5,
    },
    {
      id: 2,
      user: {
        name: "Raj Patel",
        location: "Mumbai, India",
        image: "src/assets/images/dog.jpg",
      },
      comment:
        "The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis, helping me make informed decisions.",
      rating: 5,
    },
    {
      id: 3,
      user: {
        name: "Emily Adams",
        location: "London, UK",
        image: "src/assets/images/dog.jpg",
      },
      comment:
        "The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care.",
      rating: 5,
    },
    {
      id: 4,
      user: {
        name: "Alan Jackson",
        location: "Houston, USA",
        image: "src/assets/images/dog.jpg",
      },
      comment:
        "The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view of what lies beyond Earth.",
      rating: 5,
    },
    {
      id: 5,
      user: {
        name: "Jessica Miller",
        location: "Boston, USA",
        image: "src/assets/images/dog.jpg",
      },
      comment:
        "The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research in genomics.",
      rating: 5,
    },
    {
      id: 6,
      user: {
        name: "Dieogo Lopez",
        location: "Barcelona, Spain",
        image: "src/assets/images/dog.jpg",
      },
      comment:
        "The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability.",
      rating: 5,
    },
  ];

  return (
    <section>
      <SectionHeader
        subtitle="What Our Readers Say"
        title="Real Words from Real Readers"
        buttonText="View All Ratings"
        buttonLink="/ratings"
      />
      <div className="grid grid-cols-3 grid-rows-2 divide-x divide-neutral-700">
        {ratings.map((rating) => (
          <RatingCard key={rating.id} rating={rating} />
        ))}
      </div>
    </section>
  );
};

export default RatingSection;
