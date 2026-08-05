import type { FormInputProps } from "../../interfaces/FormInputProps";

const InputField = ({label, name, type,placeholder, value, onChange, icon}: FormInputProps ) => {
  return (
    <>
      <div className="col-md-4">
        <label htmlFor={name}>{label}</label>
      </div>
      <div className="col-md-8">
        <div className="form-group has-icon-left">
          <div className="position-relative">
            <input
              name={name}
              type={type}
              className="form-control"
              placeholder={placeholder}
              id={name}
              value={value}
              onChange={onChange}
            />
            <div className="form-control-icon">
              <i className={icon}></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputField;
