import React from "react";

const ConfirmModal = ({ handler }) => {
  return (
    <>
      <p className="font-big bold flex-center">
        Please Confirm if you want to sign out!
      </p>
      <button
        onClick={handler}
        className=" flex-center font-mid background-blue border-none padding-10-20 pointer border-radius normal white"
      >
        Confirm
      </button>
    </>
  );
};

export default ConfirmModal;
