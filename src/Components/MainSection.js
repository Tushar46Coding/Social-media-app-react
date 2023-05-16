import React, { useContext } from "react";
import SideSection from "./SideSection";
import CenterSection from "./CenterSection";
import { Store } from "../Store";

const MainSection = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { user } = state;
  return (
    <div className="w-77 flex">
      <CenterSection />
      {!user && <SideSection />}
    </div>
  );
};

export default MainSection;
