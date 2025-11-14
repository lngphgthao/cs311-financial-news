import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
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
      <div className="grid grid-cols-3 divide-x divide-neutral-700 px-8">
        {features.map(({ title, subtitle, description }) => (
          <div key={title} className="grid grid-cols-[5fr_1fr] p-10">
            <div className="">
              <h4 className="mb-1 text-lg">{title}</h4>
              <h5 className="mb-6 text-sm text-neutral-500">{subtitle}</h5>
              <p className="text-neutral-400">{description}</p>
            </div>
            <div className="flex items-center">
              <div className="items-center rounded-full bg-amber-300 p-3">
                <BsArrowUpRight className="text-xl text-black" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
