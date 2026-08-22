import { Link } from "react-router";
import PageHeading from "../../../components/PageHeading";
import AddButton from "../../../components/Button/AddButton";
import ManageTable from "../../../components/Table/ManageTable";
import ManageTableHead from "../../../components/Table/ManageTableHead";
import PageWrapper from "../../layout/PageWrapper";

const FeeTypeManage = () => {
  return (
    <>
      <PageWrapper>
        <PageHeading title="All Fee Types" subtitle="Manage your fee types.">
          <AddButton to="/fee-type/create" text="Add New Fee Type" />
        </PageHeading>

        <ManageTable>
          <ManageTableHead heads={["FEE TYPE NAME", "FEE AMOUNT", "ACTION"]} />
          <tbody>
            <tr>
              <td className="fw-bold">Tuition Fee</td>
              <td>5500.00</td>
              <td>
                <Link to="/fee-type/edit/2" className="btn icon btn-primary">
                  {" "}
                  <i className="bi bi-pencil"></i>{" "}
                </Link>
                <button type="button" className="btn icon btn-danger ms-2">
                  {" "}
                  <i className="bi bi-x"></i>{" "}
                </button>
              </td>
            </tr>
            <tr>
              <td className="fw-bold">Admission Fee</td>
              <td>3500.00</td>
              <td>
                <Link to="/fee-type/edit/3" className="btn icon btn-primary">
                  {" "}
                  <i className="bi bi-pencil"></i>{" "}
                </Link>
                <button type="button" className="btn icon btn-danger ms-2">
                  {" "}
                  <i className="bi bi-x"></i>{" "}
                </button>
              </td>
            </tr>
            <tr>
              <td className="fw-bold">Library Fee</td>
              <td>450.00</td>
              <td>
                <Link to="/fee-type/edit/4" className="btn icon btn-primary">
                  {" "}
                  <i className="bi bi-pencil"></i>{" "}
                </Link>
                <button type="button" className="btn icon btn-danger ms-2">
                  {" "}
                  <i className="bi bi-x"></i>{" "}
                </button>
              </td>
            </tr>
            <tr>
              <td className="fw-bold">Laboratory Fee</td>
              <td>800.00</td>
              <td>
                <Link to="/fee-type/edit/5" className="btn icon btn-primary">
                  {" "}
                  <i className="bi bi-pencil"></i>{" "}
                </Link>
                <button type="button" className="btn icon btn-danger ms-2">
                  {" "}
                  <i className="bi bi-x"></i>{" "}
                </button>
              </td>
            </tr>
            <tr>
              <td className="fw-bold">Exam Fee</td>
              <td>1500.00</td>
              <td>
                <Link to="/fee-type/edit/6" className="btn icon btn-primary">
                  {" "}
                  <i className="bi bi-pencil"></i>{" "}
                </Link>
                <button type="button" className="btn icon btn-danger ms-2">
                  {" "}
                  <i className="bi bi-x"></i>{" "}
                </button>
              </td>
            </tr>
            <tr>
              <td className="fw-bold">Sports Fee</td>
              <td>600.00</td>
              <td>
                <Link to="/fee-type/edit/7" className="btn icon btn-primary">
                  {" "}
                  <i className="bi bi-pencil"></i>{" "}
                </Link>
                <button type="button" className="btn icon btn-danger ms-2">
                  {" "}
                  <i className="bi bi-x"></i>{" "}
                </button>
              </td>
            </tr>
            <tr>
              <td className="fw-bold">Transport Fee</td>
              <td>2200.00</td>
              <td>
                <Link to="/fee-type/edit/8" className="btn icon btn-primary">
                  {" "}
                  <i className="bi bi-pencil"></i>{" "}
                </Link>
                <button type="button" className="btn icon btn-danger ms-2">
                  {" "}
                  <i className="bi bi-x"></i>{" "}
                </button>
              </td>
            </tr>
          </tbody>
        </ManageTable>
      </PageWrapper>
    </>
  );
};

export default FeeTypeManage;
