import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from 'react-icons/fi'

const CONTACTS = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'poojakshu2424@gmail.com',
    href: 'mailto:poojakshu2424@gmail.com',
    external: false,
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'poojakshu2424-prog',
    href: 'https://github.com/poojakshu2424-prog',
    external: true,
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'pooja-r',
    href: 'https://www.linkedin.com/in/pooja-r-557322363/',
    external: true,
  },
]

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="section-inner">
        <p className="eyebrow">// contact</p>
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">
          Open to internships, collaborations, and conversations about tech.
        </p>

        <div className="contact-grid">
          {CONTACTS.map(({ icon: Icon, label, value, href, external }) => (
            <a
              key={label}
              href={href}
              className="contact-card"
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <span className="contact-icon">
                <Icon size={22} />
              </span>
              <span className="contact-text">
                <span className="contact-label">{label}</span>
                <span className="contact-value">{value}</span>
              </span>
              <FiArrowUpRight className="contact-arrow" size={18} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
