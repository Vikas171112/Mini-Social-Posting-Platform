import React from "react";
import PostBox from "../components/organisms/PostBox";
import PostCard from "../components/organisms/PostCard";
import CreatePostModal from "../Modals/CreatePostModal";

function FeedLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-6xl flex gap-6 p-4">
        <div className="hidden md:flex flex-col w-1/4 bg-white rounded-2xl shadow p-4 h-fit">
          <h2 className="font-bold text-lg mb-2">Profile</h2>
          <p className="text-sm text-gray-600">Vikas Kumar</p>
        </div>

        <div className="flex-1 flex flex-col gap-4">{children}</div>

        <div className="hidden lg:flex flex-col w-1/4 bg-white rounded-2xl shadow p-4 h-fit">
          <h2 className="font-bold text-lg mb-2">Suggestions</h2>
          <p className="text-sm text-gray-600">Follow more people</p>
        </div>
      </div>
    </div>
  );
}

export default FeedLayout;
