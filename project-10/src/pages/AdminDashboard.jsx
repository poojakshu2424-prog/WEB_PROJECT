import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Admin Dashboard";
  }, []);

  function handleLogout() {
    navigate("/");
  }

  return (
    <div className="portal">
      <nav className="navbar">
        <h2 className="brand">PDKV Admin Portal</h2>
        <button className="secondary-btn" onClick={handleLogout}>
          Logout
        </button>
      </nav>

      <div className="results-content">
        <h1>Welcome, Admin!</h1>
        <p>Manage student academic records.</p>

        <div className="profile-card">
          <h3>Admin Dashboard</h3>
          <p>View and manage student semester results.</p>

          <button
            className="primary-btn"
            onClick={() => navigate("/full-report")}
          >
            View Student Report
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;