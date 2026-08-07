import { Link } from "react-router";
import PageHeading from "../../../components/PageHeading";
import AddButton from "../../../components/Button/AddButton";
import PageWrapper from "../../layout/PageWrapper";
import ManageTable from "../../../components/Table/ManageTable";
import ManageTableHead from "../../../components/Table/ManageTableHead";

const TeacherManage = () => {
  return (
    <>
      <PageWrapper>
        <PageHeading title="All Teachers" subtitle="Manage Teachers">
          <AddButton to="/teacher/create" text="Add New Teacher" />
        </PageHeading>

        <ManageTable>
          {/*
            name varchar
            designation varchar [note: 'Principal, Vice Principal, Head Teacher / Headmaster / Headmistress,
            Assistant Head Teacher, Senior Teacher, Assistant Teacher, Lecturer (Common in colleges)']
            address varchar
            phone varchar
            qualifiactions text
            subject_id varchar
            photo varchar
          
          
          */}
          <ManageTableHead
            heads={["PHOTO", "NAME", "DESIGNATION", "ADDRESS", "PHONE NO.", "QUALIFIACTIONS", "SUBJECT_ID", "ACTION"]}
          />
          <tbody>
            {/* Row 1 */}
            <tr>
              <td>
                <img src="https://i.pravatar.cc/150" alt="Teacher" className="rounded-circle" width="40" height="40" />
              </td>
              <td className="align-middle fw-bold">Rahat Khan</td>
              <td className="align-middle">Assistant Teacher</td>
              <td className="align-middle">Mirpur, Dhaka</td>
              <td className="align-middle">01711223344</td>
              <td className="align-middle">B.Ed in Mathematics, M.Sc</td>
              <td className="align-middle">SUB-001</td>
              <td className="align-middle p-0">
                <Link to="/teacher/edit/1" className="btn icon btn-primary">
                  <i className="bi bi-pencil-square"></i>
                </Link>
                <button type="button" className="btn icon btn-danger ms-2">
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>

            {/* Row 2 */}
            <tr>
              <td>
                <img src="https://i.pravatar.cc/151" alt="Teacher" className="rounded-circle" width="40" height="40" />
              </td>
              <td className="align-middle fw-bold">Ayesha Siddiqua</td>
              <td className="align-middle">Lecturer</td>
              <td className="align-middle">Uttara, Dhaka</td>
              <td className="align-middle">01822334455</td>
              <td className="align-middle">M.A in English Literature</td>
              <td className="align-middle">SUB-002</td>
              <td className="align-middle p-0">
                <Link to="/teacher/edit/2" className="btn icon btn-primary">
                  <i className="bi bi-pencil-square"></i>
                </Link>
                <button type="button" className="btn icon btn-danger ms-2">
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>

            {/* Row 3 */}
            <tr>
              <td>
                <img src="https://i.pravatar.cc/152" alt="Teacher" className="rounded-circle" width="40" height="40" />
              </td>
              <td className="align-middle fw-bold">Tanvir Ahmed</td>
              <td className="align-middle">Senior Teacher</td>
              <td className="align-middle">Dhanmondi, Dhaka</td>
              <td className="align-middle">01933445566</td>
              <td className="align-middle">B.Sc in Physics, 5 Years Exp</td>
              <td className="align-middle">SUB-003</td>
              <td className="align-middle p-0">
                <Link to="/teacher/edit/3" className="btn icon btn-primary">
                  <i className="bi bi-pencil-square"></i>
                </Link>
                <button type="button" className="btn icon btn-danger ms-2">
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </ManageTable>
      </PageWrapper>
    </>
  );
};

export default TeacherManage;
