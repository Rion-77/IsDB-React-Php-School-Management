import { Link } from "react-router";
import PageHeading from "../../../components/PageHeading";
import AddButton from "../../../components/Button/AddButton";
import PageWrapper from "../../layout/PageWrapper";
import ManageTable from "../../../components/Table/ManageTable";
import ManageTableHead from "../../../components/Table/ManageTableHead";

const RoleManage = () => {
  return (
    <>
      <PageWrapper>
        <PageHeading title="All Roles" subtitle="Manage Users Roles.">
          <AddButton to="/role/create" text="Add New Role" />
        </PageHeading>

        <ManageTable>
          <ManageTableHead heads={["ROLE NAME", "ROLE DESCRIPTION", "ACTION"]} />
          <tbody>
            <tr>
              <td className="text-bold-500">Admin</td>
              <td>Manage Everything</td>
              <td>
                <Link to="/role/edit/1" className="btn icon btn-primary">
                  <i className="bi bi-pencil"></i>
                </Link>
                <button type="button" className="btn icon btn-danger ms-2">
                  <i className="bi bi-x"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td className="text-bold-500">Moderator</td>
              <td>Only Moderation</td>
              <td>
                <Link to="/role/edit/1" className="btn icon btn-primary">
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

export default RoleManage;
