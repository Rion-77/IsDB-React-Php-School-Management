import { Link } from "react-router";
import PageHeading from "../../../components/PageHeading";
import AddButton from "../../../components/Button/AddButton";

const UserManage = () => {
  return (
    <>
      <div className="page-heading">
        <PageHeading title="All Users" subtitle="Manage your users.">
          <AddButton to="/user/create" text= "Add New User"/>
        </PageHeading>

        <section className="section">
          <div className="row" id="basic-table">
            <div className="col-12">
              <div className="card">
               
                <div className="card-content">
                  <div className="card-body">

                    <div className="table-responsive">
                      <table className="table table-lg">
                        <thead>
                          <tr>
                            <th>NAME</th>
                            <th>PHONE</th>
                            <th>EMAIL</th>
                            <th>ROLE</th>
                            <th>ACTION</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-bold-500">Michael Right</td>
                            <td>+88018786549</td>
                            <td className="text-bold-500">michael@mail.com</td>
                            <td className="text-bold-500">Admin</td>
                            <td>
                              <Link to="/user/edit/1" className="btn icon btn-primary">
                                <i className="bi bi-pencil"></i>
                              </Link>
                              <button type="button" className="btn icon btn-danger ms-2">
                                <i className="bi bi-x"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-bold-500">Sarah Jenkins</td>
                            <td>+88017112233</td>
                            <td className="text-bold-500">sarah.j@mail.com</td>
                            <td className="text-bold-500">Editor</td>
                            <td>
                              <Link to="/user/edit/2" className="btn icon btn-primary">
                                <i className="bi bi-pencil"></i>
                              </Link>
                              <button type="button" className="btn icon btn-danger ms-2">
                                <i className="bi bi-x"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-bold-500">David Miller</td>
                            <td>+88019145566</td>
                            <td className="text-bold-500">david.m@mail.com</td>
                            <td className="text-bold-500">User</td>
                            <td>
                              <Link to="/user/edit/3" className="btn icon btn-primary">
                                <i className="bi bi-pencil"></i>
                              </Link>
                              <button type="button" className="btn icon btn-danger ms-2">
                                <i className="bi bi-x"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-bold-500">Emma Watson</td>
                            <td>+88015178899</td>
                            <td className="text-bold-500">emma.w@mail.com</td>
                            <td className="text-bold-500">Moderator</td>
                            <td>
                              <Link to="/user/edit/4" className="btn icon btn-primary">
                                <i className="bi bi-pencil"></i>
                              </Link>
                              <button type="button" className="btn icon btn-danger ms-2">
                                <i className="bi bi-x"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-bold-500">James Smith</td>
                            <td>+88016123344</td>
                            <td className="text-bold-500">james.s@mail.com</td>
                            <td className="text-bold-500">User</td>
                            <td>
                              <Link to="/user/edit/5" className="btn icon btn-primary">
                                <i className="bi bi-pencil"></i>
                              </Link>
                              <button type="button" className="btn icon btn-danger ms-2">
                                <i className="bi bi-x"></i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default UserManage;
