import React from "react";

const ClearAllCategory = ({ selectedFilterOptionArr, handleClearCategory }) => {
  return (
    <>
      {selectedFilterOptionArr?.includes("category_project") || selectedFilterOptionArr?.includes("category_feature")
       ? (
        <li
          onClick={handleClearCategory}
          className="  mr-1  flex text-[13px] items-center  rounded-[7px] text-gray-500/80 cursor-pointer hover:bg-neutral-50/90 hover:rounded-[7px]"
        >
          clear
        </li>
      ) : (
        ""
      )}
    </>
  );
};

export default ClearAllCategory;
