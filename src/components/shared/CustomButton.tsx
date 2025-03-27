import React from "react";
import { SpinnerIcon } from "../assets/icons";
interface Props {
  loading: boolean;
  title: string;
  onClick: () => void;
  className?: string;
}

const CustomButton = ({ loading, title, onClick, className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-3 h-11 bg-primary rounded-xl ${className}`}
    >
      {loading && (
        <span>
          <SpinnerIcon />
        </span>
      )}
      <p className="text-sm text-white">{title}</p>
    </button>
  );
};

export default CustomButton;
