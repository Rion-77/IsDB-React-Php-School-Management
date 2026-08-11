import { createBrowserRouter } from "react-router";

// Layout Routes
import App from "./App.tsx";
import Dashboard from "./views/pages/Dashboard.tsx";
import Page404 from "./views/pages/Page404.tsx";
import Login from "./views/pages/Login.tsx";
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
// Group
import GroupCreate from "./views/pages/group/GroupCreate.tsx";
import GroupManage from "./views/pages/group/GroupManage.tsx";
import GroupEdit from "./views/pages/group/GroupEdit.tsx";
// Exam
import ExamManage from "./views/pages/exam/ExamManage.tsx";
import ExamCreate from "./views/pages/exam/ExamCreate.tsx";
import ExamEdit from "./views/pages/exam/ExamEdit.tsx";
// Exam Type
import ExamTypeManage from "./views/pages/exam-type/ExamTypeManage.tsx";
import ExamTypeCreate from "./views/pages/exam-type/ExamTypeCreate.tsx";
import ExamTypeEdit from "./views/pages/exam-type/ExamTypeEdit.tsx";
// Fee
import FeeHistory from "./views/pages/fee/FeeHistoy.tsx";
import FeeCollection from "./views/pages/fee/FeeCollection.tsx";
// Fee Type
import FeeTypeManage from "./views/pages/fee-type/FeeTypeManage.tsx";
import FeeTypeCreate from "./views/pages/fee-type/FeeTypeCreate.tsx";
import FeeTypeEdit from "./views/pages/fee-type/FeeTypeEdit.tsx";
import StudentDetails from "./views/pages/student/StudentDetails.tsx";

export const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
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
      {path: "/student/details/:studentId",element: <StudentDetails />,},
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
      // Subject
      {path: "/subject",element: <SubjectManage />,},
      {path: "/subject/create",element: <SubjectCreate />,},
      {path: "/subject/edit/:subjectId",element: <SubjectEdit />,},
      // Group
      {path: "/group",element: <GroupManage />,},
      {path: "/group/create",element: <GroupCreate />,},
      {path: "/group/edit/:groupId",element: <GroupEdit />,},
      // Exam
      {path: "/exam",element: <ExamManage />,},
      {path: "/exam/create",element: <ExamCreate />,},
      {path: "/exam/edit/:examId",element: <ExamEdit />,},
      // Exam Type
      {path: "/exam-type",element: <ExamTypeManage />,},
      {path: "/exam-type/create",element: <ExamTypeCreate />,},
      {path: "/exam-type/edit/:examTypeId",element: <ExamTypeEdit />,},
      // Fee
      {path: "/fee-history",element: <FeeHistory />,},
      {path: "/fee-collection",element: <FeeCollection />,},
      // Fee Type
      {path: "/fee-type",element: <FeeTypeManage />,},
      {path: "/fee-type/create",element: <FeeTypeCreate />,},
      {path: "/fee-type/edit/:feeTypeId",element: <FeeTypeEdit />,},
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);
