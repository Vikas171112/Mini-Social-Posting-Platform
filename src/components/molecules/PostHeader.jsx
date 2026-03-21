import React from "react";
import Avatar from "../atoms/Avatar";

function PostHeader({ user }) {
  return (
    <div className="flex  items-center gap-2 ">
      <span>
        <Avatar src={user.avatar} />
      </span>
      <span className="text-lg font-bold">
        {user.name}
        <p className="text-xs text-gray-500">5min ago</p>
      </span>
      <hr />
    </div>
  );
}

export default PostHeader;
