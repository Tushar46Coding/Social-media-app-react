import React, { useContext, useState } from "react";
import img from "../images/profilepic.jpg";
import { Store } from "../Store";
import Modal from "./Modal";
import CommentContent from "./CommentContent";
import AddTweet from "./AddTweet";
import PostContent from "./PostContent";
const CenterSection = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { posts, user } = state;
  const [commentModal, setCommentModal] = useState(false);
  const [commentId, setCommentId] = useState(null);
  return (
    <>
      <div className="w-45 border-right relative scroll-x hide-y hidescroll pb-50">
        <p className=" z-1000 w-100 padding-20 bold font-big blur sticky top-0 left-0">
          Explore
        </p>
        {user && <AddTweet user={user} />}
        {posts.map((item, i) => (
          <PostContent
            setCommentId={setCommentId}
            item={item}
            i={i}
            key={i}
            setCommentModal={setCommentModal}
          />
        ))}
      </div>
      {commentModal && commentId && (
        <Modal modal={commentModal} handler={setCommentModal} id={commentId}>
          <CommentContent id={commentId} />
        </Modal>
      )}
    </>
  );
};

export default CenterSection;
