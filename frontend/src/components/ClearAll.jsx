import React from "react";

const ClearAll = ({selectedFilterOptionArr , handleClearAll}) => {
  return (
    <>
      {selectedFilterOptionArr.length > 0 ? (
        <li
          onClick={handleClearAll}
          className="pl-2 h-[42px] text-sm flex text-[13px] items-center  rounded-[7px] text-gray-600 cursor-pointer hover:bg-neutral-50/90 hover:rounded-[7px]"
        >
          clear all ❎❎❎❎❎❎
        </li>
      ) : (
        ""
      )}
    </>
    
  );
};

export default ClearAll;
