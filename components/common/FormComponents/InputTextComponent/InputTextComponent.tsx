/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputText } from "primereact/inputtext";

interface InputTextComponentProps {
  label: string;
  value: string;
  onChange: (e: any) => void;
}

const InputTextComponent = (props: InputTextComponentProps) => {
  const { value, onChange, label } = props;
  const id = label?.toLowerCase()?.replace(" ", "-");

  const wrapperClasses = "flex align-items-center";

  return (
    <div className={wrapperClasses}>
      <InputText id={id} value={value} onChange={(e) => onChange(e)} maxLength={100} placeholder={label} />
    </div>
  );
};

export default InputTextComponent;
