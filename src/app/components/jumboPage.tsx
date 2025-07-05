import React from "react";
import LeftSide from "./leftSide";
import Rightside from "./rightside";

const JumboPage = () => {
  return (
    <div className=" justify-center p-1 lg:p-10 lg:flex ">
      <LeftSide />
      <Rightside />
    </div>
  );
};

export default JumboPage;
