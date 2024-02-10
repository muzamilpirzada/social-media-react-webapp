/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

// this is a create context deafult value that we provide to postListReducer and createContext

export const PostList = createContext({
  PostList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  return newPostList;
};
//   this is a component that takes chilfren as a props and it retrun PostList.Provider
// eslint-disable-next-line no-unused-vars
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = () => {};

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

 

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to hyderbad",
    body: "Hi Frirend, Iam going to hyderabad for some days",
    reaction: 2,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "10",
    title: "Going to hyderbad",
    body: "Hi Frirend, Iam going to hyderabad for some days",
    reaction: 6,
    userId: "user-10",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
];

export default PostListProvider;
