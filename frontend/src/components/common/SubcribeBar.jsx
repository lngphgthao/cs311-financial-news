import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const SubcribeBar = () => {
  return (
    <div className="w-full px-2 sm:px-0">
      <div className="flex h-12 flex-wrap items-center justify-center text-center text-sm font-medium">
        Đăng ký để nhận thông báo mới nhất về các bài báo và phân tích mới nhất
        theo thời gian thực
        <BsArrowUpRight className="m-1 inline-flex" />
      </div>
    </div>
  );
};

export default SubcribeBar;
