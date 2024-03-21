import React from "react";

const DivTableRow = ({
  largeCriteria,
  mediumCriteria,
  smallCriteria,
  functionalRequirement,
  desc,
}) => {
  return (
    <>
      {functionalRequirement.map((item, index) => {
        return (
          <div className="flex text-[14px] text-gray-800">
            {/* <div className="flex items-center justify-center w-[10%]  grow border-b-[1px] border-r-[1px] border-neutral-200 p-3">
              {largeCriteria}
            </div>
            <div className="flex items-center justify-center w-[12%] grow border-b-[1px] border-r-[1px] border-neutral-200 p-3">
              {mediumCriteria}
            </div> */}
            <div className="flex items-center justify-center w-[20%] grow border-b-[1px] border-r-[1px] border-neutral-200 p-3">
              {smallCriteria}
            </div>
            <div className="flex items-center justify-center w-[20%]  grow border-b-[1px] border-r-[1px] border-neutral-200 text-left p-3">
              {item.fsd_requirement}
            </div>
            <div className="flex items-center justify-center w-[50%]  grow border-b-[1px]  border-neutral-200 text-left p-3">
              {item.fsd_description}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DivTableRow;
