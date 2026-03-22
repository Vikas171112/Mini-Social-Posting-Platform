import React from "react";
import PostInput from "../molecules/PostInput";
import { FaImage, FaVideo } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import PostTypes from "../molecules/PostTypes";

function PostBox({ onOpen, onSelectType }) {
  const handleTypeClick = (type) => {
    onSelectType(type);
    onOpen();
  };
  const postTypes = [
    {
      icon: <FaImage />,
      label: "Image",
      onClick: () => handleTypeClick("Image"),
    },
    {
      icon: <FaVideo />,
      label: "Video",
      onClick: () => handleTypeClick("Video"),
    },
    {
      icon: <MdArticle />,
      label: "Article",
      onClick: () => handleTypeClick("Article"),
    },
  ];

  return (
    <div className="w-full  bg-white border rounded-xl shadow-sm p-4 flex flex-col gap-4">
      <PostInput
        onClick={() => {
          onSelectType("caption");
          onOpen();
        }}
        className="w-full bg-gray-100 hover:bg-gray-200 p-3 px-4 rounded-full text-sm cursor-pointer transition"
        placeholder="Start a post..."
      />

      <div className="border-t"></div>

      <div className="flex justify-between">
        <PostTypes postTypes={postTypes} />
      </div>
    </div>
  );
}

export default PostBox;
