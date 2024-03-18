import React, { useState } from "react";

const CategoryOptions = ({
  setSearchBarInput,
  setSearchTerm,
  setIsSubmitClicked,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("Discover");

  const handleCategoryOptionClick = (item) => {
    setSelectedCategory(item);
    setSearchBarInput(item); // 검색필드에 해당 키워드가 들어간 것 처럼 보이게 하기
    setSearchTerm(item); // a 태그 에서는, 이벤트 핸들러 속성이 없기 때문에, e.target.value 를 사용하지 않음
    setIsSubmitClicked(true); // 검색 버튼이 실제로 눌린 것 처럼 동작하게 하기
  };

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
              onClick={() => handleCategoryOptionClick(item)}
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