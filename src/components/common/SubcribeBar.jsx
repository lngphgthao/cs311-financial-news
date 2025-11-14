import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const SubcribeBar = () => {
  return (
    <div>
      <div className="flex h-12 items-center justify-center text-sm font-medium">
        Đăng ký để nhận thông báo mới nhất về các bài báo và phân tích mới nhất
        theo thời gian thực
        <BsArrowUpRight className="m-1 inline-flex" />
      </div>
    </div>
  );
};

export default SubcribeBar;
