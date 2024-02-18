import React, { useState } from "react";
import Dropdown from "./Dropdown";

const SearchBar = ({
  setSearchTerm,
  searchTerm,
  setIsSubmitClicked,
  isSubmitClicked,
  searchBarInput,
  setSearchBarInput
}) => {
  const [searchDropDown, setSearchDropDown] = useState(false);

  // const [searchBarInput, setSearchBarInput] = useState("");

  const handleSearchTermChange = (e) => {
    e.preventDefault();
    setSearchBarInput(e.target.value);      
      // input 창에서 검색어가 눌릴 때 마다, 저장하기
      // ⭐ 만약, 여기에 'setSearchTerm' 를 설정하면 -> 변경되는 단어가 실시간으로 검색이 된다. 
      // ⭐ 이 로직만 따로 빼서, '검색 드롭다운' 만들면 될 것. 
  };
  
  const handleSearchSubmit = (e) => {
    e.preventDefault();

    setSearchTerm(searchBarInput)   // 입력된 검색어를 실제 검색어로 설정
    setIsSubmitClicked(true);   // 검색 실행 위한 상태 변경 -> 이게 있을 때, useQuery 에서 실제로 실행됨
    setSearchBarInput("");    // 검색 필드 초기화
  };

  // const handleSearchDropdown = (e) => {
  //   e.preventDefault();
  //   setSearchDropDown(true)
  // }

  return (
    <>
      {/* <header className="flex items-center w-screen px-3 py-1 sm:row-end-2 sm:row-start-1 sm:col-end-4 sm:col-start-1 searchBar h-18 "> */}
      <header className="flex items-center w-screen px-3 py-1 searchBar h-18 ">
        <h1 className="text-3xl font-bold text-stone-900 ">🐉</h1>

        <form className="flex w-3/4 h-12 ml-auto" onSubmit={handleSearchSubmit}>
          <input
            type="search"
            className="mr-3 text-base bg-gray-200 rounded-md grow"
            onChange={handleSearchTermChange}
            value={searchBarInput}
          />
          <input
            type="submit"
            value="찾기"
            className="w-16 text-base rounded-md bg-gold-500 hover:cursor-pointer hover:bg-gold-200 "
          />
        </form>

        {/* {searchDropDown ? <Dropdown setSearchDropDown={setSearchDropDown} /> : ""} */}
      </header>
    </>
  );
};

export default SearchBar;
