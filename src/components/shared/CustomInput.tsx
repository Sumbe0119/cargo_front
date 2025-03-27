import React from "react";

interface Props {
  value: any;
  onChange: (value: any) => void;
  error?: string;
  placeholder: string;
  showText?: boolean;
  simpleText?: string;
  type?: string;
}

const CustomInput = ({
  value,
  onChange,
  error,
  placeholder,
  showText = false,
  simpleText,
  type,
}: Props) => {
  return (
    <div className="relative h-11 border border-gray rounded-xl px-4 outline-none text-sm font-normal">
      <input
        placeholder={placeholder}
        value={value}
        type={type || "text"}
        onChange={(e) => onChange(e?.target?.value)}
        className="w-full h-full outline-none"
      />
      {showText && (
        <p className="absolute right-4 top-2 text-sm text-dark/70 font-regular">
          {simpleText}
        </p>
      )}
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default CustomInput;
