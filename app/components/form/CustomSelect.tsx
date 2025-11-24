import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef } from "react";

type OptionType = {
  value: string;
  label: string;
};

type CustomSelectProps = {
  options: OptionType[];
  placeholder?: string;
  onChange: (value: string) => void;
};

export const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  placeholder = "Select an option",
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  const handleOptionClick = (option: OptionType) => {
    setSelectedOption(option);
    onChange(option.value);
    setIsOpen(false);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full" ref={selectRef}>
      <button
        type="button"
        onClick={toggleOpen}
        className={`
          flex w-full items-center justify-between
          rounded-lg bg-white/5
          px-4 py-3
          text-left text-sm
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-neutral-200
          ${selectedOption ? "text-neutral-100" : "text-white/60"}
        `}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`
            w-5 h-5 text-white/60
            transition-transform duration-200 ease-in-out
            ${isOpen ? "rotate-180" : "rotate-0"}
          `}
        />
      </button>

      <div
        className={`
          absolute z-10 w-full mt-2
          overflow-hidden rounded-lg bg-neutral-800
          shadow-lg ring-1 ring-slate-700
          transition-all duration-200 ease-in-out
          ${
            isOpen
              ? "opacity-100 transform scale-100"
              : "opacity-0 transform scale-95 pointer-events-none"
          }
        `}
        role="listbox"
        aria-hidden={!isOpen}
      >
        <ul className="py-1 bg-white/5">
          {options.map((option) => (
            <li
              key={option.value}
              className={`
                px-4 py-2 text-sm
                cursor-pointer transition-colors duration-150
                hover:bg-slate-700 hover:text-white
              `}
              onClick={() => handleOptionClick(option)}
              role="option"
              aria-selected={selectedOption?.value === option.value}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
