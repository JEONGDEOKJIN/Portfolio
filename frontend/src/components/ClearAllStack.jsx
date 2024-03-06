import React from "react";

const ClearAllStack = ({selectedFilterOptionArr , handleClearAll}) => {
  return (
    <>
      {selectedFilterOptionArr?.includes("stacks_nodejs") 
      || selectedFilterOptionArr?.includes("stacks_reactjs")
      || selectedFilterOptionArr?.includes("stacks_nextjs")
       ? (
        <li
          onClick={handleClearAll}
          className="pl-2   mr-1  flex text-[13px] items-center  rounded-[7px] text-gray-500/80 cursor-pointer hover:bg-neutral-50/90 hover:rounded-[7px]"
        >
          clear
        </li>
      ) : (
        ""
      )}
    </>
    
  );
};

export default ClearAllStack;
