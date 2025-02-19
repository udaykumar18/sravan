import React from "react";
import "./Navbar.css";

import { IoCloudDownloadOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const data = [
  {
    title: "About",
    href: "/",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Experience",
    href: "/experience",
  },
  {
    title: "Skills",
    href: "/skills",
  },
  {
    title: "Education",
    href: "/education",
  },
];

const Navbar = () => {
  return (
    <header className="py-6 border border-zinc-800">
      <div className="container mx-auto flex items-center justify-between">
        <div className="navbar-title">
          <h3 className="title-first-name">Sravan</h3>
          <h3 className="title-last-name">Kumar</h3>
        </div>
        <nav>
          <ul className="flex items-center gap-x-8">
            {data.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="font-incognito-reg text-white duration-300 text-base hover:text-[#854ce6]"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="resume-btn flex items-center gap-2">
          <span className="font-incognito-reg text-white">Resume</span>
          <IoCloudDownloadOutline className="text-white relative top-[2px]" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
