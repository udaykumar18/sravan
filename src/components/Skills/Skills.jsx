import React from "react";
import "./Skills.css";
import { skills } from "../../data/data";

const Skills = () => {
  return (
    <div id="skills" className="skill-container">
      <div className="skill-wrapper">
        <div className="secondary-title">Skills</div>
        <div className="desc">
          Here are some of my skills on which I have been working on for the
          past 3 years.
        </div>
        <div className="skills-container">
          {skills.map((item) => (
            <div className="skill">
              <h2 className="skill-title">{item.title}</h2>
              <div className="skill-list">
                {item.skills.map((skill) => (
                  <div className="skill-item">
                    <img src={skill.image} alt="" className="skill-image" />
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
