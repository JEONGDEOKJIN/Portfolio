import React, { useState } from "react";
import Dropdown from "./Dropdown";
import SearchIcon from "./SearchIcon";

const SearchBar = ({
  setSearchTerm,
  searchTerm,
  setIsSubmitClicked,
  isSubmitClicked,
  searchBarInput,
  setSearchBarInput,
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

    setSearchTerm(searchBarInput); // 입력된 검색어를 실제 검색어로 설정
    setIsSubmitClicked(true); // 검색 실행 위한 상태 변경 -> 이게 있을 때, useQuery 에서 실제로 실행됨
    setSearchBarInput(""); // 검색 필드 초기화
  };

  // const handleSearchDropdown = (e) => {
  //   e.preventDefault();
  //   setSearchDropDown(true)
  // }

  return (
    <>
      {/* <header className="flex items-center w-screen px-3 py-1 sm:row-end-2 sm:row-start-1 sm:col-end-4 sm:col-start-1 searchBar h-18 "> */}
      {/* <div className="flex items-center w-full px-3 py-1 bg-blue-200 searchBar h-18"> */}

      <div className="px-3 py-1  w-max-[600px] w-full searchBar h-18 relative">
        <SearchIcon />

        <form
          className="flex w-full h-12 ml-auto"
          onSubmit={handleSearchSubmit}
        >
          <input
            type="search"
            className="
                  text-base rounded-[50px] grow border-[1px] border-gray-100 text-gray-800
                  hover:border-black/[.10]  
                  hover:shadow-searchBox
                  focus:outline-none                  
                  focus:shadow-searchBox
                  focus:border-searchBoxBorder
                  active:border-gray-50
                  placeholder:text-gray-300 
                  placeholder:text-base
                  pl-12
                  py-[28px]
                  "
            placeholder="Search features, skill & projects... "
            onChange={handleSearchTermChange}
            value={searchBarInput}
          />
          
          {/* 이게 없어도 검색이 된다. */}
          {/* <input
            type="submit"
            value="찾기"
            className="w-16 text-base rounded-md bg-gold-500 hover:cursor-pointer hover:bg-gold-200 "
          /> */}
        </form>

        {/* {searchDropDown ? <Dropdown setSearchDropDown={setSearchDropDown} /> : ""} */}
      </div>
    </>
  );
};

export default SearchBar;
