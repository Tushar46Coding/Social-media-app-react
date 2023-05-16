import React from "react";

const CreateAccount = ({ handler }) => {
  return (
    <div className="border w-100 border-radius padding-20-10 flex column sidebar-gap">
      <p className="font-big bold">New to Twitter?</p>
      <p className="font-small grey">
        Sign up now to get your own personalized timeline!
      </p>
      <button
        onClick={() => handler(true)}
        className="border w-100 flex-center padding-10 border-radius border-thick transparent light-bold nav-hover pointer font-mid"
      >
        Create account
      </button>
      <p className="font-small grey ">
        By signing up, you agree to the{" "}
        <a href="#" target="_blank" className="decoration-none blue">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" target="_blank" className="decoration-none blue">
          Privacy Policy
        </a>
        , including{" "}
        <a href="#" target="_blank" className="decoration-none blue">
          Cookie Use
        </a>
        .
      </p>
    </div>
  );
};

export default CreateAccount;
