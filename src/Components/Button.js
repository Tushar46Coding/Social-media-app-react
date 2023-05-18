import React, { useContext } from "react";
import { Store } from "../Store";

const Button = ({ label }) => {
  const { dispatch: ctxDispatch } = useContext(Store);
  return (
    <button
      onClick={() => {
        if (label === "Add") {
          ctxDispatch({
            type: "INCREMENT_COUNTER",
          });
        } else {
          ctxDispatch({
            type: "RESET_COUNTER",
          });
        }
      }}
    >
      {label}
    </button>
  );
};

export default Button;
