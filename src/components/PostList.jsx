/* eslint-disable no-unused-vars */
import { useContext } from "react";
import Post from "./Post";
// as is for to change any component name chage
import { PostList as PostlistData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  // we want only postlist value from PostlistData
  const { postList } = useContext(PostlistData);

  const handleGetPostsClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then(console.log);
  };
  return (
    <>
      {postList.length === 0 && <WelcomeMessage onGetPostsClick={handleGetPostsClick}></WelcomeMessage>}
      {postList.map((post) => (
        // eslint-disable-next-line react/jsx-key
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
