import { FiFigma, FiLayout, FiDatabase } from 'react-icons/fi'
import { DiJava, DiPython } from 'react-icons/di'
import { TbBinaryTree2 } from 'react-icons/tb'

const SKILLS = [
  {
    icon: FiFigma,
    name: 'UI/UX Design',
    status: 'Developing',
    description: 'Creating user-friendly and visually engaging digital experiences.',
  },
  {
    icon: DiJava,
    name: 'Java',
    status: 'Learning',
    description: 'Learning object-oriented programming and application development.',
  },
  {
    icon: DiPython,
    name: 'Python',
    status: 'Exploring',
    description: 'Exploring programming, problem solving and automation.',
  },
  {
    icon: FiLayout,
    name: 'Web Interface',
    status: 'Developing',
    description: 'Building responsive and interactive web interfaces.',
  },
  {
    icon: TbBinaryTree2,
    name: 'Data Structures & Algorithms',
    status: 'Developing',
    description: 'Developing problem-solving and algorithmic thinking skills.',
  },
  {
    icon: FiDatabase,
    name: 'DBMS',
    status: 'Learning',
    description: 'Learning database concepts, queries and data management.',
  },
]

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section-inner">
        <p className="eyebrow">// skills</p>
        <h2 className="section-title">What I'm Learning</h2>
        <p className="section-subtitle">
          Skills I'm actively building through coursework and hands-on projects.
        </p>

        <div className="skills-grid">
          {SKILLS.map(({ icon: Icon, name, status, description }) => (
            <div className="skill-card" key={name}>
              <div className="skill-icon">
                <Icon size={26} />
              </div>
              <h3 className="skill-name">{name}</h3>
              <p className="skill-description">{description}</p>
              <span className="skill-status">{status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
