import React from "react";

function Projects() {

  const projects = [
    {
      icon: "🍽️",
      title: "Restaurant Website",
      text: "A modern responsive restaurant website with menu, about, contact and reservation pages.",
      tech: "HTML • CSS • JavaScript"
    },
    {
      icon: "🔷",
      title: "Digital Shape Generator",
      text: "A web application that generates different digital shapes based on user input.",
      tech: "HTML • CSS • JavaScript"
    },
    {
      icon: "📂",
      title: "File Data Processing",
      text: "An application designed to process and manage data using external modules.",
      tech: "Python"
    },
    {
      icon: "🎓",
      title: "Student Course Enrollment",
      text: "A Java application for managing students and their course enrollment.",
      tech: "Java • OOP"
    }
  ];

  return (
    <section className="page">

      <p className="small-title">MY RECENT WORK</p>

      <h1>Featured <span>Projects</span></h1>

      <div className="projects">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <div className="project-icon">
              {project.icon}
            </div>

            <h2>{project.title}</h2>

            <p>{project.text}</p>

            <div className="tech">
              {project.tech}
            </div>

            <button>View Project →</button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;