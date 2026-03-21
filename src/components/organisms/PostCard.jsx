import React from "react";
import PostHeader from "../molecules/PostHeader";
import { user } from "../../constants/currentUser";
import PostContent from "../molecules/PostContent";
import PostActions from "../molecules/PostActions";

function PostCard({ post }) {
  const handleEdit = () => {
    console.log("Edit post:", post.id);
  };

  const handleDelete = () => {
    console.log("Delete post:", post.id);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-4">
      <PostHeader
        user={post.user}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <PostContent post={post} />
      <PostActions />
    </div>
  );
}

export default PostCard;
