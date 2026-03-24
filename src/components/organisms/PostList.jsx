import React from "react";
import PostCard from "./PostCard";

function PostList({ posts, onEdit, onDelete }) {
  return (
    <div className="bg-gray-100 p-4">
      {posts?.map((post) => (
        <PostCard
          key={post?.id}
          post={post}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default PostList;
