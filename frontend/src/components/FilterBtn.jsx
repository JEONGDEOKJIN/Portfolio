import React from "react";
import SVGFilterIcon from "./SVGFilterIcon";

const FilterBtn = ({
  isFilterBtnClicked,
  setIsFilterBtnClicked,
  selectedFilterOptionArr,
}) => {
  const handleFilterBtn = () => {
    setIsFilterBtnClicked(!isFilterBtnClicked);
  };

  return (
    <>
      {/* 선택 숫자 나오게 하기  */}
      {selectedFilterOptionArr.length > 0 ? (
        <div
          className="
            text-gray-700 text-[14px] flex items-center justify-evenly
            border-[1.5px] border-gray-200/90 rounded-full py-[10px] px-[20px]
            cursor-pointer hover:shadow-sortDropDownBox h-[45px]
            "
          onClick={handleFilterBtn}
        >
          <p className="flex items-center justify-center w-[18px] h-[18px]  mr-2  bg-[#ea64d9]  text-gray-50 rounded-full text-[12px]">
            {selectedFilterOptionArr.length}
          </p>
          <span> Filters </span>
        </div>
      ) : (
        <div
          className="
            text-gray-700 text-[14px] flex items-center justify-evenly
            border-[1.5px] border-gray-200/90 rounded-full py-[10px] px-[20px] mr-[72px]
            cursor-pointer hover:shadow-sortDropDownBox h-[45px]
            "
          onClick={handleFilterBtn}
        >
          <SVGFilterIcon />
          <span> Filters </span>
        </div>
      )}
    </>
  );
};

export default FilterBtn;
