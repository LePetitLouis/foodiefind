import React, { useMemo } from "react";

interface InputComponentProps {
  value: string;
  placeholder?: string;
  hasError?: boolean;
  readonly?: boolean;
  inputRef?: React.RefObject<HTMLInputElement>;
  onChange: (value: string) => void;
  onEnter?: () => void;
}

const InputComponent: React.FC<InputComponentProps> = ({ value, placeholder, hasError, readonly, inputRef, onChange, onEnter }) => {
  const inputClasses = useMemo(() => {
    const baseClasses = 'relative transition-shadow duration-300 z-40 w-[400px] mx-auto px-4 py-2 rounded-lg shadow-lg placeholder-grey bg-black outline-none focus:ring-2 ring-grey caret-current';
    const errorClasses = 'animate animate-shake';

    return hasError ? `${baseClasses} ${errorClasses}` : baseClasses;
  }, [hasError]);

  return (
    <input 
      ref={inputRef}
      className={inputClasses}
      type="text" 
      value={value}
      placeholder={placeholder} 
      readOnly={readonly}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && onEnter && onEnter()}
    />
  );
}

export default InputComponent;