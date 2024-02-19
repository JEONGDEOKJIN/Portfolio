import React from "react";
import Menu from "./Menu";

const Navigation = () => {
  return (
    <>
      <nav>
        <Menu />
      </nav>

      <nav>
        <div className="flex flex-row justify-between">
          <div> 🤸‍♂️ </div>
          <div> DJ </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
