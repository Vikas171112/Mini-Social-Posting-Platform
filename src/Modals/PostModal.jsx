import React from "react";
import { FaTimes } from "react-icons/fa";

function PostModal({ isOpen, onClose, type }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-semibold text-lg">Create Post</h2>

          <button onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="p-4">
          <p>{type} </p>
        </div>
      </div>
    </div>
  );
}

export default PostModal;
