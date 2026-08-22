import { Link } from "react-router";
import PageHeading from "../../../components/PageHeading";
import AddButton from "../../../components/Button/AddButton";
import PageWrapper from "../../layout/PageWrapper";
import ManageTable from "../../../components/Table/ManageTable";
import ManageTableHead from "../../../components/Table/ManageTableHead";
import { useEffect, useState } from "react";

import {
  type StudentSchema,
  defaultStudent,
} from "../../../interfaces/Student";
import { api } from "../../../config";

const StudentManage = () => {
  const [students, setStudents] = useState<StudentSchema[]>([defaultStudent]);

  const getStudents = () => {
    api
      .get(`students`)
      .then((res) => {
        console.log(res.data);
        setStudents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <>
      <PageWrapper>
        <PageHeading title="All Students" subtitle="Manage Students">
          <AddButton to="/student/create" text="Add New Student" />
        </PageHeading>

        <ManageTable>
          <ManageTableHead
            heads={[
              "PHOTO",
              "NAME",
              "ADDRESS",
              "PHONE NO.",
              "CLASS",
              "SECTION",
              "ACTION",
            ]}
          />
          <tbody>
            {/* Row 1 */}
            {students.map((student) => (
              <tr>
                <td>
                  <img
                    src={`https://i.pravatar.cc/150?img=${student.id}`}
                    alt="Student"
                    className="rounded-circle"
                    width="40"
                    height="40"
                  />
                </td>
                <td className="align-middle fw-bold">
                  <Link to={`/student/details/${student.id}`}>
                    {student.name}
                  </Link>
                </td>

                <td className="align-middle">{student.address}</td>
                <td className="align-middle">{student.phone}</td>
                <td className="align-middle">Class 6</td>
                <td className="align-middle">A</td>
                <td className="align-middle p-0">
                  <Link to="/student/edit/1" className="btn icon btn-primary">
                    <i className="bi bi-pencil-square"></i>
                  </Link>
                  <button type="button" className="btn icon btn-danger ms-2">
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ManageTable>
      </PageWrapper>
    </>
  );
};

export default StudentManage;
