import React, { useContext, useRef } from "react";
import profilePic from "../images/profilepic.jpg";
import { Store } from "../Store";
const AddTweet = ({ user }) => {
  const { dispatch: ctxDispatch } = useContext(Store);
  const tweet = useRef();
  const file = useRef();
  const caption = useRef();
  const tweetAddHandler = () => {
    if (tweet.current.value.length > 0) {
      const obj = {
        profilePic: profilePic,
        user: user.userName,
        pseudoName: "@" + user.userName,
        tweet: tweet.current.value,
        caption:
          caption.current?.value?.charAt(0) === "#"
            ? caption.current?.value
            : "#" + caption.current?.value,
        file: file.current.value,
        likes: [],
        comments: [],
      };
      ctxDispatch({ type: "ADD_TWEET", payload: obj });
      tweet.current.value = "";
      file.current.value = "";
      caption.current.value = "";
    } else {
      alert("Must insert a tweet");
    }
  };
  return (
    <div className="w-100 flex padding-10-20 border-bottom">
      <img
        className="border w-h-60 radius-50 flex-center"
        src={user.image}
        alt=""
      ></img>
      <div className=" w-100 flex column gap-10 padding-10">
        <input
          type="text"
          placeholder="Whats is happening?!"
          className="w-100  padding-10 placeholder font-mid border-none focus-none"
          ref={tweet}
          defaultValue={tweet.current?.value}
        />
        <input
          type="text"
          placeholder="Enter caption if you want?!"
          className="w-100 padding-10 font-mid border-none focus-none"
          ref={caption}
          defaultValue={caption.current?.value}
        />
        <input
          type="text"
          placeholder="Enter Image URL if you want?!"
          className="w-100 padding-10 font-mid border-none focus-none"
          ref={file}
          defaultValue={file.current?.value}
        />
        <div className="padding-10 flex space-between w-100 flex-center">
          <i className="fa-regular fa-image icon padding-10 radius-50 nav-hover pointer blue relative overflow-hide"></i>
          <button
            onClick={tweetAddHandler}
            className=" flex-center font-mid background-blue border-none padding-10-20 pointer border-radius normal white"
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTweet;
