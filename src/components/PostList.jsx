/* eslint-disable no-unused-vars */
import { useContext } from "react";
import Post from "./Post";
// as is for to change any component name chage
import { PostList as PostlistData } from "../store/post-list-store";

const PostList = () => {
  // we want only postlist value from PostlistData
  const { postList } = useContext(PostlistData);
  console.log(postList[1].id)
  return (
    <>
      {postList.map((post) => (
        // eslint-disable-next-line react/jsx-key
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
