import React from "react";

import { FaHeart, FaComment, FaShare, FaBookmark } from "react-icons/fa";
import Button from "../atoms/Button";

function PostTypes({ postTypes }) {
  return (
    <div className="flex gap-4 mt-4 justify-center ">
      {postTypes.map((type, index) => (
        <Button
          key={index}
          className="bg-white hover:bg-gray-200 text-black-500 flex justify-center items-center gap-2 cursor-pointer"
        >
          <span className="text-green-600 text-2xl">{type.icon}</span>
          <span> {type.label}</span>
        </Button>
      ))}
    </div>
  );
}

export default PostTypes;
