import React, { useState, useEffect } from "react";
import { MdCancel } from "react-icons/md";

function CreatePostModal({
  isOpen,
  onClose,
  onCreate,
  onEdit,
  isEdit,
  existingPost,
}) {
  const [caption, setCaption] = useState("");

  useEffect(() => {
    if (isEdit && existingPost) {
      setCaption(existingPost.caption);
    }
  }, [isEdit, existingPost]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!caption.trim()) {
      alert("Post cannot be empty ");
      return;
    }

    if (isEdit) {
      onEdit(existingPost.id, { caption });
    } else {
      onCreate("Vikas", caption, "");
    }

    setCaption("");
    onClose();
  };
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-md p-5 shadow-lg flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg">
            {isEdit ? "Edit Post" : "Create Post"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-xl"
          >
            <MdCancel />
          </button>
        </div>

        <textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="What do you want to talk about?"
          className="w-full border rounded-xl p-3 outline-none resize-none min-h-[120px] focus:ring-2 focus:ring-blue-400"
        />

        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-xl font-medium transition"
          >
            {isEdit ? "Update" : "Post"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePostModal;
