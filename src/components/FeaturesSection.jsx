import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      title: "Latest News Updates",
      subtitle: "Stay Current",
      description: "Over 1,000 articles published monthly",
    },
    {
      title: "Expert Contributors",
      subtitle: "Trusted Insights",
      description: "50+ reowned AI experts on our team",
    },
    {
      title: "Global Readership",
      subtitle: "Worldwide Impact",
      description: "2 million monthly readers",
    },
  ];
  return (
    <section>
      <div className="grid grid-cols-3 bg-primary divide-x divide-gray-700 border border-gray-700 text-white px-10">
        {features.map(({ title, subtitle, description }) => (
          <div className="p-10">
            <h4 className="text-lg font-bold">{title}</h4>
            <h5 className="text-md mb-6">{subtitle}</h5>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
