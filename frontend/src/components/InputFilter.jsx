import React, { useState } from "react";
import BtnFilter from "./BtnFilter";
import InputCheckbox from "./InputCheckbox";
import FilterShots from "./FilterShots";

const InputFilter = ({
  selectedFilterOptionArr,
  setSelectedFilterOptionArr,
}) => {
  const handleCheckBoxInput = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    // 전부 제거를 클릭하면 -> 선택된 걸 빈 배열로 만든다.
    if (value === "clearAll" && isChecked) {
      setSelectedFilterOptionArr([]);
    } else {
      setSelectedFilterOptionArr(
        (prev) =>
          isChecked ? [...prev, value] : prev.filter((item) => item != value)
        // [...prev, value] : 체크가 되었다면 -> 기존 배열에 체크된 값을 넣어서, 새로운 배열을 생성
        // prev.filter(item => item != value) : ⭐체크가 해제되어서⭐, false 가 나왔으면 -> 기존 배열(selectedFilterOptionArr) 의 값을 꺼내서, 같지 않은 것만으로 새로운 배열 만들기
      );
    }
  };

  const handleClearAll = () => {
    setSelectedFilterOptionArr([]);
  };

  return (
    <>
      <section>  
        <FilterShots 
            selectedFilterOptionArr = {selectedFilterOptionArr} 
            setSelectedFilterOptionArr = {setSelectedFilterOptionArr} />
      </section>

      <section>
        <button onClick={handleClearAll}> clear all ❎ </button>

        {/* [label input 연결 방식 1] label 로 감싸면, 라벨을 클릭해도 -> input 이 클릭될 수 있음.  */}
        <label>
          <input
            type="checkbox"
            value="category_project"
            onChange={handleCheckBoxInput}
            checked={selectedFilterOptionArr?.includes("category_project")}
          />
          project
        </label>

        <label>
          <input
            type="checkbox"
            value="category_feature"
            onChange={handleCheckBoxInput}
            checked={selectedFilterOptionArr?.includes("category_feature")}
          />
          feature
        </label>

        <InputCheckbox
          value={"roles_frontend"}
          handleCheckBoxInput={handleCheckBoxInput}
          selectedFilterOptionArr={selectedFilterOptionArr}
        />
        <InputCheckbox
          value={"roles_backend"}
          handleCheckBoxInput={handleCheckBoxInput}
          selectedFilterOptionArr={selectedFilterOptionArr}
        />
        <InputCheckbox
          value={"roles_aws"}
          handleCheckBoxInput={handleCheckBoxInput}
          selectedFilterOptionArr={selectedFilterOptionArr}
        />
        <InputCheckbox
          value={"roles_planning"}
          handleCheckBoxInput={handleCheckBoxInput}
          selectedFilterOptionArr={selectedFilterOptionArr}
        />
      </section>
    </>
  );
};

export default InputFilter;
