import type { FormInputProps } from "../../interfaces/FormInputProps";

const SelectField = ({ label, formHook, errorMessage, icon, children }: FormInputProps) => {
  return (
    <>
      <div className="col-md-4">
        <label htmlFor={formHook.name}>{label}</label>
      </div>
      <div className="col-md-8 mb-3">
        <div className="form-group has-icon-left mb-0">
          <div className="position-relative">
            <select {...formHook} className="form-control" id={formHook.name}>
              {children}
            </select>
            <div className="form-control-icon">
              <i className={icon}></i>
            </div>
          </div>
        </div>
        {errorMessage[formHook.name] && <div className="text-danger">{errorMessage[formHook.name].message}</div>}
      </div>
    </>
  );
};

export default SelectField;
