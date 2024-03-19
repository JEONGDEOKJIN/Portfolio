import React from "react";

const ClearAllStack = ({selectedFilterOptionArr , handleClearStacks}) => {
  return (
    <>
      {selectedFilterOptionArr?.includes("stacks_node.js") 
      || selectedFilterOptionArr?.includes("stacks_react.js")
      || selectedFilterOptionArr?.includes("stacks_next.js")
       ? (
        <li
          onClick={handleClearStacks}
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
