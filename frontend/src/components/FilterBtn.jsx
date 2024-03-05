import React from "react";
import SVGFilterIcon from "./SVGFilterIcon";

const FilterBtn = ({ isFilterBtnClicked, setIsFilterBtnClicked }) => {
  const handleFilterBtn = () => {
    setIsFilterBtnClicked(!isFilterBtnClicked);
  };

  return (
    <>
      <div
        className="
            text-gray-700 text-[14px] flex items-center justify-evenly
            border-[1.5px] border-gray-200/90 rounded-full py-[10px] px-[20px]
            cursor-pointer hover:shadow-sortDropDownBox h-[45px]
            "
        onClick={handleFilterBtn}
      >
        <SVGFilterIcon />
        <span> Filters </span>
      </div>
    </>
  );
};

export default FilterBtn;
