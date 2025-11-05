
interface CustomInputProps {
  type: React.InputHTMLAttributes<HTMLInputElement>["type"];
  inputMode?: React.InputHTMLAttributes<HTMLInputElement>["inputMode"];
  placeholder: string;
  ref?: React.Ref<HTMLInputElement>;
}

function CustomInput({ type, inputMode = "text", placeholder, ref }: CustomInputProps) {
  return (
    <input
      type={type}
      ref={ref}
      className="bg-white/5 rounded-[5px] py-3 px-[14px] font-inter font-regular text-[15px] w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white/10 transition"
      placeholder={placeholder}
      inputMode={inputMode}
    />
  );
}

export default CustomInput;
