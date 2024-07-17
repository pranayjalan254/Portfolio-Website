import React from "react";
import "./skills.css";
import { useState } from "react";
import { ImHtmlFive } from "react-icons/im";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import { FaCircleNodes } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaFlask } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMongoose } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiPostman } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { AiOutlineDeploymentUnit } from "react-icons/ai";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = {
    all: { icon: "🔧", name: "All" },
    frontend: { icon: "🖥️", name: "Frontend" },
    backend: { icon: "🔒", name: "Backend" },
    database: { icon: <FaDatabase />, name: "Database" },
    deployment: { icon: <AiOutlineDeploymentUnit />, name: "Deployment" },
  };

  const skills = [
    { name: "C | C++", category: "backend", icon: "©️" },
    { name: "HTML", category: "frontend", icon: <ImHtmlFive /> },
    { name: "CSS", category: "frontend", icon: <FaCss3Alt /> },
    { name: "JavaScript", category: "frontend", icon: <TbBrandJavascript /> },
    { name: "Reactjs", category: "frontend", icon: <FaReact /> },
    { name: "Redux", category: "frontend", icon: <SiRedux /> },
    { name: "Nodejs", category: "backend", icon: <FaCircleNodes /> },
    { name: "Expressjs", category: "backend", icon: <SiExpress /> },
    { name: "Postman", category: "backend", icon: <SiPostman /> },
    { name: "MongoDB", category: "database", icon: <SiMongodb /> },
    { name: "Mongoose", category: "database", icon: <SiMongoose /> },

    { name: "Firebase", category: "database", icon: <IoLogoFirebase /> },
    { name: "Python", category: "backend", icon: <FaPython /> },
    { name: "Flask", category: "backend", icon: <FaFlask /> },
    { name: "GitHub", category: "deployment", icon: <FaGithub /> },
    {
      name: "Google Cloud",
      category: "deployment",
      icon: <SiGooglecloud />,
    },
    { name: "Vercel", category: "deployment", icon: <SiVercel /> },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="skills-section">
        <div className="category-buttons">
          {Object.entries(categories).map(([key, { icon, name }]) => (
            <button
              key={key}
              className={`category-button ${
                activeCategory === key ? "active" : ""
              }`}
              onClick={() => setActiveCategory(key)}
            >
              {icon} {name}
            </button>
          ))}
        </div>
        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="skill-item">
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
