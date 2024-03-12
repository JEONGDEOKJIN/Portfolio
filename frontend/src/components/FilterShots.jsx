import React, { useState } from "react";
import DropDownArrow from "./DropDownArrow";
import DropDownListOption from "./DropDownListOption";
import DropDownListOptionFilter from "./DropDownListOptionFilter";
import ClearAll from "./ClearAll";
import FieldsetRole from "./FieldsetRole";
import FieldsetCategory from "./FieldsetCategory";
import FieldsetStack from "./FieldsetStack";

const FilterShots = ({
  selectedFilterOptionArr,
  setSelectedFilterOptionArr,
}) => {
  return (
    <>
      <div className="flex flex-row justify-between w-full px-[72px]  ">
        <FieldsetCategory
          selectedFilterOptionArr={selectedFilterOptionArr}
          setSelectedFilterOptionArr={setSelectedFilterOptionArr}
        />

        <FieldsetStack
          selectedFilterOptionArr={selectedFilterOptionArr}
          setSelectedFilterOptionArr={setSelectedFilterOptionArr}
        />

        <FieldsetRole
          selectedFilterOptionArr={selectedFilterOptionArr}
          setSelectedFilterOptionArr={setSelectedFilterOptionArr}
        />
      </div>
    </>
  );
};

export default FilterShots;
