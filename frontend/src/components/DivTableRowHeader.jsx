import React from "react";

const DivTableRowHeader = ({
  largeCriteria,
  mediumCriteria,
  smallCriteria,
  requirement,
  desc,
}) => {
  return (
    <>
      <div className="flex text-[12px] text-gray-900 ">
        <div className="max-w-[8%]  grow border-b-[1px] border-r-[1px] border-neutral-200 text-center py-3">
          {largeCriteria}
        </div>
        <div className="max-w-[11%]  grow border-b-[1px] border-r-[1px] border-neutral-200 text-center py-3">
          {mediumCriteria}
        </div>
        <div className="max-w-[11%]  grow border-b-[1px] border-r-[1px] border-neutral-200 text-center py-3">
          {smallCriteria}
        </div>
        <div className="max-w-[35%]  grow border-b-[1px] border-r-[1px] border-neutral-200 text-center py-3">
          {requirement}
        </div>
        <div className="max-w-[35%]  grow border-b-[1px]  border-neutral-200 text-center py-3">
          {desc}
        </div>
      </div>
    </>
  );
};

export default DivTableRowHeader;
