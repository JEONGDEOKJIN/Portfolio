import React from "react";

import fetchAllMetaData from "../fetch/ItemList/fetchAllMetaData"

import { isError, useQuery } from "react-query";
import Filter from "./Filter";
import Sort from "./Sort";

const cardItem = [

  {
    desc: "Lorem ",
    image: "bjjjjjjjjjjj.jpg",
  },
  {
    desc: `Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum`,
    image: "bjjjjjjjjjjj.jpg",
  },
  {
    desc: `Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum`,
    image: "bjjjjjjjjjjj.jpg",
  },
  {
    desc: `Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum`,
    image: "bjjjjjjjjjjj.jpg",
  },
  {
    desc: `Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum`,
    image: "bjjjjjjjjjjj.jpg",
  },
  {
    desc: `Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum`,
    image: "bjjjjjjjjjjj.jpg",
  },
  {
    desc: `Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum`,
    image: "bjjjjjjjjjjj.jpg",
  },
  {
    desc: `Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
\            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum`,
    image: "bjjjjjjjjjjj.jpg",
  },
];


const CardList = () => {

  const { data: metaData , isLoading, error} = useQuery("metaData", fetchAllMetaData);
  console.log("metaData fetching 값" , metaData)

  if(!metaData || metaData.length === 0){
    return <p> DB 에서 가져온 metaData 가 없습니다. </p>
  }

  if(error){
    console.log("ItemList, data fetching error 발생" , error)
    return <p> 에러 발생📛📛📛📛📛 | 관리자 문의 연락처 👉 010-6368-0416 </p>
  }

  if(isLoading){
    alert("현재 로딩중!✅ | 로딩 컴포넌트 필요 ✅")
    return <p> 현재 로딩중!✅ | 로딩 컴포넌트 필요 ✅ </p>
  }


  return (
    <>
      <section className="flex justify-around">
        {/* 필터 */}
        <Filter className="filter" />
        
        {/* 분류 */}
        <Sort className="sort" />
      </section>
      
      
      <ul className="flex flex-col min-h-screen cardListGridContainer ">
        {metaData.map((item, index) => {
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
                <p className="">일정 ✅ 수정 필요 : {item.startDate} - {item.endDate}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CardList;
