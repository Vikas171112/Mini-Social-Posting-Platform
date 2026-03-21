import React from "react";
import Input from "../atoms/Input";

function PostInput({ className, placeholder, onClick }) {
  return (
    <Input
      className={className}
      placeholder={placeholder}
      onClick={onClick}
      readOnly
    />
  );
}

export default PostInput;
