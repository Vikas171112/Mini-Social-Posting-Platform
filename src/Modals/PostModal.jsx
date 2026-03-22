import React, { useRef } from "react";
import { FaTimes } from "react-icons/fa";
import Button from "../components/atoms/Button";
import { createPostService } from "../services/postService";
import { user } from "../constants/currentUser";

function PostModal({ isOpen, onClose, type }) {
  if (!isOpen) return null;

  const textRef = useRef();
  const fileRef = useRef();

  const handleSubmit = () => {
    const caption = textRef.current?.value || "";
    const file = fileRef.current?.files[0];

    let fileUrl = null;

    if (file) {
      fileUrl = URL.createObjectURL(file);
    }

    // 🔥 STEP 1: Create raw post object
    const post = {
      caption: caption.trim(),
      image: type === "Image" ? fileUrl : null,
      video: type === "Video" ? fileUrl : null,
    };

    // ❌ empty validation
    if (!post.caption) {
      console.log("❌ Empty post not allowed");
      return;
    }

    // 🔥 STEP 2: Use service
    const finalPost = createPostService(user, post);

    console.log("🔥 Final Post Object:", finalPost);

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-semibold text-lg">Create {type} Post</h2>
          <button onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 flex flex-col gap-4">
          {/* Caption / Article */}
          {(type === "caption" || type === "Article") && (
            <textarea
              ref={textRef}
              placeholder="What do you want to talk about?"
              className="w-full border rounded-xl p-3 outline-none min-h-[120px]"
            />
          )}

          {/* Image */}
          {type === "Image" && (
            <>
              <input
                type="file"
                ref={fileRef}
                accept="image/*"
                className="border p-2 rounded"
              />
              <textarea
                ref={textRef}
                placeholder="Add a caption..."
                className="w-full border rounded-xl p-3 outline-none min-h-[100px]"
              />
            </>
          )}

          {/* Video */}
          {type === "Video" && (
            <>
              <input
                type="file"
                ref={fileRef}
                accept="video/*"
                className="border p-2 rounded"
              />
              <textarea
                ref={textRef}
                placeholder="Add a caption..."
                className="w-full border rounded-xl p-3 outline-none min-h-[100px]"
              />
            </>
          )}

          {/* Footer */}
          <div className="flex justify-end">
            <Button
              onClick={handleSubmit}
              className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-orange-600 active:scale-95 transition-all duration-200"
            >
              Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostModal;
