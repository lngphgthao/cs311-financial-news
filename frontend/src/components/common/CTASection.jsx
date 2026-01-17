import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
const CTASection = () => {
  const cards = [
    {
      title: "Truy cập tài nguyên",
      subtitle:
        "Người dùng có thể truy cập nhiều tài nguyên như ebook, whitepaper, báo cáo.",
    },
    {
      title: "Diễn đàn cộng đồng",
      subtitle:
        "Tham gia diễn đàn để thảo luận xu hướng ngành, chia sẻ kiến thức và hợp tác.",
    },
    {
      title: "Sự kiện tài chính",
      subtitle:
        "Cập nhật các sự kiện, hội thảo tài chính mới nhất để nâng cao kiến thức.",
    },
  ];

  return (
    <div className="flex flex-col bg-neutral-800 px-2 py-12 sm:px-8">
      <div className="flex flex-col items-center gap-6 pb-10 md:flex-row">
        <img
          src="src/assets/logo/logo.png"
          alt="CTA Image"
          className="mr-0 aspect-auto h-20 md:mr-10 md:h-30"
        />
        <div>
          <h4 className="mb-2 max-w-fit rounded-sm border-0 bg-neutral-700 px-2 py-1 text-neutral-100">
            Học hỏi và kết nối
          </h4>
          <h2 className="py-4 text-3xl font-medium md:text-4xl">
            Trở thành một phần của cách mạng tài chính tương lai
          </h2>
          <p className="text-sm text-neutral-400">
            Khám phá thế giới tài chính tương lai. Truy cập tài nguyên, kết nối
            cộng đồng đam mê tài chính và thúc đẩy đổi mới sáng tạo.
          </p>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 rounded-xl border border-neutral-800 bg-black p-4 sm:grid-cols-2 md:grid-cols-3">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between gap-1 rounded-md border border-neutral-800 bg-neutral-900 p-6 md:p-8"
          >
            <div className="flex flex-row items-center justify-between pb-4">
              <h4 className="text-lg font-medium">{card.title}</h4>
              <div className="items-center rounded-full bg-amber-300 p-3">
                <BsArrowUpRight className="text-xl text-black" />
              </div>
            </div>
            <div className="flex flex-auto items-center">
              <p className="text-sm text-neutral-400">{card.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CTASection;
