import { Link } from "react-router";
import PageHeading from "../../../components/PageHeading";
import AddButton from "../../../components/Button/AddButton";
import PageWrapper from "../../layout/PageWrapper";
import ManageTable from "../../../components/Table/ManageTable";
import ManageTableHead from "../../../components/Table/ManageTableHead";

const ExamTypeManage = () => {
  return (
    <>
      <PageWrapper>
        <PageHeading title="All Exam Types" subtitle="Manage Exam Types.">
          <AddButton to="/exam-type/create" text="Add New Exam Type" />
        </PageHeading>

        <ManageTable>
          <ManageTableHead heads={["EXAM TYPE", "ACTION"]} />
          <tbody>
            <tr>
              <td className="text-bold-500">Half Yearly</td>
              <td>
                <Link to="/exam-type/edit/1" className="btn icon btn-primary">
                  <i className="bi bi-pencil"></i>
                </Link>
                <button type="button" className="btn icon btn-danger ms-2">
                  <i className="bi bi-x"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td className="text-bold-500">Annual Exam</td>
              <td>
                <Link to="/exam-type/edit/2" className="btn icon btn-primary">
                  <i className="bi bi-pencil"></i>
                </Link>
                <button type="button" className="btn icon btn-danger ms-2">
                  <i className="bi bi-x"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td className="text-bold-500">Monthly Test</td>
              <td>
                <Link to="/exam-type/edit/3" className="btn icon btn-primary">
                  <i className="bi bi-pencil"></i>
                </Link>
                <button type="button" className="btn icon btn-danger ms-2">
                  <i className="bi bi-x"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </ManageTable>
      </PageWrapper>
    </>
  );
};

export default ExamTypeManage;
