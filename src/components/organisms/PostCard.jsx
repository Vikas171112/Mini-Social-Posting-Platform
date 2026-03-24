import { useState } from "react";
import PostModal from "../../Modals/PostModal";
import PostHeader from "../molecules/PostHeader";

function PostCard({ post, onEdit, onDelete }) {
  console.log(post);
  const [open, setOpen] = useState(false);

  if (!post) return null; // 🔥 CRITICAL FIX

  return (
    <>
      <div className="bg-white p-4 rounded-xl shadow mb-3">
        <PostHeader
          user={post.user}
          onEdit={() => setOpen(true)}
          onDelete={() => onDelete(post.id)}
        />

        <p className="mt-2">{post.caption}</p>

        {post.image && (
          <img
            src={post.image}
            alt=""
            className="w-full h-60 object-cover rounded mt-2"
          />
        )}
      </div>

      <PostModal
        isOpen={open}
        onClose={() => setOpen(false)}
        isEdit={true}
        existingPost={post}
        onEdit={onEdit}
      />
    </>
  );
}
export default PostCard;
