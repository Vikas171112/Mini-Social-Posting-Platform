import React from "react";
import { FaRegHeart, FaComment, FaShare, FaBookmark } from "react-icons/fa";
import Button from "../atoms/Button";

function PostActions() {
  const postActions = [
    {
      label: "Like",
      icon: <FaRegHeart />,
      onClick: () => console.log("Liked"),
    },
    {
      label: "Comment",
      icon: <FaComment />,
      onClick: () => console.log("Comment clicked"),
    },
    {
      label: "Share",
      icon: <FaShare />,
      onClick: () => console.log("Shared"),
    },
  ];

  return (
    <div className="w-full flex justify-between items-center px-4 py-2">
      <div className="flex gap-4 text-gray-700">
        {postActions.map((action, index) => (
          <Button
            key={index}
            onClick={action.onClick}
            className="flex items-center gap-1.5 text-sm hover:text-blue-500 transition"
          >
            {action.icon}
            {action.label}
          </Button>
        ))}
      </div>

      <button className="text-xl text-gray-700 hover:text-yellow-500 transition">
        <FaBookmark />
      </button>
    </div>
  );
}

export default PostActions;
