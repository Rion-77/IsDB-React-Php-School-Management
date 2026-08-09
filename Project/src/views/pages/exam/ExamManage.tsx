import { Link } from "react-router";
import PageHeading from "../../../components/PageHeading";
import AddButton from "../../../components/Button/AddButton";
import ManageTable from "../../../components/Table/ManageTable";
import ManageTableHead from "../../../components/Table/ManageTableHead";
import PageWrapper from "../../layout/PageWrapper";

const ExamManage = () => {
  return (
    <>
      <PageWrapper>
        <PageHeading
          title="All Examinations"
          subtitle="Manage your school's examinations."
        >
          <AddButton to="/exam/create" text="Add New Examination" />
        </PageHeading>
        <ManageTable>
          <ManageTableHead
            heads={[
              "EXAMINATION NAME",
              "EXAMINATION TYPE",
              "START DATE",
              "ACTION",
            ]}
          />
          <tbody>
            <tr>
              <td className="text-bold-500">Monthly-January</td>
              <td>Monthly Exam</td>
              <td>2026-01-01</td>
              <td>
                <Link to="/exam/edit/1" className="btn icon btn-primary">
                  <i className="bi bi-pencil"></i>
                </Link>
                <button type="button" className="btn icon btn-danger ms-2">
                  <i className="bi bi-x"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td className="text-bold-500">Monthly-February</td>
              <td>Monthly Exam</td>
              <td>2026-02-01</td>
              <td>
                <Link to="/exam/edit/2" className="btn icon btn-primary">
                  <i className="bi bi-pencil"></i>
                </Link>
                <button type="button" className="btn icon btn-danger ms-2">
                  <i className="bi bi-x"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td className="text-bold-500">Term-1</td>
              <td>Mid-Term Exam</td>
              <td>2026-04-15</td>
              <td>
                <Link to="/exam/edit/3" className="btn icon btn-primary">
                  <i className="bi bi-pencil"></i>
                </Link>
                <button type="button" className="btn icon btn-danger ms-2">
                  <i className="bi bi-x"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td className="text-bold-500">Monthly-May</td>
              <td>Monthly Exam</td>
              <td>2026-05-01</td>
              <td>
                <Link to="/exam/edit/4" className="btn icon btn-primary">
                  <i className="bi bi-pencil"></i>
                </Link>
                <button type="button" className="btn icon btn-danger ms-2">
                  <i className="bi bi-x"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td className="text-bold-500">Term-2</td>
              <td>Final Exam</td>
              <td>2026-11-20</td>
              <td>
                <Link to="/exam/edit/5" className="btn icon btn-primary">
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

export default ExamManage;
