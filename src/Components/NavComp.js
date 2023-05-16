import React from "react";

const NavComp = ({ label, children, handler }) => {
  return (
    <div
      className="flex gap font-mid-big nav-hover padding-10-20 border-radius pointer flex-center"
      onClick={handler}
    >
      {children}
      <p className="normal">{label}</p>
    </div>
  );
};

export default NavComp;
