export interface FormInputProps {
  label: string;
  formHook: any;
  errorMessage: any;
  type?: string;
  placeholder?: string;
  icon: string;
  min?: number | string | undefined
  children?: any;
}
