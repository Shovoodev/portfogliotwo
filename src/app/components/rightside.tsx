import React from "react";
import Tabs from "./Tabs";

const Rightside = () => {
  return (
    <aside className=" h-[90vh] w-full lg:w-[50%] border-1 border-white rounded-r-2xl ">
      <div>
        <div>
          <Tabs />
        </div>
      </div>
    </aside>
  );
};

export default Rightside;
