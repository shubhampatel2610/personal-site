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
  const isChecked: boolean = props.selectedValue ? props.selectedValue === props.value : false;

  return (
    <div className="flex align-items-center">
      <RadioButton
        inputId={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        checked={isChecked}
      />
      <label htmlFor={props.id} className="ml-2">
        {props.label}
      </label>
    </div>
  );
};

export default RadioComponent;
