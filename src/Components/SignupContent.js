import React, { useContext, useRef } from "react";
import img from "../images/profilepic.jpg";
import { Store } from "../Store";
const SignupContent = ({ handler }) => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { users } = state;
  const userName = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const signUpHandler = () => {
    if (
      userName.current.value.length > 0 &&
      password.current.value.length > 0 &&
      confirmPassword.current.value.length > 0
    ) {
      const user = users.find(
        (user) => user.userName === userName.current.value
      );
      if (user) {
        alert("Same User name is already registered");
        return null;
      }
      if (confirmPassword.current.value === password.current.value) {
        const obj = {
          userName: userName.current.value,
          password: password.current.value,
          image: img,
        };
        ctxDispatch({ type: "SIGN_UP_APP", payload: obj });
        handler(false);
      } else {
        alert("Invalid password or userName");
      }
    } else {
      alert("Empty input is not valid");
    }
  };
  return (
    <>
      <p className="font-big w-100 flex-center bold mb-15">
        Create your account
      </p>
      <div className="w-100 relative mb-15">
        <input
          type="text"
          className="w-200 h-70 radius-10 padding-10 font-mid pt-10 border-thick"
          ref={userName}
        ></input>
        <div className="absolute top-0 left-0 w-100 flex space-between padding-0-10">
          <span className="font-mid grey">Name</span>
          <span className="font-mid grey">0/50</span>
        </div>
      </div>
      <div className="w-100 relative mb-15">
        <input
          type="password"
          className="w-200 h-70 radius-10 padding-10 font-mid pt-10 border-thick focus-none"
          ref={password}
        ></input>
        <p className="absolute top-0 left-0 w-100 flex space-between padding-0-10 font-mid grey">
          Password
        </p>
      </div>
      <div className="w-100 relative mb-15">
        <input
          type="password"
          className="w-200 h-70 radius-10 padding-10 font-mid pt-10 border-thick"
          ref={confirmPassword}
        ></input>
        <p className="absolute top-0 left-0 w-100 flex space-between padding-0-10 font-mid grey">
          Confirm Password
        </p>
      </div>
      <button
        onClick={signUpHandler}
        className="w-100 flex-center font-big background-blue border-none padding-10-20 pointer border-radius bold white"
      >
        Sign up
      </button>
    </>
  );
};

export default SignupContent;
