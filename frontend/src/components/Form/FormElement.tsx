const FormElement = ({ onSubmit, children }: any) => {
  {
    return (
      <>
        <section id="basic-vertical-layouts">
          <div className="row match-height">
            <div className="col-12">
              <div className="card">
                <div className="card-content">
                  <div className="card-body">
                    <form className="form form-vertical" onSubmit={onSubmit}>
                      <div className="form-body">
                        <div className="row">{children}</div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default FormElement;
