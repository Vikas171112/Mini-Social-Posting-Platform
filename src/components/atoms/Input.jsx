import React from "react";

const Input = ({ className, onChange, placeholder, onClick, readOnly }) => {
  return (
    <input
      readOnly={readOnly}
      onChange={onChange}
      onClick={onClick}
      type="text"
      placeholder={placeholder}
      className={`bg-white text-black p-2 text-xl rounded-full border-2   ${className}`}
    />
  );
};

export default Input;
