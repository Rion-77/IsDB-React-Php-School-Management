import PageHeading from "../../components/PageHeading";
import ManageTable from "../../components/Table/ManageTable";
import ManageTableHead from "../../components/Table/ManageTableHead";
const Dashboard = () => {
  return (
    <>
      <PageHeading title="School Statistics" />

      <div className="page-content">
        <section className="row">
          <div className="col-12 col-lg-9">
            <div className="row">
              <div className="col-6 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body px-4 py-4-5">
                    <div className="row">
                      <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start ">
                        <div className="stats-icon purple mb-2">
                          <i className="bi bi-person-bounding-box"></i>
                        </div>
                      </div>
                      <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                        <h6 className="text-muted font-semibold">Students</h6>
                        <h6 className="font-extrabold mb-0">112</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body px-4 py-4-5">
                    <div className="row">
                      <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start ">
                        <div className="stats-icon blue mb-2">
                          <i className="bi bi-person-workspace"></i>
                        </div>
                      </div>
                      <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                        <h6 className="text-muted font-semibold">Teachers</h6>
                        <h6 className="font-extrabold mb-0">10</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body px-4 py-4-5">
                    <div className="row">
                      <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start ">
                        <div className="stats-icon green mb-2">
                          <i className="bi bi-person-video3"></i>
                        </div>
                      </div>
                      <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                        <h6 className="text-muted font-semibold">Class</h6>
                        <h6 className="font-extrabold mb-0">7</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body px-4 py-4-5">
                    <div className="row">
                      <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start ">
                        <div className="stats-icon red mb-2">
                          <i className="bi bi-journal-text"></i>
                        </div>
                      </div>
                      <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                        <h6 className="text-muted font-semibold">Exam</h6>
                        <h6 className="font-extrabold mb-0">05 Sep</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4>Latest Collected Fees</h4>
                  </div>
                  <div className="card-body">
                    <ManageTable>
                      <ManageTableHead heads={["STUDENT NAME", "AMOUNT", "DATE"]} />
                      <tbody>
                        <tr>
                          <td className="text-bold-500">নুসরাত জাহান</td>
                          <td>5000.00</td>
                          <td>2026-08-08</td>
                          <td>
                            {/* Receipt start */}
                            
                          </td>
                        </tr>
                        <tr>
                          <td className="text-bold-500">নুসরাত জাহান</td>
                          <td>5500.00</td>
                          <td>2026-06-27</td>
                          <td>
                            
                          </td>
                        </tr>
                        <tr>
                          <td className="text-bold-500">মারিয়া ইসলাম</td>
                          <td>6000.00</td>
                          <td>2026-06-26</td>
                          <td>
                            
                          </td>
                        </tr>
                        <tr>
                          <td className="text-bold-500">মিম আক্তার</td>
                          <td>1500.00</td>
                          <td>2026-01-10</td>
                          <td>
                            
                          </td>
                        </tr>
                        <tr>
                          <td className="text-bold-500">আরিফুল ইসলাম</td>
                          <td>3800.00</td>
                          <td>2026-01-10</td>
                          <td>
                            
                          </td>
                        </tr>
                        <tr>
                          <td className="text-bold-500">নুসরাত জাহান</td>
                          <td>3000.00</td>
                          <td>2026-01-10</td>
                          <td>
                            
                          </td>
                        </tr>
                        <tr>
                          <td className="text-bold-500">রিদয় আহমেদ</td>
                          <td>2300.00</td>
                          <td>2026-01-10</td>
                          <td>
                            
                          </td>
                        </tr>
                        <tr>
                          <td className="text-bold-500">সুমাইয়া আক্তার</td>
                          <td>3000.00</td>
                          <td>2026-01-10</td>
                          <td>
                            
                          </td>
                        </tr>
                        <tr>
                          <td className="text-bold-500">নাঈম ইসলাম</td>
                          <td>3500.00</td>
                          <td>2026-01-10</td>
                          <td>
                            
                          </td>
                        </tr>
                        <tr>
                          <td className="text-bold-500">মারিয়া ইসলাম</td>
                          <td>3000.00</td>
                          <td>2026-01-10</td>
                          <td>
                            
                          </td>
                        </tr>
                        <tr>
                          <td className="text-bold-500">মেহেদী হাসান</td>
                          <td>2500.00</td>
                          <td>2026-01-10</td>
                          <td>
                            
                          </td>
                        </tr>
                        <tr>
                          <td className="text-bold-500">তানজিলা আক্তার</td>
                          <td>3000.00</td>
                          <td>2026-01-10</td>
                          <td>
                            
                          </td>
                        </tr>
                        <tr>
                          <td className="text-bold-500">রাহাত হাসান</td>
                          <td>3000.00</td>
                          <td>2026-01-10</td>
                          <td>
                            
                          </td>
                        </tr>
                      </tbody>
                    </ManageTable>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div className="card">
              <div className="card-body py-4 px-4">
                <div className="d-flex align-items-center">
                  <div className="avatar avatar-xl">
                    <img src="https://i.pravatar.cc/150?img=65" alt="Face 1" />
                  </div>
                  <div className="ms-3 name">
                    <h5 className="font-bold">Sohrab Alamin</h5>
                    <h6 className="text-muted mb-0">Principal</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4>Top Students</h4>
              </div>
              <div className="card-content pb-4">
                <div className="recent-message d-flex px-4 py-3">
                  <div className="avatar avatar-lg">
                    <img src="https://i.pravatar.cc/150?img=59" />
                  </div>
                  <div className="name ms-4">
                    <h5 className="mb-1">Jaber</h5>
                    <h6 className="text-muted mb-0">@johnducky</h6>
                  </div>
                </div>
                <div className="recent-message d-flex px-4 py-3">
                  <div className="avatar avatar-lg">
                    <img src="https://i.pravatar.cc/150?img=56" />
                  </div>
                  <div className="name ms-4">
                    <h5 className="mb-1">Mursalin</h5>
                    <h6 className="text-muted mb-0">@imdean</h6>
                  </div>
                </div>
                <div className="recent-message d-flex px-4 py-3">
                  <div className="avatar avatar-lg">
                    <img src="https://i.pravatar.cc/150?img=11" />
                  </div>
                  <div className="name ms-4">
                    <h5 className="mb-1">Shafi</h5>
                    <h6 className="text-muted mb-0">@dodoljohn</h6>
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
export default Dashboard;
