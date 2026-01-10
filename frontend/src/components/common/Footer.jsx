import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const left_columns = [
    {
      title: "Home",
      categories: [
        { label: "Features", href: "#" },
        { label: "Blogs", href: "#" },
        { label: "Resources", href: "#" },
        { label: "Testimonials", href: "#" },
        { label: "Contact Us", href: "#" },
        { label: "Newsletter", href: "#" },
      ],
    },
    {
      title: "News",
      categories: [
        { label: "Trending Stories", href: "#" },
        { label: "Featured Videos", href: "#" },
        { label: "Technology", href: "#" },
        { label: "Health", href: "#" },
        { label: "Politics", href: "#" },
        { label: "Environment", href: "#" },
      ],
    },
    {
      title: "Blogs",
      categories: [
        { label: "Quantum Computing", href: "#" },
        { label: "AI Ethics", href: "#" },
        { label: "Space Exploration", href: "#" },
        { label: "Biotechnology", href: "#" },
        { label: "Renewable Energy", href: "#" },
        { label: "Biohacking", href: "#" },
      ],
    },
    {
      title: "Podcasts",
      categories: [
        { label: "AI Revolution", href: "#" },
        { label: "AI models", href: "#" },
        { label: "TechTalk AI", href: "#" },
        { label: "AI Conversations", href: "#" },
      ],
    },
  ];

  const last_column = {
    title: "Resources",
    categories: ["Whitepapers", "Ebooks", "Reports", "Research Papers"],
  };

  return (
    <div className="divide-y divide-neutral-600 px-18">
      {/* First 4 columns */}
      <div className="grid grid-cols-5 justify-between py-18">
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

        {/* Last columns */}
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
      </div>

      {/* Social Media */}
      <div className="flex flex-row justify-between py-8">
        <div className="flex flex-row divide-x divide-neutral-600 text-sm text-neutral-400">
          <div className="pr-3">
            <a href="">Terms & Conditions</a>
          </div>
          <div className="pl-3">
            <a href="">Privacy Policy</a>
          </div>
        </div>
        <div>
          <FaFacebookF className="mx-2 inline cursor-pointer text-neutral-400 hover:text-white" />
          <FaTwitter className="mx-2 inline cursor-pointer text-neutral-400 hover:text-white" />
          <FaLinkedinIn className="mx-2 inline cursor-pointer text-neutral-400 hover:text-white" />
        </div>
        <div className="div">
          <p className="text-sm text-neutral-400">
            © 2024 FutureTech. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
