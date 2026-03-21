import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/atoms/Button";
import Input from "./components/atoms/Input";
import Avatar from "./components/atoms/Avatar";
import PostHeader from "./components/molecules/PostHeader";
import PostActions from "./components/molecules/PostActions";
import PostCard from "./components/organisms/PostCard";
import PostInput from "./components/molecules/PostInput";
import PostBox from "./components/organisms/PostBox";
import FeedLayout from "./layouts/FeedLayout";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Homepage />
    </>
  );
}

export default App;
