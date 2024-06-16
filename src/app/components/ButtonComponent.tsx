import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  onClickAction?: () => void;
}

const ButtonComponent: React.FC<ButtonProps> = ({ children, variant = 'primary', onClickAction, ...props }) => {
  const buttonClassName = variant === 'primary' ? 'bg-green-500 hover:bg-green-700' : 'bg-gray-500 hover:bg-gray-700';

  return (
    <button className={`${buttonClassName}`} {...props} onClick={onClickAction}>
      {children}
    </button>
  );
};

export default ButtonComponent;