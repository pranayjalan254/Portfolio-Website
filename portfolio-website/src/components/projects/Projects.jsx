import React, { useState, useRef, useEffect } from "react";
import "./projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import VideoPlayer from "./Videoplayer";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = {
    all: { icon: "🔧", name: "All" },
    frontend: { icon: "🖥️", name: "Frontend" },
    fullstack: { icon: "🌐", name: "Full Stack" },
    blockchain: { icon: "🤖", name: "Blockchain" },
    machine_learning: { icon: "🤖", name: "Machine Learning" },
  };

  const projects = [
    {
      title: "DocVault",
      description:
        "A decentralized credential issuance platform that allows institutions to issue and verify credentials on the blockchain.",
      video: "/doc-vault.mp4",
      categories: ["blockchain", "fullstack"],
      github: "https://github.com/pranayjalan254/docVault",
      live: "https://doc-vault.vercel.app/",
      tags: ["ReactJS", "Solidity", "Firebase", "Blockchain"],
    },
    {
      title: "TokenTrackr",
      description:
        "A Dapp that allows users to track their token holdings, historical balances and allowances on the Ethereum blockchain.",
      video: "/tokentrackr.mp4",
      categories: ["blockchain", "fullstack"],
      github: "https://github.com/pranayjalan254/TokenTrackr",
      live: "https://token-trackr.vercel.app/",
      tags: ["ReactJS", "Typescript", "Web3Auth", "Blockchain"],
    },
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
      video: "/spam.mp4",
      categories: ["machine_learning"],
      github:
        "https://github.com/pranayjalan254/Machine-Learning-Projects/tree/main/spam-email-classifier",
      live: "https://github.com/pranayjalan254/Machine-Learning-Projects/tree/main/spam-email-classifier",
      tags: ["Logistic Regression", "Naive Bayes", "Python", "NLTK"],
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
          <div key={`${project.title}-${index}`} className="project-card">
            <VideoPlayer
              key={`${project.title}-video-${index}`}
              src={project.video}
              playbackRate={2}
            />
            <div className="project-info">
              <h4 className="project__title">{project.title}</h4>
              <p className="project__des">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={`${project.title}-${tag}-${tagIndex}`}
                    className="project-tag"
                  >
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
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
