interface CustomTextareaProps {
  placeholder: string;
  rows?: number;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

function CustomTextarea({ placeholder, rows = 4, value, onChange }: CustomTextareaProps) {
  return (
    <textarea
      rows={rows}
      value={value}
      onChange={onChange}
      className="bg-white/5 rounded-[5px] py-3 px-[14px] font-inter font-regular text-[15px] w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white/10 transition resize-none"
      placeholder={placeholder}
    />
  );
}

export default CustomTextarea;
