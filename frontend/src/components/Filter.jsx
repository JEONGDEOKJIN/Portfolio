import React, { useState } from "react";
import BtnFilter from "./BtnFilter";
import InputCheckbox from "./InputCheckbox";

const Filter = ({
  selectedFilterOptionArr,
  setSelectedFilterOptionArr,
}) => {

  const handleCheckBoxInput = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    // 전부 제거를 클릭하면 -> 선택된 걸 빈 배열로 만든다.
    if(value === 'clearAll' && isChecked) {
      setSelectedFilterOptionArr([])
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
    setSelectedFilterOptionArr([])
  }

  return (
    <>
      <section>
        {/* [label input 연결 방식 1] label 로 감싸면, 라벨을 클릭해도 -> input 이 클릭될 수 있음.  */}
        <p>all 은 없는게 나을 수도 | clear 를 두거나 </p>
        {/* <label>
          <input
            type="checkbox"
            value="all"
            onChange={handleCheckBoxInput}
            checked={selectedFilterOptionArr?.includes("all")}
          />
          all
        </label> */}

 
          <button
            onClick={handleClearAll}
          >
          clear all            
          </button>
 

        <label>
          <input
            type="checkbox"
            value="project"
            onChange={handleCheckBoxInput}
            checked={selectedFilterOptionArr?.includes("project")}
          />
          project
        </label>

        <label>
          <input
            type="checkbox"
            value="feature"
            onChange={handleCheckBoxInput}
            checked={selectedFilterOptionArr?.includes("feature")}
          />
          feature
        </label>

        <InputCheckbox value={"frontend"} handleCheckBoxInput={handleCheckBoxInput} selectedFilterOptionArr={selectedFilterOptionArr} />
        <InputCheckbox value={"backend"} handleCheckBoxInput={handleCheckBoxInput} selectedFilterOptionArr={selectedFilterOptionArr} />
        <InputCheckbox value={"aws"} handleCheckBoxInput={handleCheckBoxInput} selectedFilterOptionArr={selectedFilterOptionArr} />
        <InputCheckbox value={"planning"} handleCheckBoxInput={handleCheckBoxInput} selectedFilterOptionArr={selectedFilterOptionArr} />


        {/* [label input 연결 방식 2] input 태그의 id 와 label 태그의 htmlFor 를 일치 시킨다. */}
        {/* <input
        id="projectCheckBox"
        type="checkbox"
        value="project"
        onChange={handleCheckBoxInput}
        checked={selectedItem.includes("project")}
      />
      <label htmlFor="projectCheckBox">project</label> */}

        {/* 드롭다운 버전 
      <section className="flex mr-auto x-32">
        <select name="" id="" onChange={(e) => setFilterValue(e.target.value)}>
          <option value={"all"}> all </option>
          <option value={"project"}> project </option>
          <option value={"feature"}> feature </option>

          <option value={"backend"}> backend </option>
          <option value={"frontend"}> frontend </option>
          <option value={"aws"}> aws </option>
          <option value={"planning"}> 기획 </option>
        </select>
*/}
        {/* button 버전  
      
        <button 
          className="p-2 mr-1 text-sm bg-gray-200 rounded-lg x-5 y-3"
          value={'all'}
          onClick={handleViewProjectBtn}  
        >
          전체 보기
        </button>

        <button 
          className="p-2 mr-1 text-sm bg-gray-200 rounded-lg x-5 y-3"
          value={'project'}
          onClick={handleViewProjectBtn}
          >
          '프로젝트 별' 보기
        </button>

        <button 
          className="p-2 mr-1 text-sm bg-gray-200 rounded-lg x-5 y-3"
          value={'feature'}
          onClick={handleViewProjectBtn}
          >
          '기능별' 보기
        </button>

        <BtnFilter  buttonName={"roles : backend"} value={"backend"}  handleViewProjectBtn={handleViewProjectBtn} />
        <BtnFilter  buttonName={"roles : frontend"} value={"frontend"}  handleViewProjectBtn={handleViewProjectBtn} />
      
      */}
      </section>
    </>
  );
};

export default Filter;
