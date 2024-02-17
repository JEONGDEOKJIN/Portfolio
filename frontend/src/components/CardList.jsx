import React, { useState } from "react";

import fetchAllMetaData from "../fetch/ItemList/fetchAllMetaData";

import { isError, useQuery } from "react-query";

import SelectSort from "./SelectSort";
import InputFilter from "./InputFilter";

const CardList = () => {
  const [selectedFilterOptionArr, setSelectedFilterOptionArr] = useState([]);
  const [sortOption, setSortOption] = useState("");

  const {
    data: metaData,
    isLoading,
    error,
  } = useQuery("metaData", fetchAllMetaData);
  console.log("metaData fetching 값", metaData);

  if (!metaData || metaData.length === 0) {
    return <p> DB 에서 가져온 metaData 가 없습니다. </p>;
  }

  if (error) {
    console.log("ItemList, data fetching error 발생", error);
    return <p> 에러 발생📛📛📛📛📛 | 관리자 문의 연락처 👉 010-6368-0416 </p>;
  }

  if (isLoading) {
    alert("현재 로딩중!✅ | 로딩 컴포넌트 필요 ✅");
    return <p> 현재 로딩중!✅ | 로딩 컴포넌트 필요 ✅ </p>;
  }

  // 필터, 분류 기능
  const filteredSortedData = metaData
    ? metaData
        .filter((item) => {
          // all 을 클릭했거나, 아무것도 클릭 안 해서 배열이 비어있는 경우
          if (
            selectedFilterOptionArr.includes("all") ||
            selectedFilterOptionArr.length === 0
          )
            return true;

          const selectedCategories = selectedFilterOptionArr.filter((option) =>
            option.startsWith("category_")
          );
          const selectedRoles = selectedFilterOptionArr.filter((option) =>
            option.startsWith("roles_")
          );

          // 카테고리만 선택된 상황에서, 해당 item 의 콜백함수를 true 로 반환해서 필터링
          if (selectedCategories.length > 0 && selectedRoles.length === 0) {
            // selectedCategories 의 배열 안의 요소를 순회하면서,
            // 'item.category 의 각 요소의 문자열'이라면,  'clickedCategory 문자열' 과 동일한지 를 판단
            // 'item.category이 배열' 이라면, 각 배열 요소 안에, 'clickedCategory 문자열' 이 있는지를 판단.
            // 동일하다면, some 메서드는 true 를 반환한다.
            // 그러면, 현재, ⭐filter 함수의 콜백함수가 실행중인 상황이므로⭐, 현재 진행중인 콜백함수에는 true 가 반환된다.
            // 따라서, filter 함수로 돌아가서, 현재 진행중인 item 에 대해서는 true 이므로, filter 를 통과하게 된다.
            return selectedCategories.some((clickedCategory) =>
              item.category.includes(clickedCategory)
            );
          }

          // 역할만 선택된 상황에서, 해당 item 의 콜백함수를 true 로 반환해서 필터링
          if (selectedRoles.length > 0 && selectedCategories.length === 0) {
            return selectedRoles.some((clickedRole) =>
              item.roles.includes(clickedRole)
            );
          }

          // 위의 조건이 모두 아니면, '모두 선택된 상황' 이므로 -> 전부 다 필터링 한다.
          return (
            selectedCategories.some((clickedCategory) =>
              item.category.includes(clickedCategory)
            ) &&
            selectedRoles.some((clickedRole) =>
              item.roles.includes(clickedRole)
            )
          );

          // // '선택된 배열안에 있는 값' 과 'metaData 안의 category 속성이 일치' 하면, 그 metaData 아이템을 return 한다.
          // return (
          //   selectedFilterOptionArr.includes(item.category) ||
          //   selectedFilterOptionArr.includes(item.roles)
          // ); // roles 에도 있는지 확인하고 return
        })
        .sort((a, b) => {
          if (sortOption === "title_ascending") {
            // 'NAME_ASC' 같이 영어로 써야❓❓
            return a.title.localeCompare(b.title); // 이게 왜 오름 차순이지❓❓
          } else if (sortOption === "title_descending") {
            return b.title.localeCompare(a.title);
          } else if (sortOption === "date_ascending") {
            return a.endDate.localeCompare(b.endDate);
          } else if (sortOption === "date_descending") {
            return b.endDate.localeCompare(a.endDate);
          }
          return 0;
        })
    : [];

  return (
    <>
      <section className="flex">
        {/* 필터 */}
        <InputFilter
          className="filter"
          setSelectedFilterOptionArr={setSelectedFilterOptionArr}
          selectedFilterOptionArr={selectedFilterOptionArr}
        />

        {/* 분류 */}
        <SelectSort className="sort" setSortOption={setSortOption} />
      </section>

      <ul className="flex flex-col min-h-screen cardListGridContainer ">
        {filteredSortedData.map((item, index) => {
          return (
            <li key={index} className="flex flex-col mb-8">
              <figure
                className="h-0 bg-top bg-no-repeat bg-cover pb-60p"
                style={{
                  // backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${item.image})`,
                  backgroundImage: `url(http://localhost:7070/getImg/${item.demoVideo_1})`,
                }}
              ></figure>
              <div className="flex-auto p-3 font-medium text-stone-900 bg-mediumseagreen-200">
                <p>제목 : {item.title}</p>
                <p className="">
                  일정 ✅ 수정 필요 : {item.startDate} - {item.endDate}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CardList;
