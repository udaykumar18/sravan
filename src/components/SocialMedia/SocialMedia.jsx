import React from "react";
import "./SocialMedia.css";

import github from "../../assets/github.png";
import insta from "../../assets/insta.png";
import linkdln from "../../assets/linkdln.png";
import facebook from "../../assets/facebook.png";

const SocialMedia = () => {
  return (
    <>
      <div className="social-media">
        <ul className="social-ul">
          <li>
            <a href="#">
              <img src={github} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={insta} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={linkdln} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={facebook} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SocialMedia;
