import React from "react";
import SectionHeader from "../common/SectionHeader";
import RatingCard from "./RatingCard";

const RatingSection = () => {
  const ratings = [
    {
      id: 1,
      user: {
        name: "Nguyễn Văn An",
        location: "Hà Nội",
        image: "src/assets/images/user1.jpg",
      },
      comment:
        "Các ebook về đầu tư tài chính đã giúp tôi hiểu rõ hơn về cách quản lý tài sản và tối ưu hóa lợi nhuận. Đây là nguồn tài liệu không thể thiếu.",
      rating: 5,
    },
    {
      id: 2,
      user: {
        name: "Trần Thị Hoa",
        location: "TP. Hồ Chí Minh",
        image: "src/assets/images/user2.jpg",
      },
      comment:
        "Các báo cáo về thị trường chứng khoán đã cung cấp cho tôi những phân tích sâu sắc và dự báo chính xác, giúp tôi đưa ra quyết định đầu tư hiệu quả.",
      rating: 5,
    },
    {
      id: 3,
      user: {
        name: "Lê Minh Tuấn",
        location: "Đà Nẵng",
        image: "src/assets/images/user3.jpg",
      },
      comment:
        "Các tài liệu về quản lý rủi ro tài chính đã giúp công ty tôi tránh được những sai lầm lớn và cải thiện hiệu quả hoạt động.",
      rating: 5,
    },
    {
      id: 4,
      user: {
        name: "Phạm Quốc Huy",
        location: "Cần Thơ",
        image: "src/assets/images/user4.jpg",
      },
      comment:
        "Những bài viết về chiến lược đầu tư dài hạn đã thay đổi cách tôi tiếp cận thị trường. Chúng thực sự hữu ích và dễ hiểu.",
      rating: 5,
    },
    {
      id: 5,
      user: {
        name: "Vũ Thị Lan",
        location: "Hải Phòng",
        image: "src/assets/images/user5.jpg",
      },
      comment:
        "Các nghiên cứu về tài chính cá nhân đã giúp tôi lập kế hoạch tiết kiệm và đầu tư hiệu quả hơn. Tôi rất biết ơn vì điều đó.",
      rating: 4,
    },
    {
      id: 6,
      user: {
        name: "Đặng Hoàng Nam",
        location: "Huế",
        image: "src/assets/images/user6.jpg",
      },
      comment:
        "Các ebook về quản lý tài chính doanh nghiệp đã cung cấp cho tôi những kiến thức cần thiết để phát triển startup của mình.",
      rating: 4,
    },
  ];

  return (
    <section>
      <SectionHeader
        subtitle="Độc giả nói gì?"
        title="Cảm nhận thực tế từ độc giả"
        buttonText="Xem tất cả đánh giá"
        buttonLink="/ratings"
      />
      <div className="grid grid-cols-1 grid-rows-2 divide-y divide-neutral-700 sm:grid-cols-2 md:grid-cols-3 md:divide-x md:divide-y-0">
        {ratings.map((rating) => (
          <RatingCard key={rating.id} rating={rating} />
        ))}
      </div>
    </section>
  );
};

export default RatingSection;
