import { Link } from "react-router";
import PageHeading from "../../../components/PageHeading";
import AddButton from "../../../components/Button/AddButton";
import PageWrapper from "../../layout/PageWrapper";
import ManageTable from "../../../components/Table/ManageTable";
import ManageTableHead from "../../../components/Table/ManageTableHead";

const ClassManage = () => {
  return (
    <>
      <PageWrapper>
        <PageHeading title="All Classes" subtitle="Manage Classes.">
          <AddButton to="/class/create" text="Add New Class" />
        </PageHeading>

        <ManageTable>
          <ManageTableHead heads={["CLASS NAME", "ACTION"]} />
          <tbody>
            <tr>
              <td className="text-bold-500">Class 1</td>
              <td>
                <Link to="/class/edit/1" className="btn icon btn-primary">
                  <i className="bi bi-pencil"></i>
                </Link>
                <button type="button" className="btn icon btn-danger ms-2">
                  <i className="bi bi-x"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td className="text-bold-500">Class 2</td>
              <td>
                <Link to="/class/edit/2" className="btn icon btn-primary">
                  <i className="bi bi-pencil"></i>
                </Link>
                <button type="button" className="btn icon btn-danger ms-2">
                  <i className="bi bi-x"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td className="text-bold-500">Class 3</td>
              <td>
                <Link to="/class/edit/3" className="btn icon btn-primary">
                  <i className="bi bi-pencil"></i>
                </Link>
                <button type="button" className="btn icon btn-danger ms-2">
                  <i className="bi bi-x"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td className="text-bold-500">Class 4</td>
              <td>
                <Link to="/class/edit/4" className="btn icon btn-primary">
                  <i className="bi bi-pencil"></i>
                </Link>
                <button type="button" className="btn icon btn-danger ms-2">
                  <i className="bi bi-x"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td className="text-bold-500">Class 5</td>
              <td>
                <Link to="/class/edit/5" className="btn icon btn-primary">
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

export default ClassManage;
