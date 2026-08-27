import { useState, useEffect } from "react";
import { Link } from "react-router";
import PageHeading from "../../../components/PageHeading";
import AddButton from "../../../components/Button/AddButton";
import ManageTable from "../../../components/Table/ManageTable";
import ManageTableHead from "../../../components/Table/ManageTableHead";
import PageWrapper from "../../layout/PageWrapper";
import { defaultFeeType, type FeeTypeSchema } from "../../../interfaces/FeeType";
import { api } from "../../../config";

const FeeTypeManage = () => {
  const [feeTypes, setFeeTypes] = useState<FeeTypeSchema[]>([defaultFeeType]);
  const [deleteItem, setDeleteItem] = useState({ id: 0, name: "" });

  // Get all fee types from database
  const getFeeTypes = () => {
    api
      .get("fee-types")
      .then((res) => {
        // console.log(res.data);
        setFeeTypes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getFeeTypes();
  }, []);

  // Delete function
  const handleDelete = (id: number) => {
    api
      .delete("fee-type-delete?id=" + id)
      .then((res) => {
        if (res.status == 200) {
          getFeeTypes();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <PageWrapper>
        <PageHeading title="All Fee Types" subtitle="Manage your fee types.">
          <AddButton to="/fee-type/create" text="Add New Fee Type" />
        </PageHeading>

        <ManageTable>
          <ManageTableHead heads={["FEE TYPE NAME", "FEE AMOUNT", "ACTION"]} />
          <tbody>
            {/* Loop for display all classes */}
            {feeTypes.map((feeType) => (
              <tr key={feeType.id}>
                <td className="fw-bold">{feeType.fee_type_name}</td>
                <td>{feeType.fee_amount}</td>
                <td>
                  <Link to={`/fee-type/edit/${feeType.id}`} className="btn icon btn-primary">
                    {" "}
                    <i className="bi bi-pencil"></i>{" "}
                  </Link>
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                    className="btn icon btn-danger ms-2"
                    onClick={() =>
                      setDeleteItem({
                        id: Number(feeType.id),
                        name: feeType.fee_type_name,
                      })
                    }
                  >
                    <i className="bi bi-x"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ManageTable>

        {/* Modal */}
        <div className="modal fade" id="deleteModal" tabIndex={-1}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title text-center fs-5">Delete User</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body text-center">
                <span className="badge border border-danger text-danger fs-5">Class: {deleteItem.name}</span>
                <h3 className="mt-3">Are you sure?</h3>
                <p>Do you want to delete this class?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(deleteItem.id)}
                  data-bs-dismiss="modal"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default FeeTypeManage;
