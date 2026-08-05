import type { FormInputProps } from "../../interfaces/FormInputProps";

const SelectField = ({ label, name, value, onChange, icon, children }: FormInputProps) => {
  return (
    <>
      <div className="col-md-4">
        <label htmlFor={name}>{label}</label>
      </div>
      <div className="col-md-8">
        <div className="form-group has-icon-left">
          <div className="position-relative">
            <select
              name={name}
              className="form-control"
              id={name}
              value={value}
              onChange={onChange}
            >
             {children}
            </select>
            <div className="form-control-icon">
              <i className={icon}></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectField;
