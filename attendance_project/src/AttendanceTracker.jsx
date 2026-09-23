import { useState } from "react";
import "./AttendanceTracker.css";

function AttendanceTracker() {
  const [students, setStudents] = useState([
    { id: 1, name: "Pooja", status: "Absent" },
    { id: 2, name: "lamika", status: "Absent" },
    { id: 3, name: "Gayathri", status: "Absent" },
    { id: 4, name: "Saranya", status: "Absent" },
    { id: 5, name: "Maytha", status: "Absent" },
    { id: 6, name: "Radhika", status: "Absent" },
    { id: 7, name: "Elena", status: "Absent" },
    { id: 8, name: "Yazhini", status: "Absent" },
    { id: 9, name: "Ridhazika", status: "Absent" },
    { id: 10, name: "Harsika", status: "Absent" },

  ]);

  function markAttendance(id, status) {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, status: status }
          : student
      )
    );
  }

  const present = students.filter(
    (student) => student.status === "Present"
  ).length;

  const absent = students.filter(
    (student) => student.status === "Absent"
  ).length;

  return (
    <div className="tracker">

      <h1>Student Attendance Tracker</h1>

      <div className="summary">
        <div className="present-box">
          <h2>{present}</h2>
          <p>Present</p>
        </div>

        <div className="absent-box">
          <h2>{absent}</h2>
          <p>Absent</p>
        </div>
      </div>

      <div className="students">

        {students.map((student) => (
          <div className="student" key={student.id}>

            <span>
              {student.id}. {student.name}
            </span>

            <span className={student.status.toLowerCase()}>
              {student.status}
            </span>

            <div>
              <button
                onClick={() =>
                  markAttendance(student.id, "Present")
                }
              >
                Present
              </button>

              <button
                onClick={() =>
                  markAttendance(student.id, "Absent")
                }
              >
                Absent
              </button>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default AttendanceTracker;