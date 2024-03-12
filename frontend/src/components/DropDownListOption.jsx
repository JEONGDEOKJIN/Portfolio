import React from "react";
import ArrowUp from "./ArrowUp";
import ArrowDown from "./ArrowDown";
import VCheck from "./VCheck";

const DropDownListOption = ({ handleSortDropDownList, sortOption }) => {
  return (
    <>
      <ul
        className="
          p-3 absolute top-16 left-0 bg-white 
           drop-shadow-sortDropDownList min-w-[200px] 
          border-[1.5px] border-gray-200/90  rounded-[7px] z-20
        "
      >
        {sortOption === "recommended" ? (
          <li
            onClick={() => handleSortDropDownList("recommended", "Recommended")}
            className="pl-2 h-[42px] text-sm flex text-[13px] items-center bg-neutral-100 rounded-[7px] text-gray-600 cursor-pointer hover:bg-neutral-50/90 hover:rounded-[7px]"
          >
            Recommended
            <span className="ml-auto mr-2">
              {" "}
              <VCheck />
            </span>
          </li>
        ) : (
          <li
            onClick={() => handleSortDropDownList("recommended", "Recommended")}
            className="pl-2 h-10 text-sm flex text-[13px] items-center text-gray-600 cursor-pointer hover:bg-neutral-50/90 hover:rounded-[7px]"
          >
            Recommended
          </li>
        )}

        {sortOption === "title_ascending" ? (
          <li
            onClick={() =>
              handleSortDropDownList("title_ascending", "Title 오름차순 ↑")
            }
            className="pl-2 h-[42px] text-sm flex text-[13px] items-center bg-neutral-100 text-gray-600 cursor-pointer hover:bg-neutral-50/90 hover:rounded-[7px]"
          >
            Title 오름차순 <ArrowUp />
            <span className="ml-auto mr-2">
              {" "}
              <VCheck />{" "}
            </span>
          </li>
        ) : (
          <li
            onClick={() =>
              handleSortDropDownList("title_ascending", "Title 오름차순 ↑")
            }
            className="pl-2 h-[42px] text-sm flex text-[13px] items-center text-gray-600 cursor-pointer hover:bg-neutral-50/90 hover:rounded-[7px]"
          >
            Title 오름차순 <ArrowUp />
            <span className="ml-auto mr-2"> </span>
          </li>
        )}

        {sortOption === "title_descending" ? (
          <li
            onClick={() =>
              handleSortDropDownList("title_descending", "Title 내림차순 ↓")
            }
            className="pl-2 h-[42px] text-sm flex text-[13px] items-center bg-neutral-100 text-gray-600 cursor-pointer hover:bg-neutral-50/90 hover:rounded-[7px]"
          >
            Title 내림차순 <ArrowDown />
            <span className="ml-auto mr-2">
              {" "}
              <VCheck />{" "}
            </span>
          </li>
        ) : (
          <li
            onClick={() =>
              handleSortDropDownList("title_descending", "Title 내림차순 ↓")
            }
            className="pl-2 h-[42px] text-sm flex text-[13px] items-center  text-gray-600 cursor-pointer hover:bg-neutral-50/90 hover:rounded-[7px]"
          >
            Title 내림차순 <ArrowDown />
          </li>
        )}

        {sortOption === "date_descending" ? (
          <li
            onClick={() =>
              handleSortDropDownList("date_descending", "Date 내림차순 ↓")
            }
            className="pl-2 h-[42px] text-sm flex text-[13px] items-center bg-neutral-100 text-gray-600 cursor-pointer hover:bg-neutral-50/90 hover:rounded-[7px]"
          >
            Date 내림차순 <ArrowDown />
            <span className="ml-auto mr-2">
              {" "}
              <VCheck />{" "}
            </span>
          </li>
        ) : (
          <li
            onClick={() =>
              handleSortDropDownList("date_descending", "Date 내림차순 ↓")
            }
            className="pl-2 h-[42px] text-sm flex text-[13px] items-center text-gray-600 cursor-pointer hover:bg-neutral-50/90 hover:rounded-[7px]"
          >
            Date 내림차순 <ArrowDown />
          </li>
        )}

        {sortOption === "date_ascending" ? (
          <li
            onClick={() =>
              handleSortDropDownList("date_ascending", "Date 오름차순 ↑")
            }
            className="pl-2 h-10 text-sm flex text-[13px] bg-neutral-100 items-center text-gray-600 cursor-pointer hover:bg-neutral-50/90 hover:rounded-[7px]"
          >
            Date 오름차순 <ArrowUp />
            <span className="ml-auto mr-2">
              {" "}
              <VCheck />{" "}
            </span>
          </li>
        ) : (
          <li
            onClick={() =>
              handleSortDropDownList("date_ascending", "Date 오름차순 ↑")
            }
            className="pl-2 h-10 text-sm flex text-[13px] items-center text-gray-600 cursor-pointer hover:bg-neutral-50/90 hover:rounded-[7px]"
          >
            Date 오름차순 <ArrowUp />
          </li>
        )}
      </ul>
    </>
  );
};

export default DropDownListOption;
