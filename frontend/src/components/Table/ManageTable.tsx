const ManageTable = ({ children }: any) => {
  return (
    <>
      <section className="section">
        <div className="row" id="basic-table">
          <div className="col-12">
            <div className="card">
              <div className="card-content">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-lg">
                     {children}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ManageTable;
