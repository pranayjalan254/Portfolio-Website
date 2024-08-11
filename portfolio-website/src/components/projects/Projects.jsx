import React, { useState, useRef, useEffect } from "react";
import "./projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import VideoPlayer from "./Videoplayer";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = {
    all: { icon: "🔧", name: "All" },
    frontend: { icon: "🖥️", name: "Frontend" },
    backend: { icon: "🔒", name: "Backend" },
    fullstack: { icon: "🌐", name: "Full Stack" },
    machine_learning: { icon: "🤖", name: "Machine Learning" },
  };

  const projects = [
    {
      title: "Wound Area Estimator",
      description:
        "A web application that estimates the area of a wound using image processing techniques.",
      video: "/wound-area.mp4",
      categories: ["fullstack"],
      github: "https://github.com/pranayjalan254/wound-sensor",
      live: "https://wound-sensor.vercel.app/",
      tags: ["React", "Flask", "Python", "Google Cloud"],
    },
    {
      title: "Email/SMS Spam Classifier",
      description:
        "A practice project to familiarize with machine learning and natural language processing.",
      video: "/wound-area.mp4",
      categories: ["machine_learning"],
      github:
        "https://github.com/pranayjalan254/Machine-Learning-Projects/tree/main/spam-email-classifier",
      live: "",
      tags: ["Logistic Regression", "Naive Bayes", "Python", "NLTK"],
    },
    {
      title: "Task Manager API",
      description:
        "A practice project to learn about RESTful APIs and CRUD operations.",
      video: "/task-manager.mp4",
      categories: ["backend"],
      github: "https://github.com/pranayjalan254/Task-Manager",
      tags: ["Nodejs", "RestAPIs", "Express", "Practice"],
    },
    {
      title: "BITS Blockchain Club Website",
      description: "A website for the blockchain club of BITS Pilani",
      video: "/blockchain-club.mp4",
      categories: ["frontend"],
      github: "https://github.com/BITS-BLOCKCHAIN/BitsBlockchainWebsite",
      live: "https://bitsblockchain.vercel.app/",
      tags: ["React", "Vercel", "Club"],
    },
    {
      title: "Bank Loan Management System",
      description: "A practice project to learn MERN stack and Restful APIs.",
      video: "/loan.mp4",
      categories: ["fullstack"],
      github: "https://github.com/yourusername/task-api",
      live: "https://bank-loan-management-system.vercel.app/",
      tags: ["MERN", "RestAPIs", "Practice"],
    },
    {
      title: "Deadman Switch",
      description:
        "A very simple project to get started with solidity and blockchain.",
      video: "/deadman.png",
      categories: ["backend"],
      github: "https://github.com/pranayjalan254/deadmanswitch",
      tags: ["Blockchain", "Solidity", "Practice"],
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(activeCategory)
        );

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">My Projects</h2>
      <span className="section__subtitle">
        List of all projects made till now
      </span>
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
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card">
            <VideoPlayer src={project.video} playbackRate={2} />
            <div className="project-info">
              <h4 className="project__title">{project.title}</h4>
              <p className="project__des">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <FaGithub />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
