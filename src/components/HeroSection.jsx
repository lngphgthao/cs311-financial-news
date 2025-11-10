import React from "react";

const HeroSection = () => {
  const numbers = [
    { value: "300+", label: "Resources available" },
    { value: "12k+", label: "Total Downloads" },
    { value: "10k+", label: "Active Users" },
  ];
  return (
    <section className="grid grid-cols-[4fr_3fr] justify-between items-center bg-primary text-white h-1/2">
      <div className="border border-gray-700">
        <div className="p-18">
          <p className="text-gray-400 tracking-widest mb-3">
            Your Journey to Tomorrow Begins Here
          </p>
          <h1 className="text-5xl font-medium leading-tight mb-2">
            Explore the Frontiers of{" "}
            <span className="text-yellow-400">Artificial Intelligence</span>
          </h1>
          <p className="text-gray-400">
            Welcome to the epicenter of AI innovation. FutureTech AI News is
            your passport to a world where machines think, learn, and reshape
            the future. Join us on this visionary expedition into the heart of
            AI.
          </p>
        </div>

        <div className="grid grid-cols-3 text-center">
          {numbers.map((item, i) => (
            <div key={i} className="border border-gray-700 p-8">
              <p className="text-2xl font-bold text-yellow-400">{item.value}</p>
              <p className="text-gray-400 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-gray-700 relative h-[500px] w-full">
        <img
          src="src/assets/images/dog.jpg"
          alt="AI illustration"
          className="inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
