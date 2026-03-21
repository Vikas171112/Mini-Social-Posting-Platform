import React from "react";

import { FaHeart, FaComment, FaShare, FaBookmark } from "react-icons/fa";
import Button from "../atoms/Button";

function PostActions({ postActions }) {
  return (
    <div className="flex gap-1">
      {postActions.map((action, index) => (
        <Button
          key={index}
          onClick={action.onClick}
          className="bg-gray-100 hover:bg-gray-300 rounded-none text-black flex items-center gap-2"
        >
          {action.icon}
          {action.label}
        </Button>
      ))}
    </div>
  );
}

export default PostActions;
