import React from "react";
import "./projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = {
    all: { icon: "🔧", name: "All" },
    frontend: { icon: "🖥️", name: "Frontend" },
    backend: { icon: "🔒", name: "Backend" },
    fullstack: { icon: "🌐", name: "Full Stack" },
  };

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-featured online shopping platform with user authentication, product catalog, and payment integration.",
      image: "https://picsum.photos/200/300",
      categories: ["fullstack"],
      github: "https://github.com/yourusername/ecommerce",
      live: "https://your-ecommerce.com",
      tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather application that displays current weather and forecasts for multiple cities.",
      image: "https://picsum.photos/200/300",
      categories: ["frontend"],
      github: "https://github.com/yourusername/weather-app",
      live: "https://your-weather-app.com",
      tags: ["React", "API", "CSS3", "JavaScript"],
    },
    {
      title: "Task Management API",
      description:
        "RESTful API for a task management system with user authentication and task CRUD operations.",
      image: "https://picsum.photos/200/300",
      categories: ["backend"],
      github: "https://github.com/yourusername/task-api",
      live: "https://your-task-api.com",
      tags: ["Node.js", "Express", "MongoDB", "JWT"],
    },
    {
      title: "Task Management API",
      description:
        "RESTful API for a task management system with user authentication and task CRUD operations.",
      image: "https://picsum.photos/200/300",
      categories: ["backend"],
      github: "https://github.com/yourusername/task-api",
      live: "https://your-task-api.com",
      tags: ["Node.js", "Express", "MongoDB", "JWT"],
    },
    {
      title: "Task Management API",
      description:
        "RESTful API for a task management system with user authentication and task CRUD operations.",
      image: "https://picsum.photos/200/300",
      categories: ["backend"],
      github: "https://github.com/yourusername/task-api",
      live: "https://your-task-api.com",
      tags: ["Node.js", "Express", "MongoDB", "JWT"],
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
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <h4 className="project__title">{project.title}</h4>
              <p>{project.description}</p>
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
