import React from "react";

const DivTableRowHeader = ({
  largeCriteria,
  mediumCriteria,
  smallCriteria,
  functionalRequirement, 
  nonFunctionalRequirement,
  desc,
}) => {
  return (
    <>
      <div className="flex text-[14px] text-gray-900 ">
        <div className="w-[8%]  grow border-b-[1px] border-r-[1px] border-neutral-200 text-center py-3">
          {largeCriteria}
        </div>
        <div className="w-[10%]  grow border-b-[1px] border-r-[1px] border-neutral-200 text-center py-3">
          {mediumCriteria}
        </div>
        <div className="w-[10%]  grow border-b-[1px] border-r-[1px] border-neutral-200 text-center py-3">
          {smallCriteria}
        </div>
        <div className="w-[10%]  grow border-b-[1px] border-r-[1px] border-neutral-200 text-center py-3">
          {functionalRequirement}
        </div>
        <div className="w-[10%]  grow border-b-[1px] border-r-[1px] border-neutral-200 text-center py-3">
          {nonFunctionalRequirement}
        </div>
        <div className="w-[30%]  grow border-b-[1px]  border-neutral-200 text-center py-3">
          {desc}
        </div>
      </div>
    </>
  );
};

export default DivTableRowHeader;
