export const createPost = (user, caption, image) => {
  return {
    id: Date.now(),
    user,
    caption,
    image,
    createdAt: new Date(),
    updatedAt: null,
  };
};
export const editPost = (posts, postId, updatedData) => {
  return posts.map((post) => {
    if (post.id === postId) {
      return {
        ...post,
        ...updatedData,
        updatedAt: new Date(),
      };
    }
    return post;
  });
};
export const deletePost = (posts, postId) => {
  return posts.filter((post) => post.id !== postId);
};
