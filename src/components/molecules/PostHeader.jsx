import React, { useState } from "react";
import Avatar from "../atoms/Avatar";
import { FaEllipsisH, FaEdit, FaTrash } from "react-icons/fa";

function PostHeader({ user, onEdit, onDelete }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex items-center justify-between p-3 relative">
      <div className="flex items-center gap-3">
        <Avatar src={user?.avatar} />

        <div>
          <p className="text-sm font-semibold">{user?.name}</p>
          <p className="text-xs text-gray-500">5 min ago</p>
        </div>
      </div>

      <div className="relative">
        <button onClick={() => setShowMenu((prev) => !prev)}>
          <FaEllipsisH className="text-gray-600" />
        </button>

        {showMenu && (
          <div className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow-md z-10">
            <button
              onClick={() => {
                onEdit();
                setShowMenu(false);
              }}
              className="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-gray-100"
            >
              <FaEdit /> Edit
            </button>

            <button
              onClick={() => {
                onDelete();
                setShowMenu(false);
              }}
              className="flex items-center gap-2 w-full px-3 py-2 text-sm text-red-500 hover:bg-gray-100"
            >
              <FaTrash /> Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PostHeader;
