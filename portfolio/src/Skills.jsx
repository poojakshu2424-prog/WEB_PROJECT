import React from "react";

function Skills() {

  const skills = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Java", icon: "☕" },
    { name: "Python", icon: "🐍" },
    { name: "Figma", icon: "🖌️" },
    { name: "GitHub", icon: "🔗" }
  ];

  return (
    <section className="page">

      <p className="small-title">WHAT I KNOW</p>

      <h1>My <span>Skills</span></h1>

      <div className="skills">

        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>

            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>

            <div className="progress">
              <div className="progress-bar"></div>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;