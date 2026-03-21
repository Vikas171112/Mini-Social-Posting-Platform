import {
  FaBookmark,
  FaComment,
  FaHeart,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import CreatePostModal from "../../Modals/CreatePostModal";
import PostActions from "../molecules/PostActions";
import PostHeader from "../molecules/PostHeader";
import { useState } from "react";
import { user } from "../../constants/currentUser";

function PostCard({ post, onEdit, onDelete }) {
  const [open, setOpen] = useState(false);

  const postActions = [
    {
      label: "Like",
      icon: <FaHeart />,
      onClick: () => console.log("Like"),
    },
    {
      label: "Comment",
      icon: <FaComment />,
      onClick: () => console.log("Comment"),
    },
    {
      label: "Edit",
      icon: <FaEdit />, // 🔥 better icon
      onClick: () => setOpen(true),
    },
    {
      label: "Delete",
      icon: <FaTrash />, // 🔥 better icon
      onClick: () => onDelete(post.id),
    },
  ];

  return (
    <>
      <div className="max-w-md w-full bg-white rounded-2xl shadow-md p-4 flex flex-col gap-4">
        <PostHeader user={user} />

        <p className="text-gray-700 text-sm">{post.caption}</p>

        {post.image && (
          <div className="w-full h-64 overflow-hidden rounded-xl">
            <img
              src={post.image}
              alt="post"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <PostActions postActions={postActions} />
      </div>

      <CreatePostModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onEdit={onEdit}
        isEdit={true}
        existingPost={post}
      />
    </>
  );
}

export default PostCard;
