import React, { useContext } from "react";
import { Store } from "../Store";

const PostContent = ({ item, i, setCommentModal, setCommentId, user }) => {
  const { dispatch: ctxDispatch } = useContext(Store);
  const likesHandler = () => {
    const post = { ...item };
    const likdeArray = post.likes;
    likdeArray.push(user.userName);
    const obj = { ...post, likes: likdeArray };
    ctxDispatch({ type: "ADDLIKES", payload: { object: obj, index: i } });
  };
  return (
    <div className="card-hover w-100 padding-10-20  flex gap border-bottom">
      <img
        className="border w-h-60 radius-50 flex-center"
        src={item.profilePic}
        alt=""
      ></img>
      <div className="">
        <div className="flex column gap-10">
          <p className="bold font-mid ">
            {item.user} <span className="grey normal">{item.pseudoName}</span>
          </p>
          <p className="font-small">{item.tweet}</p>
          <p className="mt-20 blue">{item.caption}</p>
          <img
            src={item.file}
            alt=""
            className="w-100 image border-radius"
          ></img>
          <div className="flex w-100 even-space gap">
            <div
              className="flex gap-10 hover-blue flex-center font-small grey"
              onClick={() => {
                setCommentModal(true);
                setCommentId(item.id);
              }}
            >
              <i className="fa-regular fa-comment back-blue padding-10 radius-50"></i>
              <span>{item.comments.length}</span>
            </div>
            <div className="flex gap-10 hover-pink flex-center font-small grey">
              {item?.likes.includes(user?.userName) ? (
                <i className="fa-regular fa-heart back-pink padding-10 radius-50 bold pink"></i>
              ) : user ? (
                <i
                  className="fa-regular fa-heart back-pink padding-10 radius-50"
                  onClick={likesHandler}
                ></i>
              ) : (
                <i className="fa-regular fa-heart back-pink padding-10 radius-50"></i>
              )}
              <span>{item.likes.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostContent;
