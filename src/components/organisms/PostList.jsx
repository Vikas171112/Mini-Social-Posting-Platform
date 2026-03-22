import React from "react";
import PostCard from "./PostCard";

function PostList({ posts }) {
  return (
    <div className="bg-gray-100  p-4">
      {posts.map((post) => (
        <PostCard key={post?.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
