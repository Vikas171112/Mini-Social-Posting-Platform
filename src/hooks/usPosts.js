import { useState } from "react";
import { createPost, deletePost, editPost } from "../services/postService";

export const usePosts = () => {
  const [posts, setPosts] = useState([]);

  const handleCreatePost = (user, caption, image) => {
    const newPost = createPost(user, caption, image);
    setPosts((prev) => [newPost, ...prev]);
  };
  const handleEditPost = (postId, updatedData) => {
    setPosts((prev) => editPost(prev, postId, updatedData));
  };
  const handleDeletePost = (postId) => {
    setPosts((prev) => deletePost(prev, postId));
  };
  return {
    posts,
    handleCreatePost,
    handleDeletePost,
    handleEditPost,
  };
};
