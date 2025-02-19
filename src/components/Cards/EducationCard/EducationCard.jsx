import React from "react";
import "./EducationCard.css";

import { VerticalTimelineElement } from "react-vertical-timeline-component";

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={education.school}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={education.img}
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "#1d1836",
        color: "#fff",
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        // backdropFilter: "blur(3px) saturate(106%)",
        backgroundColor: "rgba(17, 25, 40, 0.83)",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        borderRadius: "6px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid  rgba(255, 255, 255, 0.3)",
      }}
      date={education.date}
    >
      <div className="top">
        <img className="image" src={education.img} />
        <div className="body">
          <div className="name">{education.school}</div>
          <div className="degree">{education.degree}</div>
          <div className="date">{education.date}</div>
        </div>
      </div>
      <div className="grade">
        <b>Grade :</b>
        {education.grade}
      </div>
      <div className="description">
        <span>{education.desc}</span>
      </div>
    </VerticalTimelineElement>
  );
};

export default EducationCard;
