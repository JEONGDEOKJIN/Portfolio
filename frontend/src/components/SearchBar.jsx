import React from "react";

const SearchBar = () => {
  return (
    <>
      {/* <header className="flex items-center w-screen px-3 py-1 sm:row-end-2 sm:row-start-1 sm:col-end-4 sm:col-start-1 searchBar h-18 "> */}
      <header className="flex items-center w-screen px-3 py-1 searchBar h-18 ">
        <h1 className="text-3xl font-bold text-stone-900 ">🐉</h1>

        <form className="flex w-3/4 h-12 ml-auto">
          <input
            type="search"
            className="mr-3 text-base bg-gray-200 rounded-md grow"
          />
          <input
            type="submit"
            value="찾기"
            className="w-16 text-base rounded-md bg-gold-500 hover:cursor-pointer hover:bg-gold-200 "
          />
        </form>
      </header>
    </>
  );
};

export default SearchBar;
