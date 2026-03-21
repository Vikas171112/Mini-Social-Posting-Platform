import React, { useState } from "react";
import PostInput from "../molecules/PostInput";
import { BiSolidVideos } from "react-icons/bi";
import { FaImages } from "react-icons/fa";
import { PiArticleNyTimesFill } from "react-icons/pi";
import CreatePostModal from "../../Modals/CreatePostModal";

function PostBox({ onCreate }) {
  const actions = [
    {
      label: "Image",
      icon: <FaImages className="text-blue-500" />,
    },
    {
      label: "Video",
      icon: <BiSolidVideos className="text-green-500" />,
    },
    {
      label: "Article",
      icon: <PiArticleNyTimesFill className="text-orange-500" />,
    },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full  mx-auto bg-white rounded-2xl shadow-md p-4 flex flex-col gap-4">
      <PostInput
        className="w-full font-semibold border rounded-xl p-3 outline-none cursor-pointer hover:bg-gray-100 transition"
        placeholder="Start a post..."
        onClick={() => setOpen(true)}
      />
      <CreatePostModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onCreate={onCreate}
      />

      <div className="h-[1px] bg-gray-200" />

      <div className="flex justify-between">
        {actions.map((action, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100 transition"
          >
            {action.icon}
            <span className="text-sm font-medium text-gray-600">
              {action.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostBox;
