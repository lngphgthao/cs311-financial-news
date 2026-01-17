import React from "react";

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="flex h-[180px] w-full items-center justify-center bg-linear-to-r from-gray-900 via-black to-gray-900 sm:h-[200px]">
        <div className="mx-auto max-w-7xl px-4 text-white">
          <h1 className="text-center text-3xl font-bold md:text-5xl">
            Trợ lý AI FNT
          </h1>
          <p className="mt-5 max-w-2xl text-gray-400">
            Đặt câu hỏi, khám phá xu hướng tài chính và nhận thông tin tức thì
            nhờ AI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
