import { Link } from "react-router";
import PageHeading from "../../../components/PageHeading";
import AddButton from "../../../components/Button/AddButton";
import PageWrapper from "../../layout/PageWrapper";
import ManageTable from "../../../components/Table/ManageTable";
import ManageTableHead from "../../../components/Table/ManageTableHead";

const SubjectManage = () => {
  return (
    <>
      <PageWrapper>
        <PageHeading title="All Subject" subtitle="Manage Subject.">
          <AddButton to="/subject/create" text="Add New Subject" />
        </PageHeading>

        <ManageTable>
          <ManageTableHead heads={["SUBJECT NAME", "SUBJECT CODE", "ACTION"]} />
          <tbody>
            <tr>
              <td className="text-bold-500">Bangla</td>
              <td>ES778</td>
              <td>
                <Link to="/subject/edit/1" className="btn icon btn-primary">
                  <i className="bi bi-pencil"></i>
                </Link>
                <button type="button" className="btn icon btn-danger ms-2">
                  <i className="bi bi-x"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td className="text-bold-500">English</td>
              <td>ES779</td>
              <td>
                <Link to="/subject/edit/2" className="btn icon btn-primary">
                  <i className="bi bi-pencil"></i>
                </Link>
                <button type="button" className="btn icon btn-danger ms-2">
                  <i className="bi bi-x"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td className="text-bold-500">Mathematics</td>
              <td>ES780</td>
              <td>
                <Link to="/subject/edit/3" className="btn icon btn-primary">
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

export default SubjectManage;
