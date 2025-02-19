import React from "react";
import "./Footer.css";

import gmail from "../../assets/gmail.png";
import insta from "../../assets/insta.png";
import linkdln from "../../assets/linkdln.png";
import facebook from "../../assets/facebook.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer-container bg-[#25262a]">
      <div className="footer-wrapper">
        <div className="footer-heading text-center w-[58%]">
          <h2 className="text-6xl font-semibold">Let's work together!</h2>
          <p className="mt-4 text-[#d4d0e0]">
            Feel free to reach out if you're looking for a developer, have a
            question,or interested in building some super cool stuff together
          </p>
        </div>
        {/* <div className="socialmedia-icons">
          <a className="socialmedia-icon" target="display">
            <img src={gmail} alt="" />
          </a>
          <a className="socialmedia-icon" target="display">
            <img src={insta} alt="" />
          </a>
          <a className="socialmedia-icon" target="display">
            <img src={linkdln} alt="" />
          </a>
          <a className="socialmedia-icon" target="display">
            <img src={facebook} alt="" />
          </a>
        </div> */}

        <div className="email-me text-center mt-5">
          <div className="email flex items-center gap-2">
            <img src={gmail} alt="" className="w-[30px]" />
            <h3 className="text-base">
              <span>udayakumar9492</span>@gmail.com
            </h3>
          </div>
        </div>
        <p className="copyright mt-14">
          &copy; {year} Uday Kumar. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
