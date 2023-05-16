import React, { useContext, useRef, useState } from "react";
import img from "../images/profilepic.jpg";
import { Store } from "../Store";

const ProfileComp = ({ handler }) => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { user } = state;
  const imgUrl = useRef();
  const [changeImage, setChangeImage] = useState(false);
  const handleProfilePic = () => {
    if (imgUrl.current.value.trim().length > 0) {
      const obj = {
        ...user,
        image: imgUrl.current.value,
      };
      ctxDispatch({ type: "CHANGE_IMAGE", payload: obj });
      handler(false);
    } else {
      alert("Empty input is not valid");
    }
  };
  return (
    <div className="flex-center column gap-10">
      <div
        className="relative overflow-hide radius-50 flex-center pointer"
        onClick={() => setChangeImage(true)}
      >
        <img src={img} alt="" className="w-h-150 radius-50" />
        <div className="absolute w-h back-grey w-100 h-100 top-0 left-0"></div>
        <i className="fa-regular fa-camera absolute bold white"></i>
      </div>
      <div className="bold font-big">Tushar</div>
      {changeImage && (
        <div className="w-100 relative mb-15 gap-10 flex-center column">
          <input
            type="text"
            className="w-200 h-70 radius-10 padding-10 font-mid pt-10 border-thick focus-none"
            ref={imgUrl}
          ></input>
          <p className="absolute top-0 left-0 w-100 flex space-between padding-0-10 font-mid grey">
            New Image Link
          </p>
          <button
            onClick={handleProfilePic}
            className="w-100 flex-center font-big background-blue border-none padding-10-20 pointer border-radius bold white"
          >
            Change
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileComp;
