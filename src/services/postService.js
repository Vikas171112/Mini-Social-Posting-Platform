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
