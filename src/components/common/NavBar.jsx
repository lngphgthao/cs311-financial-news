import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const pages = ["Home", "News", "Financial AI"];

  return (
    <div className="flex h-16 items-center justify-between gap-8 border-y border-y-neutral-700 bg-neutral-800 px-20 py-10 font-medium">
      <Link className="flex shrink-0 items-center" to="/">
        <img
          className="h-10"
          src="src/assets/logo/logo-trans.png"
          alt="FNT Logo"
        />
      </Link>

      <div className="flex gap-5 text-sm">
        {pages.map((page) => (
          <Link
            key={page}
            className="flex shrink-0 cursor-pointer items-center rounded-lg border border-neutral-800 px-4 py-3 text-center text-sm text-neutral-400 transition-colors hover:border-neutral-700 hover:bg-neutral-900 hover:text-white"
            to={
              page === "Home"
                ? "/"
                : page === "Financial AI"
                  ? "/chatbot"
                  : `/${page.toLowerCase()}`
            }
          >
            {page}
          </Link>
        ))}
      </div>

      <Link
        className="flex shrink-0 items-center rounded-md bg-yellow-500 p-3 text-sm text-black"
        to="/contact"
      >
        Contact us
      </Link>
    </div>
  );
};

export default NavBar;
