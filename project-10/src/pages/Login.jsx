import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [role, setRole] = useState("student");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Student Portal | Login";
  }, []);

  function handleLogin(e) {
    e.preventDefault();

    if (
      role === "student" &&
      username === "1PO24" &&
      password === "24-11-2006"
    ) {
      navigate("/dashboard");
    } else if (
      role === "admin" &&
      username === "admin" &&
      password === "admin123"
    ) {
      navigate("/admin");
    } else {
      setError("Invalid username or password!");
    }
  }

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleLogin}>
        <div className="college-logo">
          <span>PDKV</span>
        </div>

        <h2>Academic Portal</h2>
        <p className="login-subtitle">
          Student and Admin Login
        </p>

        <div className="role-selection">
          <button
            type="button"
            className={
              role === "student" ? "role-btn active" : "role-btn"
            }
            onClick={() => {
              setRole("student");
              setUsername("");
              setPassword("");
              setError("");
            }}
          >
            Student
          </button>

          <button
            type="button"
            className={
              role === "admin" ? "role-btn active" : "role-btn"
            }
            onClick={() => {
              setRole("admin");
              setUsername("");
              setPassword("");
              setError("");
            }}
          >
            Admin
          </button>
        </div>

        <h3>{role === "student" ? "Student Login" : "Admin Login"}</h3>

        <div className="login-field">
          <input
            type="text"
            placeholder={
              role === "student"
                ? "Enter Roll No"
                : "Enter Admin Username"
            }
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError("");
            }}
            required
          />
        </div>

        <div className="login-field">
          <input
            type={role === "student" ? "text" : "password"}
            placeholder={
              role === "student"
                ? "Date of Birth (DD-MM-YYYY)"
                : "Enter Admin Password"
            }
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            required
          />
        </div>

        {error && (
          <p className="error-message">{error}</p>
        )}

        <button className="login-btn" type="submit">
          Login
        </button>

        <p className="demo-note">
          {role === "student" ? (
            <>
              Roll No: 1PO24
              <br />
              DOB: 24-11-2006
            </>
          ) : (
            <>
              Username: admin
              <br />
              Password: admin123
            </>
          )}
        </p>
      </form>
    </div>
  );
}

export default Login;