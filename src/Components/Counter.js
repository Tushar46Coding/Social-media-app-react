import React, { useContext } from "react";
import { Store } from "../Store";

const Counter = ({ context, label }) => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { counter, globalCounter } = state;
  return (
    <>
      <h3>
        {label} : {context === "global" ? globalCounter : counter}
      </h3>
    </>
  );
};

export default Counter;
