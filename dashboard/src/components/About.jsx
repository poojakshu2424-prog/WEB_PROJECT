const INFO_ROWS = [
  { label: 'Name', value: 'Pooja R' },
  { label: 'Department', value: 'Computer Science & Engineering' },
  { label: 'College', value: 'Prince Dr. K. Vasudevan College of Engineering and Technology' },
  { label: 'Focus', value: 'Software Development & UI/UX' },
]

function About() {
  return (
    <section id="about" className="section about">
      <div className="section-inner">
        <p className="eyebrow">// about</p>
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          <p className="about-text">
            I'm Pooja, a Computer Science and Engineering student at Prince Dr. K. Vasudevan
            College of Engineering and Technology. I am currently exploring UI/UX Design, Java,
            Python, Web Interface Development, Data Structures &amp; Algorithms, and DBMS. I enjoy
            learning through practical projects and continuously improving my technical and
            creative skills.
          </p>

          <div className="about-card">
            {INFO_ROWS.map((row) => (
              <div className="about-card-row" key={row.label}>
                <span className="about-card-label">{row.label}</span>
                <span className="about-card-value">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
