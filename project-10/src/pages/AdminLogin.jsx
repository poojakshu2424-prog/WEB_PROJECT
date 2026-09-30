import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Admin Login | PDKV Portal";
  }, []);

  function handleLogin(e) {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      navigate("/admin");
    } else {
      setError("Invalid Admin Username or Password!");
    }
  }

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleLogin}>
        <div className="college-logo">
          <span>PDKV</span>
        </div>

        <h2>Admin Login</h2>
        <p className="login-subtitle">
          Student Academic Portal
        </p>

        <div className="login-field">
          <input
            type="text"
            placeholder="Admin Username"
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
            type="password"
            placeholder="Password"
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
          Login as Admin
        </button>

        <p className="demo-note">
          Username: admin
          <br />
          Password: admin123
        </p>

        <button
          type="button"
          className="secondary-btn"
          onClick={() => navigate("/")}
        >
          Back to Student Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;