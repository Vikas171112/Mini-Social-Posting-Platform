import React from "react";

function PostContent({ post }) {
  return (
    <div className="w-full flex flex-col gap-3">
      {/* Caption */}
      {post?.caption && (
        <p className="px-4 text-sm text-gray-800">{post.caption}</p>
      )}

      {/* Image Container with Fixed Ratio */}
      {post?.image && (
        <div className="w-full aspect-square bg-gray-100 overflow-hidden">
          <img
            src={post.image}
            alt="post"
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
}

export default PostContent;
