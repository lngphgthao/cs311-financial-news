import React from "react";

const HeroSection = () => {
  const numbers = [
    {
      value: "300+",
      label: "Resources available",
    },
    { value: "12k+", label: "Total Downloads" },
    { value: "10k+", label: "Active Users" },
  ];

  return (
    <section className="grid grid-cols-[4fr_3fr] items-center justify-between border-b border-b-neutral-700">
      <div className="flex h-full flex-col justify-center">
        <div className="p-18">
          <p className="mb-3 text-lg tracking-widest text-neutral-400">
            Your Journey to Tomorrow Begins Here
          </p>
          <h1 className="mb-2 text-5xl leading-tight font-medium">
            Explore the Frontiers of{" "}
            <span className="text-yellow-400">Artificial Intelligence</span>
          </h1>
          <p className="text-sm text-neutral-400">
            Welcome to the epicenter of AI innovation. FutureTech AI News is
            your passport to a world where machines think, learn, and reshape
            the future. Join us on this visionary expedition into the heart of
            AI.
          </p>
        </div>

        <div className="grid grid-cols-3 divide-x divide-neutral-700 border-t border-t-neutral-700 pl-6">
          {numbers.map((item, i) => (
            <div key={i} className="py-10 pl-12">
              <p className="mb-2 text-3xl font-bold text-yellow-400">
                {item.value}
              </p>
              <p className="text-sm text-neutral-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative h-[500px] w-full border-l border-l-neutral-700">
        <img
          src="src/assets/images/dog.jpg"
          alt="AI illustration"
          className="inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
