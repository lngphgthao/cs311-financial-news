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
      <div className="grid grid-cols-3 divide-x divide-neutral-700 px-10">
        {features.map(({ title, subtitle, description }) => (
          <div className="p-10">
            <h4 className="mb-1 text-lg">{title}</h4>
            <h5 className="mb-6 text-sm text-neutral-500">{subtitle}</h5>
            <p className="text-neutral-400">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
