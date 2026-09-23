import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AttendanceTracker from "./AttendanceTracker.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AttendanceTracker />
  </StrictMode>
);