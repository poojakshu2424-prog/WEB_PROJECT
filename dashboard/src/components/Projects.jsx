import { FiArrowUpRight } from 'react-icons/fi'

const GITHUB_URL = 'https://github.com/poojakshu2424-prog'

const PROJECTS = [
  {
    title: 'Student Dashboard',
    tech: 'React.js, JSX, CSS',
    description:
      'A responsive student dashboard interface designed to organize academic information and student-related details.',
  },
  {
    title: 'Personal Portfolio',
    tech: 'React.js, JSX, CSS',
    description:
      'A modern personal portfolio website showcasing skills, projects and academic background.',
  },
  {
    title: 'Web Interface Project',
    tech: 'HTML, CSS, JavaScript',
    description:
      'A responsive web interface focused on clean design, usability and user experience.',
  },
]

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section-inner">
        <p className="eyebrow">// projects</p>
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">A few things I've built while learning to code.</p>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="project-card-top">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-tech">{project.tech}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project <FiArrowUpRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
