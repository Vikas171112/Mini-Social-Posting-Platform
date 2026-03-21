import React from "react";
import FeedLayout from "../layouts/FeedLayout";
import PostBox from "../components/organisms/PostBox";
import PostCard from "../components/organisms/PostCard";
import { usePosts } from "../hooks/usPosts";

function Homepage() {
  const { posts, handleCreatePost, handleDeletePost, handleEditPost } =
    usePosts();
  console.log(posts);

  return (
    <FeedLayout>
      <PostBox onCreate={handleCreatePost} />
      {posts?.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onEdit={handleEditPost}
          onDelete={handleDeletePost}
        />
      ))}
    </FeedLayout>
  );
}

export default Homepage;
