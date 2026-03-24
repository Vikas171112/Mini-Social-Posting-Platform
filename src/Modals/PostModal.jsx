import React, { useRef, useState, useEffect } from "react";

function PostModal({
  isOpen,
  onClose,
  onCreate,
  onEdit,
  isEdit,
  existingPost,
}) {
  const [preview, setPreview] = useState(null);
  const [caption, setCaption] = useState(""); // 🔥 controlled input

  const fileRef = useRef();

  // ✅ SAFE PREFILL
  useEffect(() => {
    if (isEdit && existingPost) {
      setCaption(existingPost.caption || "");
      setPreview(existingPost.image || null);
    }
  }, [isEdit, existingPost]);

  if (!isOpen) return null;

  const handleFile = () => {
    const file = fileRef.current?.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    if (!caption.trim()) return;

    if (isEdit) {
      onEdit(existingPost.id, {
        caption,
        image: preview,
      });
    } else {
      onCreate({
        caption,
        image: preview,
      });
    }

    // reset
    setCaption("");
    setPreview(null);

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white p-4 rounded-xl w-full max-w-md flex flex-col gap-3">
        <textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="w-full border p-2"
          placeholder="Write something..."
        />

        <input type="file" ref={fileRef} onChange={handleFile} />

        {preview && (
          <img
            src={preview}
            alt="preview"
            className="w-full h-40 object-cover rounded"
          />
        )}

        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white p-2 rounded"
        >
          {isEdit ? "Update" : "Post"}
        </button>
      </div>
    </div>
  );
}

export default PostModal;
