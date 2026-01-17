import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const pages = [
    { label: "Trang chủ", path: "/" },
    { label: "Tin tức", path: "/news" },
    { label: "Chatbot AI", path: "/chatbot" },
  ];

  return (
    <nav className="w-full border-y border-y-neutral-700 bg-neutral-800 font-medium">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-8 md:px-12 lg:px-20">
        <Link className="flex shrink-0 items-center" to="/">
          <img
            className="h-10"
            src="src/assets/logo/logo-trans.png"
            alt="FNT Logo"
          />
        </Link>

        <div className="hidden gap-2 sm:flex">
          {pages.map((page) => (
            <Link
              key={page.label}
              className="flex shrink-0 cursor-pointer items-center rounded-lg border border-neutral-800 px-3 py-2 text-center text-sm text-neutral-400 transition-colors hover:border-neutral-700 hover:bg-neutral-900 hover:text-white"
              to={page.path}
            >
              {page.label}
            </Link>
          ))}
        </div>

        <Link
          className="flex shrink-0 items-center rounded-md bg-yellow-500 p-2 text-sm text-black sm:p-3"
          to="/contact"
        >
          Liên hệ
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
