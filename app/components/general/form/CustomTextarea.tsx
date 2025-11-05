interface CustomTextareaProps {
  placeholder: string;
  rows?: number;
}

function CustomTextarea({ placeholder, rows = 4 }: CustomTextareaProps) {
  return (
    <textarea
      rows={rows}
      className="bg-white/5 rounded-[5px] py-3 px-[14px] font-inter font-regular text-[15px] w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white/10 transition"
      placeholder={placeholder}
    />
  );
}

export default CustomTextarea;
