import React from "react";

const DivTableRow = ({
  largeCriteria,
  mediumCriteria,
  smallCriteria,
  requirement,
  desc,
}) => {
  return (
    <>
      <div className="flex text-[14px] text-gray-800">
        <div className="flex items-center justify-center w-[8%]  grow border-b-[1px] border-r-[1px] border-neutral-200 p-3">
          {largeCriteria}
        </div>
        <div className="flex items-center justify-center w-[10%] grow border-b-[1px] border-r-[1px] border-neutral-200 p-3">
          {mediumCriteria}
        </div>
        <div className="flex items-center justify-center w-[12%] grow border-b-[1px] border-r-[1px] border-neutral-200 p-3">
          {smallCriteria}
        </div>
        <div className="flex items-center justify-center w-[20%]  grow border-b-[1px] border-r-[1px] border-neutral-200 text-left p-3">
          {requirement}
        </div>
        <div className="flex items-center justify-center w-[30%]  grow border-b-[1px]  border-neutral-200 text-left p-3">
          {desc}
        </div>
      </div>
    </>
  );
};

export default DivTableRow;
