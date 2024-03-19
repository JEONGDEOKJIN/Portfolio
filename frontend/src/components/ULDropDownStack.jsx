import React from "react";
import ArrowUp from "./ArrowUp";
import ArrowDown from "./ArrowDown";
import VCheck from "./VCheck";
import ListOption from "./ListOption";

const ULDropDownStack = ({
  selectedFilterOptionArr,
  setSelectedFilterOptionArr,
}) => {
  const handleFilterDropDownList = (optionToFetch) => {
    if (optionToFetch === "clearAll" && optionToFetch != null) {
      setSelectedFilterOptionArr([]);
    } else {
      setSelectedFilterOptionArr((prev) => {
        const isAlreadySelected = prev.includes(optionToFetch);

        if (isAlreadySelected) {
          return prev.filter((item) => item != optionToFetch);
        } else {
          return [...prev, optionToFetch];
        }
      });
    }
  };

  return (
    <>
      <ul
        className="
          p-3 absolute top-16 left-0 bg-white 
          drop-shadow-sortDropDownList min-w-[200px] 
          border-[1.5px] border-gray-200/90  rounded-[7px]
        "
      >
        <ListOption
          keywordToDB="stacks_next.js"
          keywordToShow="🎯 Next.js"
          selectedFilterOptionArr={selectedFilterOptionArr}
          handleFilterDropDownList={() =>
            handleFilterDropDownList("stacks_next.js")
          }
        />

        <ListOption
          keywordToDB="stacks_react.js"
          keywordToShow="🎯 React.js"
          selectedFilterOptionArr={selectedFilterOptionArr}
          handleFilterDropDownList={() =>
            handleFilterDropDownList("stacks_react.js")
          }
        />

        <ListOption
          keywordToDB="stacks_node.js"
          keywordToShow="🎯 Node.js"
          selectedFilterOptionArr={selectedFilterOptionArr}
          handleFilterDropDownList={() =>
            handleFilterDropDownList("stacks_node.js")
          }
        />
      </ul>
    </>
  );
};

export default ULDropDownStack;

{
  /* {selectedFilterOptionArr?.includes("category_project") ? (
  <li
    onClick={() => handleFilterDropDownList("category_project")}
    className="pl-2 h-[42px] text-sm flex text-[13px] items-center bg-neutral-100 rounded-[7px] text-gray-600 cursor-pointer hover:bg-neutral-50/90 hover:rounded-[7px]"
  >
    category_project
    <span className="ml-auto mr-2">
      <VCheck />
    </span>
  </li>
) : (
  <li
    onClick={() => handleFilterDropDownList("category_project")}
    className="pl-2 h-10 text-sm flex text-[13px] items-center text-gray-600 cursor-pointer hover:bg-neutral-50/90 hover:rounded-[7px]"
  >
    category_project
  </li>
)} */
}

{
  /* {selectedFilterOptionArr?.includes("category_feature") ? (
  <li
    onClick={() => handleFilterDropDownList("category_feature")}
    className="pl-2 h-[42px] text-sm flex text-[13px] items-center bg-neutral-100 text-gray-600 cursor-pointer hover:bg-neutral-50/90 hover:rounded-[7px]"
  >
    category_feature🔥🔥🔥 <ArrowUp />
    <span className="ml-auto mr-2">
      <VCheck />
    </span>
  </li>
) : (
  <li
    onClick={() => handleFilterDropDownList("category_feature")}
    className="pl-2 h-[42px] text-sm flex text-[13px] items-center text-gray-600 cursor-pointer hover:bg-neutral-50/90 hover:rounded-[7px]"
  >
    category_feature <ArrowUp />
    <span className="ml-auto mr-2"> </span>
  </li>
)}

{selectedFilterOptionArr?.includes("roles_frontend") ? (
  <li
    onClick={() => handleFilterDropDownList("roles_frontend")}
    className="pl-2 h-[42px] text-sm flex text-[13px] items-center bg-neutral-100 text-gray-600 cursor-pointer hover:bg-neutral-50/90 hover:rounded-[7px]"
  >
    roles_frontend <ArrowDown />
    <span className="ml-auto mr-2">
      {" "}
      <VCheck />{" "}
    </span>
  </li>
) : (
  <li
    onClick={() => handleFilterDropDownList("roles_frontend")}
    className="pl-2 h-[42px] text-sm flex text-[13px] items-center  text-gray-600 cursor-pointer hover:bg-neutral-50/90 hover:rounded-[7px]"
  >
    roles_frontend <ArrowDown />
  </li>
)}

{selectedFilterOptionArr?.includes("roles_backend") ? (
  <li
    onClick={() => handleFilterDropDownList("roles_backend")}
    className="pl-2 h-[42px] text-sm flex text-[13px] items-center bg-neutral-100 text-gray-600 cursor-pointer hover:bg-neutral-50/90 hover:rounded-[7px]"
  >
    roles_backend <ArrowDown />
    <span className="ml-auto mr-2">
      {" "}
      <VCheck />{" "}
    </span>
  </li>
) : (
  <li
    onClick={() => handleFilterDropDownList("roles_backend")}
    className="pl-2 h-[42px] text-sm flex text-[13px] items-center text-gray-600 cursor-pointer hover:bg-neutral-50/90 hover:rounded-[7px]"
  >
    roles_backend <ArrowDown />
  </li>
)}

{selectedFilterOptionArr?.includes("roles_aws") ? (
  <li
    onClick={() => handleFilterDropDownList("roles_aws")}
    className="pl-2 h-10 text-sm flex text-[13px] bg-neutral-100 items-center text-gray-600 cursor-pointer hover:bg-neutral-50/90 hover:rounded-[7px]"
  >
    roles_aws <ArrowUp />
    <span className="ml-auto mr-2">
      {" "}
      <VCheck />{" "}
    </span>
  </li>
) : (
  <li
    onClick={() => handleFilterDropDownList("roles_aws")}
    className="pl-2 h-10 text-sm flex text-[13px] items-center text-gray-600 cursor-pointer hover:bg-neutral-50/90 hover:rounded-[7px]"
  >
    roles_aws <ArrowUp />
  </li>
  
)} */
}
