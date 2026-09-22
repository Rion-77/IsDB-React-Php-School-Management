import { Link } from "react-router";
import PageHeading from "../../../components/PageHeading";
import AddButton from "../../../components/Button/AddButton";
import ManageTable from "../../../components/Table/ManageTable";
import ManageTableHead from "../../../components/Table/ManageTableHead";
import PageWrapper from "../../layout/PageWrapper";
import { defaultUser, type UserSchema } from "../../../interfaces/User";
import { useEffect, useState } from "react";
import { api } from "../../../config";

const UserManage = () => {
  const [users, setUsers] = useState<UserSchema[]>([defaultUser]);

  // Get all s from database
  const getUsers = () => {
    api
      .get(`users`)
      .then((res) => {
        // console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <PageWrapper>
        <PageHeading title="All Users" subtitle="Manage your users.">
          <AddButton to="/user/create" text="Add New User" />
        </PageHeading>

        <ManageTable>
          <ManageTableHead heads={["NAME", "PHONE", "EMAIL", "ROLE", "ACTION"]} />
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="text-bold-500">{user.name}</td>
                <td>{user.phone}</td>
                <td className="text-bold-500">{user.email}</td>
                <td className="text-bold-500">{user.role_id}</td>
                <td>
                  <Link to={`/user/edit/${user.id}`} className="btn icon btn-primary">
                    <i className="bi bi-pencil"></i>
                  </Link>
                  <button type="button" className="btn icon btn-danger ms-2">
                    <i className="bi bi-x"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ManageTable>
      </PageWrapper>
    </>
  );
};

export default UserManage;
