import { Link } from "react-router";
import PageHeading from "../../../components/PageHeading";
import AddButton from "../../../components/Button/AddButton";
import PageWrapper from "../../layout/PageWrapper";
import ManageTable from "../../../components/Table/ManageTable";
import ManageTableHead from "../../../components/Table/ManageTableHead";

const GroupManage = () => {
  return (
    <>
      <PageWrapper>
        <PageHeading title="All Groups" subtitle="Manage Groups.">
          <AddButton to="/group/create" text="Add New Group" />
        </PageHeading>

        <ManageTable>
          <ManageTableHead heads={["GROUP NAME", "ACTION"]} />
          <tbody>
            <tr>
              <td className="text-bold-500">Science</td>
              
              <td>
                <Link to="/group/edit/1" className="btn icon btn-primary">
                  <i className="bi bi-pencil"></i>
                </Link>
                <button type="button" className="btn icon btn-danger ms-2">
                  <i className="bi bi-x"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td className="text-bold-500">Commerce</td>
              
              <td>
                <Link to="/group/edit/2" className="btn icon btn-primary">
                  <i className="bi bi-pencil"></i>
                </Link>
                <button type="button" className="btn icon btn-danger ms-2">
                  <i className="bi bi-x"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td className="text-bold-500">Arts</td>
              
              <td>
                <Link to="/group/edit/3" className="btn icon btn-primary">
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

export default GroupManage;
