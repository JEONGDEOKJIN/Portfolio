import React, { useState } from "react";

import fetchAllMetaData from "../fetch/ItemList/fetchAllMetaData";

import { isError, useQuery } from "react-query";
import Filter from "./Filter";
import Sort from "./Sort";

const CardList = () => {
  const [selectedFilterOptionArr, setSelectedFilterOptionArr] = useState([]);

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
    ? metaData.filter((item) => {
        // all 을 클릭했거나, 아무것도 클릭 안 해서 배열이 비어있는 경우
        if (selectedFilterOptionArr.includes("all") || selectedFilterOptionArr.length === 0 )
        return true;

        // '선택된 배열안에 있는 값' 과 'metaData 안의 category 속성이 일치' 하면, 그 metaData 아이템을 return 한다. 
        return selectedFilterOptionArr.includes(item.category) 
        || selectedFilterOptionArr.includes(item.roles)   // roles 에도 있는지 확인하고 return 
      })
    : [];

  return (
    <>
      <section className="flex">
        {/* 필터 */}
        <Filter className="filter" setSelectedFilterOptionArr={setSelectedFilterOptionArr} selectedFilterOptionArr={selectedFilterOptionArr} />

        {/* 분류 */}
        <Sort className="sort" />
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
