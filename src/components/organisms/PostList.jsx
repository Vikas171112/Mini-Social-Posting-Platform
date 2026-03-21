import React from "react";
import PostCard from "./PostCard";

function PostList() {
  const posts = [
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
  ];
  return (
    <div className="bg-gray-100  p-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
