function Home() {
  return (
    <section id="home" className="hero">

      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-inner">

        {/* LEFT SIDE */}
        <div className="hero-content">

          <p className="eyebrow">// hello, i'm</p>

          <h1 className="hero-title">
            Pooja <span className="hero-title-accent">R</span>
          </h1>

          <h2 className="hero-role">
            Computer Science & Engineering Student
          </h2>

          <p className="hero-subtitle">
            I'm a CSE student at{" "}
            <strong>
              Prince Dr. K. Vasudevan College of Engineering and Technology
            </strong>
            , passionate about creating clean user interfaces,
            learning modern technologies, and building meaningful digital
            experiences.
          </p>

          {/* SKILL TAGS */}
          <div className="hero-skills">
            <span>UI/UX</span>
            <span>Java</span>
            <span>Python</span>
            <span>Web Development</span>
          </div>

          {/* BUTTONS */}
          <div className="hero-actions">

            <a href="#skills" className="btn btn-primary">
              View My Skills
            </a>

            <a href="#contact" className="btn btn-secondary">
              Let's Connect
            </a>

          </div>

          {/* SOCIAL LINKS */}
          <div className="hero-links">

            <a
              href="https://github.com/poojakshu2424-prog"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/pooja-r-557322363/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a href="mailto:poojakshu2424@gmail.com">
              Email ↗
            </a>

          </div>

        </div>

        {/* RIGHT SIDE PHOTO */}
        <div className="hero-visual">

          <div className="photo-decoration"></div>

          <div className="photo-frame">

            {/* Later photo inga podalaam */}
            <div className="photo-placeholder">
              <span>PR</span>
            </div>

          </div>

          <div className="photo-info">
            <span className="status-dot"></span>
            <span>CSE STUDENT</span>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Home