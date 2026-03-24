export const createPostService = (user, post) => {
  return {
    id: Date.now().toString(),
    user: {
      name: user.name,
      avatar: user.avatar,
    },
    caption: post.caption,
    image: post?.image || null,
    video: post?.video || null,
    createdAt: new Date().toISOString(),
  };
};
export const editPostService = (posts, postId, updatedData) => {
  return posts.map((post) =>
    post.id === postId
      ? {
          ...post,
          ...updatedData,
          updatedAt: new Date().toISOString(),
        }
      : post,
  );
};

export const deletePostService = (posts, postId) => {
  return posts.filter((post) => post.id !== postId);
};
