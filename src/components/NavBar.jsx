import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center gap-8 h-16 px-20 py-10 border-y-1 border-y-gray-700 bg-primary text-white font-medium">
      <div className="flex items-center">
        <img
          className="h-10"
          src="src/assets/logo/logo-trans.png"
          alt="FNT Logo"
        />
      </div>
      <ul className="flex gap-10 text-sm">
        <li>
          <a href="#" className="hover:text-yellow-500">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-yellow-500">
            News
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-yellow-500">
            Podcasts
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-yellow-500">
            Resources
          </a>
        </li>
      </ul>

      <button className="bg-yellow-500 text-black text-sm p-3 border-yellow-500 rounded-md">
        Contact us
      </button>
    </div>
  );
};

export default NavBar;
