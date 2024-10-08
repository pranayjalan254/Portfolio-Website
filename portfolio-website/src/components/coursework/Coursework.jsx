import "./coursework.css";
import React from "react";

const Coursework = () => {
  const subjects = [
    "Data Structures and Algorithms",
    "Database Management Systems",
    "Object-Oriented Programming",
    "Digital Design",
    "Microprocessors and Interfacing",
    "Microelectronics Circuits",
  ];

  return (
    <section className="section coursework">
      <div className="coursework-container">
        <h2 className="section__title">Relevant Coursework</h2>
        <div className="coursework-grid">
          {subjects.map((subject, index) => (
            <div key={index} className="coursework-card">
              <p>{subject}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Coursework;
