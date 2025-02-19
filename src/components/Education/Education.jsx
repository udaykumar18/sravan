import React from "react";
import "./Education.css";

import { education } from "../../data/data";

import EducationCard from "../Cards/EducationCard/EducationCard";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <>
      <div className="education-wrapper mb-20">
        <div className="secondary-title">Education</div>
        <div className="desc mb-8">
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </div>

        <VerticalTimeline>
          {education.map((education, index) => (
            <EducationCard key={`education-${index}`} education={education} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
