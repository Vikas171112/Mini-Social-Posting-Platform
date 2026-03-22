import { useState } from "react";

export const usePosts = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        name: "Vikas",
        avatar: "https://i.pravatar.cc/150?img=3",
      },
      caption: "Learning React deeply 🔥",
      image: "https://images.unsplash.com/photo-1773847469674-189153e5e32d",
      createdAt: "5 min ago",
    },
    {
      id: 2,
      user: {
        name: "John Doe",
        avatar: "https://i.pravatar.cc/150?img=5",
      },
      caption: "Consistency is the key 🔥",
      image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
      createdAt: "10 min ago",
      isLiked: true,
      likesCount: 30,
    },
  ]);
  const handleCreatePost = (post) => {
    setPosts((prev) => [post, ...prev]);
  };

  return {
    posts,
    handleCreatePost,
  };
};
