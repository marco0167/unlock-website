function Button({
  onClick,
  label,
  inverted,
}: {
  onClick: () => void;
  label: string;
  inverted?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        inline-block border transition-colors
        ${inverted ?
          "text-background hover:bg-background hover:text-neutral-200 border-background" :
          "text-neutral-100 hover:bg-neutral-100 hover:text-background border-neutral-100"
        }
        duration-200 rounded-full md:px-5 px-4 md:py-[10px] py-1 font-inter
        font-regular md:text-2xl
      `}
    >
      {label}
    </button>
  );
}

export default Button;
