import React from "react";

const NavBar = () => {
  const pages = ["Home", "News", "Podcasts", "Resources"];

  return (
    <div className="flex h-16 items-center justify-between gap-8 border-y border-y-neutral-700 bg-neutral-800 px-20 py-10 font-medium">
      <div className="flex items-center">
        <img
          className="h-10"
          src="src/assets/logo/logo-trans.png"
          alt="FNT Logo"
        />
      </div>

      <ul className="flex gap-5 text-sm">
        {pages.map((page) => (
          <li
            key={page}
            className="cursor-pointer rounded-lg border border-neutral-800 px-4 py-3 text-center text-sm text-neutral-400 transition-colors hover:border-neutral-700 hover:bg-neutral-900 hover:text-white"
          >
            <button href={`/${page.toLowerCase()}`}>{page}</button>
          </li>
        ))}
      </ul>

      <button className="rounded-md border-0 bg-yellow-500 p-3 text-sm text-black">
        Contact us
      </button>
    </div>
  );
};

export default NavBar;
