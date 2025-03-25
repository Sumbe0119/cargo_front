import React from "react";

const CustomInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input className="h-11 border border-gray rounded-xl px-4 outline-none text-sm font-normal" {...props} />
  );
};

export default CustomInput;
