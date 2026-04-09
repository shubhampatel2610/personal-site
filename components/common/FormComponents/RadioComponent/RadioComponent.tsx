/* eslint-disable @typescript-eslint/no-explicit-any */
import { RadioButton } from "primereact/radiobutton";

interface RadioComponentProps {
  id: string;
  name: string;
  value: number | string;
  label: string;
  onChange: (e: any) => void;
  selectedValue?: number | string;
}

const RadioComponent = (props: RadioComponentProps) => {
  const { id, name, value, label, onChange, selectedValue } = props;
  const isChecked: boolean = selectedValue ? selectedValue === value : false;

  const wrapperClasses = "flex align-items-center";
  const labelClasses = "ml-2";

  return (
    <div className={wrapperClasses}>
      <RadioButton inputId={id} name={name} value={value} onChange={(e) => onChange(e)} checked={isChecked} />
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
    </div>
  );
};

export default RadioComponent;
