import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Hobbies from "./Hobbies.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Hobbies />
  </StrictMode>
);