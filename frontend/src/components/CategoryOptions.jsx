import React, { useState } from "react";

const CategoryOptions = () => {
  const [selectedCategory, setSelectedCategory] = useState("Discover");

  const categories = [
    "Discover",
    "Projects",
    "Features",
    "Frontend Role",
    "CRUD Tasks",
    "Grid & Flex",
    "UserFlow Planning",
    "Deploy",
  ];

  return (
    <>
      <ul className="flex flex-row items-center justify-center gap-[28px] tracking-wide	">
        {categories.map((item, index) => {
          return (
            <li
              key={index}
              className={`
                   text-[14px] px-[16px] py-[8px]  text-gray-900 font-semibold hover:text-gray-500 cursor-pointer active:bg-gray-300"
                    ${
                      selectedCategory === item
                        ? "text-gray-500 bg-neutral-100  rounded-full  grow"
                        : "text-gray-900 shrink-0"
                    }
                `}
              onClick={() => setSelectedCategory(item)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CategoryOptions;

{
  /* <ul className="flex flex-row gap-[8px]">
  <li className="text-[14px] text-gray-900 hover:text-gray-500 cursor-pointer active:bg-gray-300">
    Projects
  </li>
  <li className="text-[14px] text-gray-900 hover:text-gray-500 cursor-pointer active:bg-gray-300">
    Features
  </li>
  <li className="text-[14px] text-gray-900 hover:text-gray-500 cursor-pointer active:bg-gray-300">
    Frontend Role
  </li>
  <li className="text-[14px] text-gray-900 hover:text-gray-500 cursor-pointer active:bg-gray-300">
    CRUD Tasks
  </li>
  <li className="text-[14px] text-gray-900 hover:text-gray-500 cursor-pointer active:bg-gray-300">
    Grid & Flex
  </li>
  <li className="text-[14px] text-gray-900 hover:text-gray-500 cursor-pointer active:bg-gray-300">
    UserFlow Planning
  </li>
  <li className="text-[14px] text-gray-900 hover:text-gray-500 cursor-pointer active:bg-gray-300">
    Deploy
  </li>
</ul> */
}
