import React, { useState } from "react";
import DropDownArrow from "./DropDownArrow";
import DropDownListOption from "./DropDownListOption";
import DropDownListOptionFilter from "./DropDownListOptionFilter";

const FilterShots = ({
  selectedFilterOptionArr,
  setSelectedFilterOptionArr,
}) => {
  const [isSortDropDown, setIsSortDropDown] = useState(false);

  const sortDropDown = () => {
    setIsSortDropDown(!isSortDropDown);
  };

  const handleSortDropDownList = (option, view) => {
    // setSortOption(option);
    setIsSortDropDown(!isSortDropDown);
    // setViewSelectedOption(view);
  };

  const handleClearAll = () => {
    setSelectedFilterOptionArr([]);
  };

  return (
    <>
      <section>
        <li
          onClick={handleClearAll}
          className="pl-2 h-[42px] text-sm flex text-[13px] items-center  rounded-[7px] text-gray-600 cursor-pointer hover:bg-neutral-50/90 hover:rounded-[7px]"
        >
          clear all ❎
        </li>

        <div
          className="
        px-4 font-medium h-[45px] border-[1.5px] text-[14px]
        border-gray-200/90 rounded-lg relative 
        flex items-center justify-between  cursor-pointer  
        hover:shadow-sortDropDownBox text-gray-700 "
          onClick={sortDropDown}
        >
          <span className="min-w-[125px] text-gray-800">
            {/* {viewSelectedOption} */}
          </span>
          <DropDownArrow isSortDropDown={isSortDropDown} />

          {isSortDropDown ? (
            <DropDownListOptionFilter
              selectedFilterOptionArr={selectedFilterOptionArr}
              setSelectedFilterOptionArr={setSelectedFilterOptionArr}
              handleSortDropDownList={handleSortDropDownList}
              //   sortOption={sortOption}
            />
          ) : null}
        </div>
      </section>
    </>
  );
};

export default FilterShots;
