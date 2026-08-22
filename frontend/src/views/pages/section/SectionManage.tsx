import { Link } from "react-router";
import PageHeading from "../../../components/PageHeading";
import AddButton from "../../../components/Button/AddButton";
import PageWrapper from "../../layout/PageWrapper";
import ManageTable from "../../../components/Table/ManageTable";
import ManageTableHead from "../../../components/Table/ManageTableHead";

const SectionManage = () => {
  return (
    <>
      <PageWrapper>
        <PageHeading title="All Sections" subtitle="Manage Sections.">
          <AddButton to="/section/create" text="Add New Section" />
        </PageHeading>

        <ManageTable>
          <ManageTableHead heads={["SECTION NAME", "CLASS NAME", "ACTION"]} />
          <tbody>
            <tr>
              <td className="text-bold-500">Section A</td>
              <td>Class 1</td>
              <td>
                <Link to="/section/edit/1" className="btn icon btn-primary">
                  <i className="bi bi-pencil"></i>
                </Link>
                <button type="button" className="btn icon btn-danger ms-2">
                  <i className="bi bi-x"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td className="text-bold-500">Section B</td>
              <td>Class 1</td>
              <td>
                <Link to="/section/edit/2" className="btn icon btn-primary">
                  <i className="bi bi-pencil"></i>
                </Link>
                <button type="button" className="btn icon btn-danger ms-2">
                  <i className="bi bi-x"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td className="text-bold-500">Section C</td>
              <td>Class 2</td>
              <td>
                <Link to="/section/edit/3" className="btn icon btn-primary">
                  <i className="bi bi-pencil"></i>
                </Link>
                <button type="button" className="btn icon btn-danger ms-2">
                  <i className="bi bi-x"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td className="text-bold-500">Section D</td>
              <td className="text-bold-500">Class 2</td>
              <td>
                <Link to="/section/edit/4" className="btn icon btn-primary">
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

export default SectionManage;
