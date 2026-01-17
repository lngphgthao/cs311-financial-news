import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
const FeaturesSection = () => {
  const features = [
    {
      title: "Cập nhật tin tức mới nhất",
      subtitle: "Luôn cập nhật",
      description: "Hơn 1.000 bài viết được cập nhật mỗi tháng",
    },
    {
      title: "Chuyên gia đóng góp",
      subtitle: "Góc nhìn tin cậy",
      description: "Nguồn tin đáng tin cậy từ hơn 50 trang web",
    },
    {
      title: "Độc giả toàn cầu",
      subtitle: "Ảnh hưởng rộng khắp",
      description: "2 nghìn lượt đọc mỗi tháng",
    },
  ];

  return (
    <section>
      <div className="grid grid-cols-1 divide-y divide-neutral-700 border-t border-t-neutral-700 pl-0 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:pl-6">
        {features.map(({ title, subtitle, description }) => (
          <div key={title} className="grid grid-cols-[5fr_1fr] p-6 sm:p-10">
            <div>
              <h4 className="mb-1 text-lg">{title}</h4>
              <h5 className="mb-6 text-sm text-neutral-500">{subtitle}</h5>
              <p className="text-neutral-400">{description}</p>
            </div>
            <button
              onClick={() => (window.location.href = "/news")}
              className="flex cursor-pointer items-center"
            >
              <div className="items-center rounded-full bg-amber-300 p-3">
                <BsArrowUpRight className="text-xl text-black" />
              </div>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
