export interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string | number | undefined;
  onChange: any;
  icon: string;
  children?: any;
}
