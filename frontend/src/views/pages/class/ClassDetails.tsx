import { Link } from "react-router";
import { useParams } from "react-router";
import PageHeading from "../../../components/PageHeading";
import BackButton from "../../../components/Button/BackButton";
import PageWrapper from "../../layout/PageWrapper";
import ManageTable from "../../../components/Table/ManageTable";
import ManageTableHead from "../../../components/Table/ManageTableHead";
import { useEffect, useState } from "react";
import { type ClassSchema, defaultClass } from "../../../interfaces/Class";

// Backend Path
import { basePath } from "../../../config";

import {
  type StudentSchema,
  defaultStudent,
} from "../../../interfaces/Student";
import { api } from "../../../config";

const ClassDetails = () => {
  const [students, setStudents] = useState<StudentSchema[]>([defaultStudent]);
  const { classId } = useParams();
  const [classroom, setClassroom] = useState<ClassSchema>(defaultClass);

  // Get all students from database 
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

   // Get class data by api
  const getClass = () => {
    api
      .get(`class?id=${classId}`)
      .then((res) => {
        setClassroom(res.data);

      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getStudents();
    getClass();
  }, []);

  return (
    <>
      <PageWrapper>
        <PageHeading title="All Students" subtitle="Manage Students">
          <BackButton to="/class" text="Back to Class List" />
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
                    // src={`https://i.pravatar.cc/150?img=${student.id}`}
                    src={`${basePath}${student.photo}`}
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
                <td className="align-middle">{classroom.class_name}</td>
                <td className="align-middle">A</td>
                <td className="align-middle p-0">
                  <Link to={`/student/edit/${student.id}`} className="btn icon btn-primary">
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

export default ClassDetails;
