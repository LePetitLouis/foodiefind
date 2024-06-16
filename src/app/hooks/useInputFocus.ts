import { useEffect, useRef } from "react";

export const useInputFocus = (dependency: any) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [dependency]);

  return inputRef;
};