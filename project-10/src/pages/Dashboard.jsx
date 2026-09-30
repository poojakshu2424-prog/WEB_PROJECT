
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStudent } from "../context/StudentContext";

function Dashboard() {
  const { student, semester1, semester2 } = useStudent();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Student Portal | Overview";
  }, []);

  function logout() {
    navigate("/");
  }

  return (
    <div className="portal">
      <header className="navbar">
        <div className="brand">
          <div className="brand-logo">PV</div>
          <div>
            <h3>PRINCE VASUDEVAN</h3>
            <p>STUDENT ACADEMIC PORTAL</p>
          </div>
        </div>

        <nav>
          <Link className="active-link" to="/dashboard">
            Overview
          </Link>
          <Link to="/full-report">Full report</Link>
        </nav>

        <div className="user-area">
          <div>
            <strong>{student.name}</strong>
            <small>STUDENT</small>
          </div>
          <button className="logout-btn" onClick={logout}>
            Log out
          </button>
        </div>
      </header>

      <main className="dashboard-content">
        <p className="eyebrow">STUDENT PORTAL · 2025–2026</p>

        <h1>Welcome, {student.name}</h1>
        <p className="welcome-text">
          Your academic results at a glance.
        </p>

        <section className="profile-card">
          <div>
            <span>REGISTER NUMBER</span>
            <strong>{student.regNo}</strong>
          </div>
          <div>
            <span>DEPARTMENT</span>
            <strong>{student.department}</strong>
          </div>
          <div>
            <span>YEAR</span>
            <strong>{student.year}</strong>
          </div>
          <div>
            <span>DATE OF BIRTH</span>
            <strong>{student.dob}</strong>
          </div>
        </section>

        <section className="semester-grid">
          <SemesterCard
            number="01"
            title="Semester 1"
            courses={semester1}
            credits="24"
            color="green"
            onView={() => navigate("/semester/1")}
          />

          <SemesterCard
            number="02"
            title="Semester 2"
            courses={semester2}
            credits="23"
            color="orange"
            onView={() => navigate("/semester/2")}
          />
        </section>

        <div className="dashboard-actions">
          <Link className="primary-btn" to="/semester/1">
            View Semester 1
          </Link>
          <Link className="secondary-btn" to="/semester/2">
            View Semester 2
          </Link>
          <Link className="secondary-btn" to="/full-report">
            View full report
          </Link>
        </div>
      </main>
    </div>
  );
}

function SemesterCard({
  number,
  title,
  courses,
  credits,
  color,
  onView,
}) {
  return (
    <article className={`semester-card ${color}`}>
      <div className="semester-heading">
        <div>
          <p className="eyebrow">ACADEMIC RESULTS</p>
          <h2>{title}</h2>
        </div>
        <span className="semester-number">{number}</span>
      </div>

      <div className="semester-stats">
        <div>
          <span>Credits</span>
          <strong>{credits}</strong>
        </div>
        <div>
          <span>Courses</span>
          <strong>{courses.length}</strong>
        </div>
        <div>
          <span>Result</span>
          <strong>PASS</strong>
        </div>
      </div>

      <button className="view-link" onClick={onView}>
        View {title.toLowerCase()} results →
      </button>
    </article>
  );
}

export default Dashboard;