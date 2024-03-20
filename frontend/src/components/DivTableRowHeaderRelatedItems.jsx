import React from "react";

const DivTableRowHeaderRelatedItems = ({
  largeCriteria,
  mediumCriteria,
  functionalRequirement,
}) => {
  return (
    <>
      <div className="flex text-[14px] text-gray-900 border-t-[1px] ">
        <div className="w-[15%]  grow border-b-[1px] border-r-[1px] border-neutral-200 text-center py-3">
          {largeCriteria}
        </div>
        <div className="w-[35%]  grow border-b-[1px] border-r-[1px] border-neutral-200 text-center py-3">
          {mediumCriteria}
        </div>
        <div className="w-[50%]  grow border-b-[1px]  border-neutral-200 text-center py-3">
          {functionalRequirement}
        </div>
      </div>
    </>
  );
};

export default DivTableRowHeaderRelatedItems;
