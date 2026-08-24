import type { FormInputProps } from "../../interfaces/FormInputProps";

const InputFieldHidden = ({ formHook, type }: FormInputProps) => {
  return (
    <>
      <input {...formHook} id={formHook.name} type={type} className="form-control" />
    </>
  );
};

export default InputFieldHidden;
