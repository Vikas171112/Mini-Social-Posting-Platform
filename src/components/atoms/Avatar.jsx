import React from "react";

function Avatar({ src, alt }) {
  return (
    <div className="h-16 w-16 rounded-full overflow-hidden border-2 p-1 text-red-500">
      <img
        src={src}
        alt={alt}
        className="h-full w-full rounded-full self-center object-cover"
      />
    </div>
  );
}

export default Avatar;
