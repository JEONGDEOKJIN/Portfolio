import React from "react";

const BtnFilter = ({value , handleViewProjectBtn , buttonName}) => {
  return (
    <>
      <button
        className="p-2 mr-1 text-sm bg-gray-200 rounded-lg x-5 y-3"
        value={"feature"}
        onClick={handleViewProjectBtn}
      >
        {buttonName}
      </button>
    </>
  );
};

export default BtnFilter;
