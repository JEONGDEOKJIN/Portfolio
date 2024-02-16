import React from "react";

const Filter = () => {
  return (
    <>
      <button className="p-2 bg-gray-200 rounded-lg x-5 y-3">
        {" "}
        전체 보기{" "}
      </button>
      <button className="p-2 bg-gray-200 rounded-lg x-5 y-3">
        {" "}
        project 보기{" "}
      </button>
      <button> 기능 구현 </button>
    </>
  );
};

export default Filter;
