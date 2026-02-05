import { InputTextarea } from "primereact/inputtextarea";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface InputTextareaComponentProps {
  label: string;
  value: string;
  onChange: (e: any) => void;
}

const TextAreaComponent = (props: InputTextareaComponentProps) => {
  const { value, onChange, label } = props;
  const id = label?.toLowerCase()?.replace(" ", "-");

  return (
    <div className="flex align-items-center">
        <InputTextarea
          id={id}
          value={value}
          onChange={(e) => onChange(e)}
          rows={5}
          maxLength={1000}
          placeholder={label}
        />
    </div>
  );
};

export default TextAreaComponent;
