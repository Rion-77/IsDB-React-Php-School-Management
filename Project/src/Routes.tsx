import { createBrowserRouter } from "react-router";

// Layout Routes
import App from "./App.tsx";
import Dashboard from "./views/pages/Dashboard.tsx";
import Page404 from "./views/pages/Page404.tsx";
// User
import UserCreate from "./views/pages/user/UserCreate.tsx";
import UserManage from "./views/pages/user/UserManage.tsx";
import UserEdit from "./views/pages/user/UserEdit.tsx";
// Role
import RoleManage from "./views/pages/role/RoleManage.tsx";
import RoleCreate from "./views/pages/role/RoleCreate.tsx";
import RoleEdit from "./views/pages/role/RoleEdit.tsx";
// Student
import StudentManage from "./views/pages/student/StudentManage.tsx";
import StudentCreate from "./views/pages/student/StudentCreate.tsx";
import StudentEdit from "./views/pages/student/StudentEdit.tsx";
// Teacher
import TeacherManage from "./views/pages/teacher/TeacherManage.tsx";
import TeacherCreate from "./views/pages/teacher/TeacherCreate.tsx";
import TeacherEdit from "./views/pages/teacher/TeacherEdit.tsx";
// Class
import ClassCreate from "./views/pages/class/ClassCreate.tsx";
import ClassManage from "./views/pages/class/ClassManage.tsx";
import ClassEdit from "./views/pages/class/ClassEdit.tsx";
// Section
import SectionManage from "./views/pages/section/SectionManage.tsx";
import SectionCreate from "./views/pages/section/SectionCreate.tsx";
import SectionEdit from "./views/pages/section/SectionEdit.tsx";
// Subject
import SubjectManage from "./views/pages/subject/SubjectManage.tsx";
import SubjectCreate from "./views/pages/subject/SubjectCreate.tsx";
import SubjectEdit from "./views/pages/subject/SubjectEdit.tsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //prettier-ignore
    children: [
      {path: "/",element: <Dashboard />,},
      // User
      {path: "/user",element: <UserManage />,},
      {path: "/user/create",element: <UserCreate />,},
      {path: "/user/edit/:userId",element: <UserEdit />,},
      // Role
      {path: "/role",element: <RoleManage />,},
      {path: "/role/create",element: <RoleCreate />,},
      {path: "/role/edit/:roleId",element: <RoleEdit />,},
      // Student
      {path: "/student",element: <StudentManage />,},
      {path: "/student/create",element: <StudentCreate />,},
      {path: "/student/edit/:studentId",element: <StudentEdit />,},
       // Teacher
      {path: "/teacher",element: <TeacherManage />,},
      {path: "/teacher/create",element: <TeacherCreate />,},
      {path: "/teacher/edit/:teacherId",element: <TeacherEdit />,},
       // Class
      {path: "/class",element: <ClassManage />,},
      {path: "/class/create",element: <ClassCreate />,},
      {path: "/class/edit/:classId",element: <ClassEdit />,},
       // Section
      {path: "/section",element: <SectionManage />,},
      {path: "/section/create",element: <SectionCreate />,},
      {path: "/section/edit/:sectionId",element: <SectionEdit />,},
      // Section
      {path: "/subject",element: <SubjectManage />,},
      {path: "/subject/create",element: <SubjectCreate />,},
      {path: "/subject/edit/:subjectId",element: <SubjectEdit />,},
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);
