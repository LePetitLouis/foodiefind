import React from "react";

interface ProgressBarProps {
  value: number;
  max?: number;
}

const ProgressBarComponent: React.FC<ProgressBarProps> = ({ value, max = 100 }) => {
  return (
    <progress 
      className="w-[860px] h-1.5 mx-auto [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-black [&::-webkit-progress-value]:bg-primary [&::-moz-progress-bar]:bg-primary" 
      value={value} 
      max={max}
    ></progress>
  );
}

export default ProgressBarComponent;