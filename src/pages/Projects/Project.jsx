import React, { useState } from "react";
import "./Project.css";

import ProjectCard from "../../components/Cards/ProjectCard/ProjectCard";

import { projects } from "../../data/data";

const Project = () => {
  const [toggle, setToggle] = useState("machine learning");
  return (
    <div id="projects" className="container mx-auto">
      <div className="project-wrapper">
        <div className="secondary-title">Projects</div>
        <div className="desc">
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </div>

        <div className="toggle-group">
          {toggle === "all" ? (
            <a
              className="toggle-button  rounded-lg text-sm border border-transparent hover:border-zinc-700 active-btn"
              onClick={() => setToggle("all")}
            >
              ALL
            </a>
          ) : (
            <a
              className="toggle-button rounded-lg border border-transparent hover:border-zinc-700  text-sm"
              onClick={() => setToggle("all")}
            >
              ALL
            </a>
          )}

          {toggle === "web app" ? (
            <a
              className="toggle-button rounded-lg text-sm active-btn border border-transparent hover:border-zinc-700"
              onClick={() => setToggle("web app")}
            >
              WEB APP'S
            </a>
          ) : (
            <a
              className="toggle-button rounded-lg text-sm border border-transparent hover:border-zinc-700"
              onClick={() => setToggle("web app")}
            >
              WEB APP'S
            </a>
          )}

          {toggle === "android app" ? (
            <a
              className="toggle-button rounded-lg text-sm active-btn border border-transparent hover:border-zinc-700"
              onClick={() => setToggle("android app")}
            >
              ANDRIOD APP'S
            </a>
          ) : (
            <a
              className="toggle-button rounded-lg text-sm border border-transparent hover:border-zinc-700"
              onClick={() => setToggle("android app")}
            >
              ANDRIOD APP'S
            </a>
          )}

          {toggle === "machine learning" ? (
            <a
              className="toggle-button rounded-lg text-sm active-btn border border-transparent hover:border-zinc-700"
              onClick={() => setToggle("machine learning")}
            >
              MACHINE LEARNING
            </a>
          ) : (
            <a
              className="toggle-button rounded-lg text-sm border border-transparent hover:border-zinc-700"
              onClick={() => setToggle("machine learning")}
            >
              MACHINE LEARNING
            </a>
          )}
        </div>
        {/* <div className="card-container">
          {toggle === "all" &&
            projects.map((project) => <ProjectCard project={project} />)}

          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} />
            ))}
        </div> */}
        <div className="">
          <h1 className="text-3xl text-white">Projects soon!.....</h1>
        </div>
      </div>
    </div>
  );
};

export default Project;
