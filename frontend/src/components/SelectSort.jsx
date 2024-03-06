import React, { useEffect, useRef, useState } from "react";
import DropDownArrow from "./DropDownArrow";
import DropDownListOption from "./DropDownListOption";

const SelectSort = ({ setSortOption, sortOption }) => {
  const [isSortDropDown, setIsSortDropDown] = useState(false);
  const [viewSelectedOption, setViewSelectedOption] = useState("Recommended");
  const dropDownRef = useRef(null)

  const sortDropDown = () => {
    setIsSortDropDown(!isSortDropDown);
  };

  const handleSortDropDownList = (option, view) => {
    setSortOption(option);
    setIsSortDropDown(!isSortDropDown);
    setViewSelectedOption(view);
  };

  // 🔵 외부 클릭 시 꺼지게 하기
  useEffect( () => {
    const handleClickOutside = (e) => {
      if(dropDownRef.current && !dropDownRef.current.contains(e.target)){
        setIsSortDropDown(false)
      }
    }

    // 드롭다운이 열려 있을 때만, 마우스 클릭에 대해서, outside 핸들 클릭을 실행시킨다.
    if(isSortDropDown){
      document.addEventListener('mousedown', handleClickOutside)
    }

    // 클린업 함수 => 다른 마우스클릭에 반응하지 않도록 만들기
    return () => {
      document.removeEventListener('mousedown' , handleClickOutside);
    }
  } , [isSortDropDown])
  

  return (
    <>
      <section ref={dropDownRef}>
        <div
          className="
            px-4 font-medium h-[45px] border-[1.5px] text-[14px]
            border-gray-200/90 rounded-lg relative 
            flex items-center justify-between  cursor-pointer  
            hover:shadow-sortDropDownBox text-gray-700 "
          onClick={sortDropDown}
        >
          <span className="min-w-[125px] text-gray-800">
            {viewSelectedOption}
          </span>
          <DropDownArrow isSortDropDown={isSortDropDown} />

          {isSortDropDown ? (
            <DropDownListOption
              handleSortDropDownList={handleSortDropDownList}
              sortOption={sortOption}
            />
          ) : null}
        </div>
      </section>

    </>
  );
};

export default SelectSort;

{/* 이전 드롭다운 */}
{/* <section className="flex mr-auto x-32">
  <select
    name=""
    id=""
    onChange={(e) => setSortOption(e.target.value)}
    className="appearance-none"
  >
    <option value={"recommended"} className="hover:bg-green-300">
      Recommended
    </option>

    <option value={"title_ascending"}> Title (A to Z) </option>
    <option value={"title_descending"}> Title (Z to A) </option>

    <option value={"date_ascending"}> Past Feature </option>
    <option value={"date_descending"}> Recent Feature </option>
  </select>
</section> */}