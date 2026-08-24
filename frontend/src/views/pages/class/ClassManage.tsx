import { useState, useEffect } from "react";
import { Link } from "react-router";
import PageHeading from "../../../components/PageHeading";
import AddButton from "../../../components/Button/AddButton";
import PageWrapper from "../../layout/PageWrapper";
import ManageTable from "../../../components/Table/ManageTable";
import ManageTableHead from "../../../components/Table/ManageTableHead";
import { api } from "../../../config";
import { defaultClass, type ClassSchema } from "../../../interfaces/Class";

const ClassManage = () => {
  const [classes, setClasses] = useState<ClassSchema[]>([defaultClass]);
  const [deleteItem, setDeleteItem] = useState({ id: 0, name: "" });

  // Get all classes from database
  const getStudents = () => {
    api
      .get("classes")
      .then((res) => {
        // console.log(res.data);
        setClasses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getStudents();
  }, []);

  // Delete function
  const handleDelete = (id: number) => {
    api
      .delete("class-delete?id=" + id)
      .then((res) => {
        if (res.status == 200) {
          getStudents();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <PageWrapper>
        <PageHeading title="All Classes" subtitle="Manage Classes.">
          <AddButton to="/class/create" text="Add New Class" />
        </PageHeading>

        <ManageTable>
          <ManageTableHead heads={["CLASS NAME", "ACTION"]} />
          <tbody>
            {/* Loop for display all classes */}
            {classes.map((item) => (
              <tr key={item.id}>
                <td className="text-bold-500">
                  <Link to={`/class/details/${item.id}`}>{item.class_name}</Link>
                </td>
                <td>
                  <Link to={`/class/edit/${item.id}`} className="btn icon btn-primary">
                    <i className="bi bi-pencil"></i>
                  </Link>
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                    className="btn icon btn-danger ms-2"
                    onClick={() =>
                      setDeleteItem({
                        id: Number(item.id),
                        name: item.class_name,
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

export default ClassManage;
