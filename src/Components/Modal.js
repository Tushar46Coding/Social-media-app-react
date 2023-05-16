import React from "react";

const Modal = ({ modal, handler, children }) => {
  return (
    <div className="w-h absolute top-0 left-0 z-1000 back-grey flex-center scroll-x hide-y">
      <div className="p-50  back-white border-radius relative z-1001 flex-center column gap-10">
        <i
          onClick={() => handler(false)}
          className="fa-regular fa-xmark absolute top-5 left-5 bold font-big padding-10 nav-hover pointer radius-50"
        ></i>
        {children}
      </div>
    </div>
  );
};

export default Modal;
