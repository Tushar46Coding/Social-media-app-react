import React, { useContext, useState } from "react";
import NavComp from "./NavComp";
import ProfileNav from "./ProfileNav";
import { Store } from "../Store";
import Modal from "./Modal";
import ConfirmModal from "./ConfirmModal";
import ProfileComp from "./ProfileComp";

const Header = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { posts, user } = state;
  const [modal, setModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  const signoutHandler = () => {
    ctxDispatch({ type: "SIGNOUT" });
    setModal(false);
  };
  return (
    <>
      <div className="w-22 border-right padding-15-50 flex column header-gap border overflow-hide select-none bold">
        <i className="fa-brands fa-twitter header-icon blue nav-hover radius-50 padding-10-20" />
        <NavComp label="Explore">
          <i class="fa-sharp fa-solid fa-hashtag icon"></i>
        </NavComp>
        <NavComp label="Settings">
          <i className="fa-sharp fa-regular fa-gear icon bold"></i>
        </NavComp>

        {user && (
          <>
            <NavComp label="Profile" handler={setProfileModal}>
              <i className="fa-regular fa-user bold icon"></i>
            </NavComp>
            <NavComp label="Sign out" handler={openModal}>
              <i className="fa-regular fa-user bold icon"></i>
            </NavComp>
            <ProfileNav user={user} />
          </>
        )}
      </div>
      {modal && (
        <Modal modal={modal} handler={setModal}>
          <ConfirmModal handler={signoutHandler} />
        </Modal>
      )}

      {profileModal && (
        <Modal modal={profileModal} handler={setProfileModal}>
          <ProfileComp handler={setProfileModal} />
        </Modal>
      )}
    </>
  );
};

export default Header;
