import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";

// Css and Js
import "./assets/compiled/css/app.css";
import "./assets/compiled/css/app-dark.css";
import "./assets/compiled/css/iconly.css";
import "./assets/css/custom.css";
// Js
import "./assets/static/js/components/dark.js";



import { routes } from "./Routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />,
  </StrictMode>,
);
