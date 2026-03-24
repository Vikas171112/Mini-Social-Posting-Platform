import React, { useState, useRef, useEffect } from "react";
import { FaEllipsisH } from "react-icons/fa";

function PostHeader({ user, onEdit, onDelete }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // 🔥 Outside click close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex justify-between items-center">
      {/* 🔹 USER INFO */}
      <div className="flex items-center gap-3">
        <img
          src={user?.avatar}
          alt="avatar"
          className="w-10 h-10 rounded-full object-cover"
        />

        <div>
          <p className="font-semibold">{user?.name}</p>
          <p className="text-xs text-gray-500">Just now</p>
        </div>
      </div>

      {/* 🔹 ACTION BUTTON */}
      <div className="relative" ref={menuRef}>
        <FaEllipsisH
          className="cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        />

        {/* 🔥 DROPDOWN */}
        {open && (
          <div className="absolute right-0 mt-2 w-28 bg-white shadow-md rounded">
            <button
              onClick={() => {
                onEdit();
                setOpen(false);
              }}
              className="block w-full text-left px-3 py-2 hover:bg-gray-100"
            >
              Edit
            </button>

            <button
              onClick={() => {
                onDelete();
                setOpen(false);
              }}
              className="block w-full text-left px-3 py-2 hover:bg-gray-100 text-red-500"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PostHeader;
