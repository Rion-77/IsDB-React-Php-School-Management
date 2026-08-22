const SelectOption = ({
  text,
  value,
  disabled = false,
  selected = false,
}: {
  text: string;
  value?: string | number | undefined;
  disabled?: boolean;
  selected?: boolean;
}) => {
  return (
    <option value={value} disabled={disabled} selected={selected}>
      {text}
    </option>
  );
};

export default SelectOption;
