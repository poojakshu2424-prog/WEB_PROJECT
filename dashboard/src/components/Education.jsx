import { FiBookOpen } from 'react-icons/fi'

function Education() {
  return (
    <section id="education" className="section education">
      <div className="section-inner">
        <p className="eyebrow">// education</p>
        <h2 className="section-title">Education</h2>

        <div className="education-timeline">
          <div className="education-marker" aria-hidden="true">
            <span className="education-dot">
              <FiBookOpen size={18} />
            </span>
            <span className="education-line" />
          </div>

          <div className="education-item">
            <h3 className="education-degree">B.E. Computer Science and Engineering</h3>
            <p className="education-college">
              Prince Dr. K. Vasudevan College of Engineering and Technology
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
