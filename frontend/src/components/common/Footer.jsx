import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const left_columns = [
    {
      title: "Trang chủ",
      categories: [
        { label: "Tính năng", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Tài nguyên", href: "#" },
        { label: "Cảm nhận", href: "#" },
        { label: "Liên hệ", href: "#" },
        { label: "Bản tin", href: "#" },
      ],
    },
    {
      title: "Tin tức",
      categories: [
        { label: "Tin nổi bật", href: "#" },
        { label: "Video nổi bật", href: "#" },
        { label: "Công nghệ", href: "#" },
        { label: "Sức khỏe", href: "#" },
        { label: "Chính trị", href: "#" },
        { label: "Môi trường", href: "#" },
      ],
    },
    {
      title: "Blog",
      categories: [
        { label: "Máy tính lượng tử", href: "#" },
        { label: "Đạo đức AI", href: "#" },
        { label: "Khám phá vũ trụ", href: "#" },
        { label: "Công nghệ sinh học", href: "#" },
        { label: "Năng lượng tái tạo", href: "#" },
        { label: "Biohacking", href: "#" },
      ],
    },
    {
      title: "Podcast",
      categories: [
        { label: "Cách mạng AI", href: "#" },
        { label: "Mô hình AI", href: "#" },
        { label: "TechTalk AI", href: "#" },
        { label: "Trò chuyện AI", href: "#" },
      ],
    },
  ];

  const last_column = {
    title: "Tài nguyên",
    categories: ["Whitepapers", "Ebooks", "Báo cáo", "Nghiên cứu"],
  };

  return (
    <div className="divide-y divide-neutral-600 px-4 sm:px-8 md:px-18">
      {/* First 4 columns */}
      {/* <div className="grid grid-cols-2 justify-between gap-6 py-10 sm:grid-cols-3 md:grid-cols-5 md:py-18">
        {left_columns.map((col) => (
          <div className="flex flex-col" key={col.title}>
            <h5 className="mb-5 text-lg">{col.title}</h5>
            <div className="flex flex-col gap-3">
              {col.categories.map((category) => (
                <a className="text-sm text-neutral-400" href={category.href}>
                  {category.label}
                </a>
              ))}
            </div>
          </div>
        ))}

        <div className="flex flex-col">
          <h5 className="mb-3 text-lg">{last_column.title}</h5>
          <div className="flex flex-col gap-3">
            {last_column.categories.map((category) => (
              <a
                className="w-fit rounded-lg border border-neutral-600 px-3 py-2.5 text-sm text-neutral-400 hover:bg-neutral-700 hover:text-white"
                href="#"
              >
                {category}
                <BsArrowUpRight className="ml-2 inline text-lg text-amber-300" />
              </a>
            ))}
          </div>
        </div>
      </div> */}

      {/* Social Media */}
      <div className="flex flex-col justify-between gap-4 py-8 md:flex-row md:gap-0">
        <div className="flex flex-row divide-x divide-neutral-600 text-sm text-neutral-400">
          <div className="pr-3">
            <a href="">Điều khoản & Điều kiện</a>
          </div>
          <div className="pl-3">
            <a href="">Chính sách bảo mật</a>
          </div>
        </div>
        <div>
          <FaFacebookF className="mx-2 inline cursor-pointer text-neutral-400 hover:text-white" />
          <FaTwitter className="mx-2 inline cursor-pointer text-neutral-400 hover:text-white" />
          <FaLinkedinIn className="mx-2 inline cursor-pointer text-neutral-400 hover:text-white" />
        </div>
        <div className="div">
          <p className="text-sm text-neutral-400">
            © 2026 FNT. Đã đăng ký bản quyền.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
