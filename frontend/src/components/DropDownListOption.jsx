import React from "react";

const DropDownListOption = ({ handleSortDropDownList }) => {
  return (
    <>
      <ul className="absolute top-10">
        <li
          onClick={() => handleSortDropDownList("recommended", "Recommended")}
          className="cursor-pointer"
        >
          Recommended
        </li>
        <li
          onClick={() => handleSortDropDownList("title_ascending", "Title ⬆")}
          className="cursor-pointer"
        >
          Title ⬆
        </li>
        <li
          onClick={() => handleSortDropDownList("title_descending", "Title ⬇")}
          className="cursor-pointer"
        >
          Title ⬇
        </li>
        <li
          onClick={() => handleSortDropDownList("date_descending", "Date ⬇")}
          className="cursor-pointer"
        >
          Date ⬇
        </li>
        <li
          onClick={() => handleSortDropDownList("date_ascending", "Date ⬆")}
          className="cursor-pointer"
        >
          Date ⬆
        </li>
      </ul>
    </>
  );
};

export default DropDownListOption;
