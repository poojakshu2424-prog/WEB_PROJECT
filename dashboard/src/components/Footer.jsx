import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-name">Pooja R</span>
          <span className="footer-role">Computer Science &amp; Engineering Student</span>
        </div>

        <div className="footer-social">
          <a
            href="https://github.com/poojakshu2424-prog"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/pooja-r-557322363/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={18} />
          </a>
          <a href="mailto:poojakshu2424@gmail.com" aria-label="Email">
            <FiMail size={18} />
          </a>
        </div>

        <p className="footer-copy">© {year} Pooja R. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
