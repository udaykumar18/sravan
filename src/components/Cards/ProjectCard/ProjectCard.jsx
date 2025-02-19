import React from "react";
import "./ProjectCard.css";

import Video from "../../../data/videos/test1.mp4";
import img from "../../../assets/project.png";

const ProjectCard = ({ project }) => {
  return (
    <div className="pr-card">
      {/* <img src={project.image} className="pr-img" alt="" /> */}
      <video
        src={Video}
        autoPlay
        loop
        muted
        playsInline
        class="pointer-events-none mx-auto  w-full object-cover object-top"
      ></video>
      {/* <img src={img} alt="" /> */}

      <div className="padding">
        <div className="tags">
          {project.tags?.map((tag) => (
            <span className="tag">{tag}</span>
          ))}
        </div>
        <div className="details">
          <div className="pr-title">{project.title}</div>
          <div className="pr-date">{project.date}</div>
          <div className="pr-description">{project.description}</div>
        </div>
        <div className="members">
          {project.member?.map((member) => (
            <img src={member.img} alt="" className="avatar" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
