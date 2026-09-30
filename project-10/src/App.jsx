import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SemesterResult from "./pages/SemesterResult";
import FullReport from "./pages/FullReport";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      {/* Student Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Semester Results */}
      <Route
        path="/semester/1"
        element={<SemesterResult semester={1} />}
      />

      <Route
        path="/semester/2"
        element={<SemesterResult semester={2} />}
      />

      {/* Full Student Report */}
      <Route path="/full-report" element={<FullReport />} />

      {/* Admin Dashboard */}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin-login" element={<AdminLogin />} />

      {/* Invalid URL */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;