import React, { useState } from "react";
import FeedLayout from "../layouts/FeedLayout";
import PostBox from "../components/organisms/PostBox";
import PostList from "../components/organisms/PostList";
import PostModal from "../Modals/PostModal";

function Homepage() {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("caption");
  return (
    <FeedLayout>
      <PostBox onOpen={() => setIsOpen(true)} onSelectType={setType} />
      <PostList />
      <PostModal isOpen={isOpen} type={type} onClose={() => setIsOpen(false)} />
    </FeedLayout>
  );
}

export default Homepage;
