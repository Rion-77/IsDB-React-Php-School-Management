import { Link } from "react-router";
import PageHeading from "../../../components/PageHeading";
import AddButton from "../../../components/Button/AddButton";
import PageWrapper from "../../layout/PageWrapper";
import ManageTable from "../../../components/Table/ManageTable";
import ManageTableHead from "../../../components/Table/ManageTableHead";

const StudentManage = () => {
  return (
    <>
      <PageWrapper>
        <PageHeading title="All Students" subtitle="Manage Students">
          <AddButton to="/student/create" text="Add New Student" />
        </PageHeading>

        <ManageTable>
          {/* name varchar
            father_name varchar
            mother_name varchar
            address varchar
            phone varchar
            class_id int
            section_id int
            photo varchar
          */}
          <ManageTableHead heads={["PHOTO", "NAME", "ADDRESS", "PHONE NO.", "CLASS", "SECTION", "ACTION"]} />
          <tbody>
            {/* Row 1 */}
            <tr>
              <td>
                <img
                  src="https://i.pravatar.cc/150?img=4"
                  alt="Student"
                  className="rounded-circle"
                  width="40"
                  height="40"
                />
              </td>
              <td className="align-middle fw-bold">
                <Link to="/student/details/1">Rahat Khan</Link>
              </td>

              <td className="align-middle">Mirpur, Dhaka</td>
              <td className="align-middle">01711223344</td>
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

            {/* Row 2 */}
            <tr>
              <td>
                <img
                  src="https://i.pravatar.cc/150?img=12"
                  alt="Student"
                  className="rounded-circle"
                  width="40"
                  height="40"
                />
              </td>
              <td className="align-middle fw-bold">
                <Link to="/student/details/1">Arafat Hossain</Link>
              </td>

              <td className="align-middle">Uttara, Dhaka</td>
              <td className="align-middle">01822334455</td>
              <td className="align-middle">Class 7</td>
              <td className="align-middle">B</td>
              <td className="align-middle p-0">
                <Link to="/student/edit/2" className="btn icon btn-primary">
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
                <img
                  src="https://i.pravatar.cc/150?img=2"
                  alt="Student"
                  className="rounded-circle"
                  width="40"
                  height="40"
                />
              </td>
              <td className="align-middle fw-bold">
                <Link to="/student/details/1">Tanvir Ahmed </Link>
              </td>
              <td className="align-middle">Dhanmondi, Dhaka</td>
              <td className="align-middle">01933445566</td>
              <td className="align-middle">Class 6</td>
              <td className="align-middle">A</td>
              <td className="align-middle p-0">
                <Link to="/student/edit/3" className="btn icon btn-primary">
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

export default StudentManage;
