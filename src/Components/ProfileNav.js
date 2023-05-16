import React from "react";
import img from "../images/user.png";
const ProfileNav = ({ user }) => {
  return (
    <div className="flex w-100 nav-hover padding-10-20 border-bottom border-radius overflow-hide gap-10">
      <img
        src={user.image || img}
        alt=""
        className="border w-h-60 radius-50 flex-center"
      />
      <p className="flex-center w-100 h-100 truncate">{user.userName}</p>
    </div>
  );
};

export default ProfileNav;
