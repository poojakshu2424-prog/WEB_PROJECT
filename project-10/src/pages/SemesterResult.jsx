
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useStudent } from "../context/StudentContext";

function SemesterResult({ semester }) {
  const { student, semester1, semester2 } = useStudent();
  const navigate = useNavigate();
  const { id } = useParams();

  const selectedSemester = id
    ? Number(id)
    : semester;

  const courses =
    selectedSemester === 1 ? semester1 : semester2;

  const examDate =
    selectedSemester === 1
      ? "NOVEMBER/DECEMBER 2025"
      : "APRIL/MAY 2026";

  useEffect(() => {
    document.title = `Semester ${selectedSemester} Results`;
  }, [selectedSemester]);

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
          <Link to="/full-report">Full report</Link>
        </nav>

        <div className="user-area">
          <strong>{student.name}</strong>
          <button
            className="logout-btn"
            onClick={() => navigate("/")}
          >
            Log out
          </button>
        </div>
      </header>

      <main className="results-content">
        <p className="eyebrow">ACADEMIC RECORDS</p>
        <h1>Semester {selectedSemester} Results</h1>
        <p className="welcome-text">
          {student.name} · Register No: {student.regNo}
        </p>

        <div className="exam-filter">
          <label htmlFor="exam">Examination session</label>
          <select id="exam" value={examDate} disabled>
            <option>{examDate}</option>
          </select>
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
              {courses.map((course) => (
                <tr key={course.code}>
                  <td>{selectedSemester}SEM</td>
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

          {selectedSemester === 1 ? (
            <Link className="primary-btn" to="/semester/2">
              View Semester 2 →
            </Link>
          ) : (
            <Link className="primary-btn" to="/full-report">
              View full report →
            </Link>
          )}
        </div>
      </main>
    </div>
  );
}

export default SemesterResult;