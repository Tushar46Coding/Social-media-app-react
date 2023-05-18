import React, { useContext, useRef, useState } from "react";
import { Store } from "../Store";

const LoginSection = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { users } = state;
  const userName = useRef();
  const password = useRef();
  const logInHandler = () => {
    if (
      password.current.value.length > 0 &&
      userName.current.value.length > 0
    ) {
      const user = users.find(
        (user) => user.userName === userName.current.value
      );
      if (user && user.password === password.current.value) {
        ctxDispatch({ type: "LOGIN_APP", payload: user });
      } else alert("Incorrect password or username");
    } else {
      alert("Empty input is not valid");
    }
  };
  const [, setRerender] = useState(false);

  return (
    <div>
      <p className="font-big w-100 flex-center bold mb-15">
        Create your account
      </p>
      <div className="w-100 relative mb-15">
        <input
          type="text"
          className="w-200 h-70 radius-10 padding-10 font-mid pt-10 border-thick"
          maxLength={50}
          ref={userName}
          onChange={() => setRerender((prevValue) => !prevValue)}
        ></input>
        <div className="absolute top-0 left-0 w-100 flex space-between padding-0-10">
          <span className="font-small grey">Name</span>
          <span className="font-small grey">
            {userName.current?.value.length || 0}/50
          </span>
        </div>
      </div>
      <div className="w-100 relative mb-15">
        <input
          type="password"
          className="w-200 h-70 radius-10 padding-10 font-mid pt-10 border-thick"
          ref={password}
        ></input>
        <p className="absolute top-0 left-0 w-100 flex space-between padding-0-10 font-small grey">
          Password
        </p>
      </div>
      <button
        onClick={logInHandler}
        className="w-100 flex-center font-big background-blue border-none padding-10-20 pointer border-radius bold white"
      >
        Log in
      </button>
    </div>
  );
};

export default LoginSection;
