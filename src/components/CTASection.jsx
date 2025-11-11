import React from "react";

const CTASection = () => {
  const cards = [
    {
      title: "Resource Access",
      subtitle:
        "Visitors can access a wide range of resources, including ebooks, whitepapers, reports.",
    },
    {
      title: "Community Forum",
      subtitle:
        "Join our active community forum to discuss industry trends, share insights, and collaborate with peers.",
    },
    {
      title: "Tech Events",
      subtitle:
        "Stay updated on upcoming tech events, webinars, and conferences to enhance your knowledge.",
    },
  ];

  return (
    <div className="flex flex-col bg-neutral-800 p-18">
      <div className="flex flex-row items-center pb-18">
        <img
          src="src/assets/logo/logo.png"
          alt="CTA Image"
          className="mr-10 aspect-auto h-30"
        />
        <div>
          <h4 className="mb-2 max-w-fit rounded-sm border-0 bg-neutral-700 px-2 py-1 text-neutral-100">
            Learn, Connect, and Innovate
          </h4>
          <h2 className="py-4 text-4xl font-medium">
            Be Part of the Future Tech Revolution
          </h2>
          <p className="text-sm text-neutral-400">
            Immerse yourself in the world of future technology. Explore our
            comprehensive resources, connect with fellow tech enthusiasts, and
            drive innovation in the industry. Join a dynamic community of
            forward-thinkers.
          </p>
        </div>
      </div>

      <div className="grid w-full grid-cols-3 gap-4 rounded-xl border border-neutral-800 bg-black p-4">
        {cards.map((card) => (
          <div className="flex flex-col justify-between rounded-md border border-neutral-800 bg-neutral-900 p-8">
            <h4 className="py-2 text-lg font-medium">{card.title}</h4>
            <p className="text-sm text-neutral-400">{card.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CTASection;
