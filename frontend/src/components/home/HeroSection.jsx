import React from "react";

const HeroSection = () => {
  const numbers = [
    {
      value: "300+",
      label: "Tài nguyên sẵn có",
    },
    { value: "2000+", label: "Lượt đọc" },
    { value: "50+", label: "Người dùng hoạt động" },
  ];

  return (
    <section className="flex flex-col items-center justify-between border-b border-b-neutral-700 lg:flex-row">
      <div className="flex h-full w-full flex-col justify-center">
        <div className="p-6 sm:p-12 md:p-18">
          <p className="mb-3 text-lg tracking-widest text-neutral-400">
            Cập nhật tin tức tài chính nhanh chóng và chính xác
          </p>
          <h1 className="mb-5 text-3xl leading-tight font-medium sm:text-5xl">
            Nắm bắt{" "}
            <span className="text-yellow-400">thị trường tài chính</span> mỗi
            ngày.
          </h1>
          <p className="text-sm text-neutral-400">
            Chào mừng bạn đến với nguồn tin tức tài chính hàng đầu. Tại đây, bạn
            sẽ được cập nhật những biến động mới nhất về thị trường, xu hướng
            đầu tư, và các phân tích chuyên sâu giúp bạn đưa ra quyết định sáng
            suốt. Hãy cùng chúng tôi theo dõi nhịp đập của nền kinh tế và tận
            dụng cơ hội phát triển tài chính cá nhân.
          </p>
        </div>

        <div className="grid grid-cols-1 divide-y divide-neutral-700 border-t border-t-neutral-700 pl-0 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:pl-6">
          {numbers.map((item, i) => (
            <div
              key={i}
              className="py-6 pl-0 text-center sm:py-10 sm:pl-12 sm:text-left"
            >
              <p className="mb-2 text-3xl font-bold text-yellow-400">
                {item.value}
              </p>
              <p className="text-sm text-neutral-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
