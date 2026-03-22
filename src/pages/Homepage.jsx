import React, { useState } from "react";
import FeedLayout from "../layouts/FeedLayout";
import PostBox from "../components/organisms/PostBox";
import PostList from "../components/organisms/PostList";
import PostModal from "../Modals/PostModal";
import { usePosts } from "../hooks/usePosts";

function Homepage() {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("caption");
  const { handleCreatePost, posts } = usePosts();

  return (
    <FeedLayout>
      <PostBox onOpen={() => setIsOpen(true)} onSelectType={setType} />
      <PostList posts={posts} />
      <PostModal
        isOpen={isOpen}
        type={type}
        onClose={() => setIsOpen(false)}
        onCreate={handleCreatePost}
      />
    </FeedLayout>
  );
}

export default Homepage;
