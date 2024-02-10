import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"
            onClick={() => deletePost(post.id)}
          >
            {<MdDelete />}
            <span className="visually-hidden">New alerts</span>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This post has been reacted by {post.reaction} people.
        </div>
      </div>
    </div>
  );
};

export default Post;
