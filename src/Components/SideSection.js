import React, { useState } from "react";
import Modal from "./Modal";
import CreateAccount from "./CreateAccount";
import SignupContent from "./SignupContent";

const SideSection = () => {
  const [signupModal, setSignupModal] = useState(false);
  return (
    <div className="w-32 padding-30 ">
      <CreateAccount handler={setSignupModal} />
      {signupModal && (
        <Modal modal={signupModal} handler={setSignupModal}>
          <SignupContent handler={setSignupModal} />
        </Modal>
      )}
    </div>
  );
};

export default SideSection;
