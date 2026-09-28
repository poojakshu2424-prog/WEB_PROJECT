import React from "react";

function About() {
  return (
    <section className="page">

      <p className="small-title">GET TO KNOW ME</p>

      <h1>About <span>Me</span></h1>

      <div className="about-container">

        <div className="about-card">
          <h2>Who I Am</h2>

          <p>
            I am a Computer Science and Engineering student
            passionate about technology, UI/UX design and
            software development.
          </p>

          <p>
            I enjoy creating clean, modern and user-friendly
            websites and applications by combining creativity
            with programming.
          </p>
        </div>

        <div className="details-card">

          <div>
            <h3>🎓 Education</h3>
            <p>B.E Computer Science & Engineering</p>
          </div>

          <div>
            <h3>🏫 College</h3>
            <p>Prince Dr. K. Vasudevan College</p>
          </div>

          <div>
            <h3>📍 Location</h3>
            <p>Chennai, Tamil Nadu</p>
          </div>

          <div>
            <h3>💻 Interest</h3>
            <p>Web Development & UI/UX</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;