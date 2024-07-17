import React from "react";
import { useState } from "react";
import "./experience.css";

const Experience = () => {
  const [activeSection, setActiveSection] = useState("experience");

  const categories = {
    experience: { icon: "💼", name: "Experience" },
    education: { icon: "🎓", name: "Education" },
  };

  const experienceData = [
    {
      title: "Software Developer Engineer Intern",
      company: "Pacify Medical Technologies Pvt Ltd",
      date: "May 2024 - July 2024",
      description:
        "Developed a ReactJS web app interface to process wound images and calculate burn areas, integrating a pre-trained Mask RCNN model with a Flask backend on Google Cloud.",
      skills: ["ReactJS", "Python", "Flask", "Google Cloud"],
    },
    {
      title: "Design and Partnerships Lead",
      company: "BITS Blockchain Club",
      date: "May 2024 - Present",
      description:
        "Established a website for the club which will improve the engagement and participant registrations in upcoming events",
      skills: ["CSS", "ReactJS", "GitHub", "Vercel"],
    },
  ];

  const educationData = [
    {
      title: "Bachelor of Engineering in Electronics and Instrumentation",
      institution: "BITS Pilani, Pilani Campus",
      date: "Aug 2022 - May 2026",
      description:
        "Data Structures and Algorithms, Database Management, Microprocessors, Microelectronic Circuits, Control Systems",
      skills: ["Electronics", "Full-Stack"],
    },
    {
      title: "High School",
      institution: "Vidyanidhi Jr. College of Science",
      date: "May 2020 - May 2022",
      description: "",
      skills: ["High School", "Electronics", "Science"],
    },
  ];

  const data = activeSection === "experience" ? experienceData : educationData;

  return (
    <section className="timeline section" id="experience">
      <h2 className="section__title">Timeline</h2>
      <span className="section__subtitle">My professional journey</span>
      <div className="category-buttons">
        {Object.entries(categories).map(([key, { icon, name }]) => (
          <button
            key={key}
            className={`category-button ${
              activeSection === key ? "active" : ""
            }`}
            onClick={() => setActiveSection(key)}
          >
            {icon} {name}
          </button>
        ))}
      </div>
      <div className="timeline-container">
        {data.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>
                {item.title} @{item.institution || item.company}
              </h3>
              <p>{item.date}</p>
              <p>{item.description}</p>
              <div className="skill-tags">
                {item.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Experience;
