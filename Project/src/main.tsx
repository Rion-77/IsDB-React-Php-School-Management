import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

// Css and Js
import "./assets/compiled/css/app.css";
import "./assets/compiled/css/app-dark.css";
import "./assets/compiled/css/iconly.css";

// Routes
import App from "./App.tsx";
import Dashboard from "./views/pages/Dashboard.tsx";
import Page404 from "./views/pages/Page404.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "*",
    element: <Page404/>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
);
