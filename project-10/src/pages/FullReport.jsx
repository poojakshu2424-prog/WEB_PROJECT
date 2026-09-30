
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStudent } from "../context/StudentContext";

function FullReport() {
  const { student, semester1, semester2 } = useStudent();

  const allCourses = [
    ...semester1.map((course) => ({
      ...course,
      semester: "1SEM",
    })),
    ...semester2.map((course) => ({
      ...course,
      semester: "2SEM",
    })),
  ];

  useEffect(() => {
    document.title = "Full Academic Report";
  }, []);

  return (
    <div className="portal">
      <header className="navbar">
        <Link to="/dashboard" className="brand">
          <div className="brand-logo">PV</div>
          <div>
            <h3>PRINCE VASUDEVAN</h3>
            <p>STUDENT ACADEMIC PORTAL</p>
          </div>
        </Link>

        <nav>
          <Link to="/dashboard">Overview</Link>
          <Link className="active-link" to="/full-report">
            Full report
          </Link>
        </nav>

        <div className="user-area">
          <strong>{student.name}</strong>
          <Link className="logout-btn" to="/">
            Log out
          </Link>
        </div>
      </header>

      <main className="results-content">
        <p className="eyebrow">ACADEMIC RECORDS</p>
        <h1>Full Academic Report</h1>
        <p className="welcome-text">
          {student.name} · Register No: {student.regNo}
        </p>

        <div className="report-info">
          <div>
            <span>DEPARTMENT</span>
            <strong>{student.department}</strong>
          </div>
          <div>
            <span>ACADEMIC YEAR</span>
            <strong>{student.year}</strong>
          </div>
          <div>
            <span>COURSES</span>
            <strong>{allCourses.length}</strong>
          </div>
        </div>

        <div className="table-container">
          <table className="results-table">
            <thead>
              <tr>
                <th>Semester</th>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Credits</th>
                <th>Grade</th>
                <th>Result</th>
              </tr>
            </thead>

            <tbody>
              {allCourses.map((course) => (
                <tr key={course.code}>
                  <td>{course.semester}</td>
                  <td>{course.code}</td>
                  <td>{course.name}</td>
                  <td>{course.credits}</td>
                  <td>
                    <span className="grade-badge">
                      {course.grade}
                    </span>
                  </td>
                  <td>
                    <span className="pass-badge">
                      {course.result}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="results-footer">
          <Link className="secondary-btn" to="/dashboard">
            ← Back to overview
          </Link>
          <Link className="primary-btn" to="/semester/1">
            View Semester 1
          </Link>
          <Link className="secondary-btn" to="/semester/2">
            View Semester 2
          </Link>
        </div>
      </main>
    </div>
  );
}

export default FullReport;