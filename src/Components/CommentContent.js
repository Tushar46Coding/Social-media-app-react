import React, { useContext, useRef } from "react";
import { Store } from "../Store";

const CommentContent = ({ id }) => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { posts } = state;
  const post = posts.find((post) => post.id === id);
  const comment = useRef();
  const handleComment = () => {
    if (comment.current.value.trim().length > 0) {
      ctxDispatch({
        type: "ADD_COMMENT",
        payload: { comment: comment.current.value, id },
      });
      comment.current.value = "";
    } else {
      alert("Empty comment is not valid");
    }
  };
  return (
    <>
      <div className="w-100 padding-10-20  flex gap border-bottom">
        <img
          className="border w-h-60 radius-50 flex-center"
          src={post.profilePic}
          alt=""
        ></img>
        <div className="">
          <div className="flex column gap-10">
            <p className="bold font-mid ">
              {post.user} <span className="grey normal">{post.pseudoName}</span>
            </p>
            <p className="font-small">{post.tweet}</p>
            <p className="mt-20 blue">{post.caption}</p>
          </div>
        </div>
      </div>
      <div className="w-100 padding-10-20  h-200 flex gap border-bottom column scroll-x hide-y">
        <p className="bold font-big">Comments</p>
        {post.comments.map((comment, i) => (
          <div className="flex column gap-10" key={i}>
            <p className="light-bold font-mid "> {comment.user}</p>
            <p className="font-small grey">{comment.message}</p>
          </div>
        ))}
      </div>
      <div className="padding-10 w-100 flex column">
        <input
          type="text"
          placeholder="Write Your Comment!"
          className="w-100 h-70 padding-10 placeholder font-mid mb-15 focus-none border-bottom"
          ref={comment}
          defaultValue=""
        />
        <div className=" flex space-between w-100 flex-center">
          <button
            onClick={handleComment}
            className=" flex-center font-mid background-blue border-none padding-10-20 pointer border-radius normal white"
          >
            Comment
          </button>
        </div>
      </div>
    </>
  );
};

export default CommentContent;
