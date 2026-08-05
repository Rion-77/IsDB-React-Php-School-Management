import { createBrowserRouter } from "react-router";

// Routes
import App from "./App.tsx";
import Dashboard from "./views/pages/Dashboard.tsx";
import Page404 from "./views/pages/Page404.tsx";
//User
import UserCreate from "./views/pages/user/UserCreate.tsx";
import UserManage from "./views/pages/user/UserManage.tsx";
import UserEdit from "./views/pages/user/UserEdit.tsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //prettier-ignore
    children: [
      {path: "/",element: <Dashboard />,},
      {path: "/user",element: <UserManage />,},
      {path: "/user/create",element: <UserCreate />,},
      {path: "/user/edit/:userId",element: <UserEdit />,},
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);
