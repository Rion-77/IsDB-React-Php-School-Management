const PageHeading = ({ title, subtitle, children }: { title: string, subtitle?: string, children?: any }) => {
  return (
    <>
      {/* <div className="page-heading">
        <h3>{title}</h3>
      </div> */}
      <div className="page-title">
        <div className="row ">
          <div className="col-12 col-md-6 order-md-1 order-last">
            <h3>{title}</h3>
            {subtitle && (
              <p className="text-subtitle text-muted">{subtitle}</p>
            )}
          </div>
          <div className="col-12 col-md-6 order-md-2 order-first d-flex justify-content-end align-items-center">
            {/* <nav aria-label="breadcrumb" className="breadcrumb-header float-start float-lg-end">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Dashboard</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Form Layout
                </li>
              </ol>
            </nav> */}
            {children}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHeading;
