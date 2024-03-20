import React from "react";

const DivTableRowRelatedItem = ({
  largeCriteria,
  onClick,
  mediumCriteria,
  functionalRequirement,
}) => {
  return (
    <>
      <div
        onClick={onClick}
        className="cursor-pointer flex text-[14px] text-gray-800 border-b-[1px] 
        hover:bg-gray-200/80 hover:text-neutral-900 transition-all duration-500 ease-in-out "
      >
        <div className="flex items-center justify-center w-[15%]  grow  border-r-[1px] border-neutral-200 p-3">
          {largeCriteria}
        </div>
        <div className="flex items-center justify-center w-[35%] grow  border-r-[1px] border-neutral-200 p-3">
          {mediumCriteria}
        </div>
        <div className="flex items-center justify-center w-[50%]  grow   border-neutral-200 text-left p-3">
          {functionalRequirement}
        </div>
      </div>
    </>
  );
};

export default DivTableRowRelatedItem;
