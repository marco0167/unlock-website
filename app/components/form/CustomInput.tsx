
interface CustomInputProps {
  type: React.InputHTMLAttributes<HTMLInputElement>["type"];
  inputMode?: React.InputHTMLAttributes<HTMLInputElement>["inputMode"];
  value: string;
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

function CustomInput({ type, inputMode = "text", placeholder, value, onChange }: CustomInputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="bg-white/5 rounded-[5px] py-3 px-[14px] font-inter font-regular text-[15px] w-full focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:bg-white/10 transition"
      placeholder={placeholder}
      inputMode={inputMode}
    />
  );
}

export default CustomInput;
