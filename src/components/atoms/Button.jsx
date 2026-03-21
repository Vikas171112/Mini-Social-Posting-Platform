import React from "react";

function Button({ children, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`bg-amber-200 p-3  rounded-2xl font-bold ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
