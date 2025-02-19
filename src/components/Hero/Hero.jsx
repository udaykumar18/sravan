import React from "react";
import "./Hero.css";

import img1 from "../../assets/doodles/html.svg";
import img2 from "../../assets/doodles/nextjs.svg";
// import img3 from "../../assets/doodles/brayden.svg";
// import img3 from "../../assets/doodles/email_doodle.png";
import img4 from "../../assets/doodles/coder.svg";
import img3 from "../../assets/doodles/js.svg";
import img6 from "../../assets/doodles/dino.svg";
import img7 from "../../assets/doodles/paintbrush.svg";
import img8 from "../../assets/doodles/pop1.svg";
import img9 from "../../assets/doodles/code.svg";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div
          className="relative heroElem w-full pt-32 pb-40 m-auto flex justify-center text-center flex-col items-center z-1"
          style={{ maxWidth: "1200px" }}
        >
          <p className="text-xl text-white mb-5">Hey, I'm Uday.</p>
          <h1 className="text-white heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg">
            I enjoy <span className="heroShiny1 text-fun-pink">coding</span> and{" "}
            <span className="heroShiny2 text-fun-pink">developing</span> for the
            web.
            <img
              className="sqD squiggle-hero-html w-16 top-[-90px] right-[5%] sm:top-[-90px] sm:right-[170px]"
              style={{ animationDelay: "0.1s" }}
              src={img1}
            />
            <img
              className="sqD squiggle-hero-nextjs hidden top-[75px] right-0 w-11"
              style={{ animationDelay: "0.2s" }}
              src={img2}
            />
            <img
              className="sqD bottom-[-318px] -right-1/4 sm:right-[-20%] lg:bottom-[-310px] lg:right-[-120px] w-[200px]"
              style={{ animationDelay: "0.3s" }}
              src={img3}
            />
            <img
              className="sqD hidden sm:block bottom-[-340px] left-[-180px]"
              style={{ animationDelay: "0.4s" }}
              src={img4}
            />
            {/* <img
              className="sqD hidden sm:block left-[100px] lg:left-[160px] bottom-[-150px]"
              style={{ animationDelay: "0.5s" }}
              src={img5}
            /> */}
            <img
              className="sqD bottom-[-250px] right-[41%] sm:right-[41%]"
              style={{ animationDelay: "0.6s" }}
              src={img6}
            />
            <img
              className="sqD right-[-60px] sm:right-0 bottom-[-180px] lg:[5%]"
              style={{ animationDelay: "0.7s" }}
              src={img7}
            />
            <img
              className="sqD squiggle-hero-pop1 hidden sm:block sm:top-[-130px] sm:left-[15%] lg:top-[-130px] lg:left-[120px]"
              src={img8}
            />
            <img
              className="sqD left-[-35px] bottom-[-85px] sm:bottom-[-100px] sm:left-5 opacity-40"
              style={{ animationDelay: "0.9s" }}
              src={img9}
            />
          </h1>
          {/* <ScrollLink
          activeClass="active"
          to="learnmore"
          spy={true}
          offset={-30}
          smooth={true}
          duration={500}
        >
          <div className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl rounded-full border-fun-white bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors">
            Tell me more
          </div>
        </ScrollLink> */}
        </div>
      </section>
    </>
  );
};

export default Hero;
