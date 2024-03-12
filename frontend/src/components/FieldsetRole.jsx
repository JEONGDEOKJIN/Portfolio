import React, { useEffect, useRef, useState } from "react";
import DropDownArrow from "./DropDownArrow";
import DropDownListOptionFilter from "./DropDownListOptionFilter";
import ClearAll from "./ClearAll";
import ULDropDownRole from "./ULDropDownRole";
import ClearAllRole from "./ClearAllRole";
import LabelDefault from "./LabelDefault";

const FieldsetRole = ({
  //   sortDropDown,
  //   isSortDropDown,
  selectedFilterOptionArr,
  setSelectedFilterOptionArr,
  //   handleSortDropDownList,
}) => {
  const [isSortDropDown, setIsSortDropDown] = useState(false);
  const [selectedLabels, setSelectedLabels] = useState();
  const dropDownRef = useRef(null);

  const handleClearRoles = () => {
    setSelectedFilterOptionArr(
      selectedFilterOptionArr.filter(
        (item) =>
          item != "roles_frontend" &&
          item != "roles_backend" &&
          item != "roles_aws"
      )
    );
  };

  const sortDropDown = () => {
    setIsSortDropDown(!isSortDropDown);
  };

  const handleSortDropDownList = (option, view) => {
    // setSortOption(option);
    setIsSortDropDown(!isSortDropDown);
    // setViewSelectedOption(view);
  };

  const getSelectedLabel = (selectedFilterOptionArr) => {
    const categoryLabels = {
      roles_frontend: "Frontend",
      roles_backend: "Backend",
      roles_aws: "AWS",
    };

    return selectedFilterOptionArr
      .filter((option) => categoryLabels[option])
      .map((option) => categoryLabels[option]);
  };

  // 선택된 배열에서 -> mapping 객체를 거쳐 -> label 값 가져오기
  useEffect(() => {
    const labels = getSelectedLabel(selectedFilterOptionArr);
    setSelectedLabels(labels);
  }, [selectedFilterOptionArr]);

  // 🔵 외부 클릭 시 꺼지게 하기
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setIsSortDropDown(false);
      }
    };

    // 드롭다운이 열려 있을 때만, 마우스 클릭에 대해서, outside 핸들 클릭을 실행시킨다.
    if (isSortDropDown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // 클린업 함수 => 다른 마우스클릭에 반응하지 않도록 만들기
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSortDropDown]);

  return (
    <>
      <fieldset className="w-[30%] z-10" ref={dropDownRef}>
        <div className="flex flex-row items-center justify-between mb-2">
          <label className="my-auto ml-1 text-sm font-medium text-gray-800">
            맡은 역할
          </label>

          <ClearAllRole
            selectedFilterOptionArr={selectedFilterOptionArr}
            handleClearRoles={handleClearRoles}
          />
        </div>

        <div
          className="
            px-4 font-medium h-[45px] border-[1.5px] text-[14px]
            border-gray-200/90 rounded-lg relative 
            flex items-center justify-between  cursor-pointer  
            hover:shadow-sortDropDownBox text-gray-700 "
          onClick={sortDropDown}
        >
          <span className="min-w-[125px] text-gray-800">
            {selectedLabels?.length > 0 ? (
              selectedLabels?.map(
                (item, index) =>
                  `${item}${index < selectedLabels.length - 1 ? " & " : ""}`
              )
            ) : (
              <LabelDefault />
            )}
          </span>

          <DropDownArrow isSortDropDown={isSortDropDown} />

          {isSortDropDown ? (
            <ULDropDownRole
              selectedFilterOptionArr={selectedFilterOptionArr}
              setSelectedFilterOptionArr={setSelectedFilterOptionArr}
              handleSortDropDownList={handleSortDropDownList}
              //   sortOption={sortOption}
            />
          ) : null}
        </div>
      </fieldset>
    </>
  );
};

export default FieldsetRole;
