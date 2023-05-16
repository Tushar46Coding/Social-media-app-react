import React, { useState } from "react";
import LoginSection from "./LoginSection";
import Modal from "./Modal";
import SignupContent from "./SignupContent";
const Footer = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  return (
    <>
      <div className="absolute bottom-0 left-0 background-blue w-100 padding-footer flex space-bet">
        <div className="white">
          <p className="light-bold font-big ">Don’t miss what’s happening</p>
          <p className="font-small">People on Twitter are the first to know.</p>
        </div>
        <div className="flex gap">
          <button
            onClick={() => setLoginModal(true)}
            className="padding-10 pointer border-radius border-none font-mid-big light-bold border-white background-blue white"
          >
            Log in
          </button>
          <button
            onClick={() => setSignUpModal(true)}
            className="padding-10 pointer border-radius border-none font-mid-big light-bold border-white background-grey black"
          >
            Sign up
          </button>
        </div>
      </div>
      {loginModal && (
        <Modal modal={false} handler={setLoginModal}>
          <LoginSection />
        </Modal>
      )}

      {signUpModal && (
        <Modal modal={false} handler={setSignUpModal}>
          <SignupContent handler={setSignUpModal} />
        </Modal>
      )}
    </>
  );
};

export default Footer;
