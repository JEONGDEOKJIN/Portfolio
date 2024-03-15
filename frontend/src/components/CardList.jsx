import React, { useEffect, useState } from "react";
import { useRef } from "react";
import fetchAllMetaData from "../fetch/ItemList/fetchAllMetaData";
import { isError, useQuery } from "react-query";
import SelectSort from "./SelectSort";
import InputFilter from "./InputFilter";
import axios from "axios";
import getSearchResults from "../fetch/ItemList/getSearchResults";
import loadingMessage from "../utils/loadingMessage";
import errorMessage from "../utils/errorMessage";
import SVGFilterIcon from "./SVGFilterIcon";
import FilterBtn from "./FilterBtn";
import SVGCalendar from "./SVGCalendar";
import SVGExternalLink from "./SVGExternalLink";
import DivTable from "./DivTable";
import Footer from "./Footer";
import CategoryOptions from "./CategoryOptions";
import IconCancel from "./IconCancel";
import IconCancelItemDetail from "./IconCancelItemDetail";
import HeaderProfile from "./HeaderProfile";
import ProfileSection from "./ProfileSection";
import ModalFeedbackBox from "./ModalFeedbackBox";
import InfiniteLoop from "./InfiniteLoop";

const CardList = ({
  searchTerm,
  isSubmitClicked,
  setIsSubmitClicked,
  searchBarInput,
}) => {
  const [selectedFilterOptionArr, setSelectedFilterOptionArr] = useState([]);
  const [sortOption, setSortOption] = useState("recommended");
  const [isFilterBtnClicked, setIsFilterBtnClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(null);
  const [isItemDetailOpened, setIsItemDetailOpened] = useState(false);
  const [isShowChatBox, setIsShowChatBox] = useState(false);
  const [indexOfItemDetail, setIndexOfItemDetail] = useState(null);

  // const [marqueeInfiniteItem, setMarqueeInfiniteItem] =
  //   useState(filteredSortedData);

  const detailSectionRef = useRef(null);

  console.log("searchTerm✅ @CardList", searchTerm);

  // 검색 useQuery
  const {
    data: searchResultData,
    isLoading: isSearchLoading,
    error: isSearchError,
  } = useQuery(
    ["search", searchTerm],
    () => getSearchResults(searchTerm), // searchTerm 이 있을 때, 실행되는 검색쿼리 처리 함수
    {
      enabled:
        !!searchTerm && isSubmitClicked == true && searchBarInput != null,
    }
    // searchTerm 이 있을 때만 실행됨
    // isSubmitClicked != null : false 건, true 건 뭔가 들어가 있어야 한다.
    // isSubmitClicked == true
    // searchBarInput!= null : 검색단어가 뭐라도 있을 때 실행된다
  );

  // isSubmitClicked 제출 버튼 완료되면(true) -> 다시 false 로 버튼 초기화 하기⭐
  useEffect(() => {
    if (isSubmitClicked == true) setIsSubmitClicked(false);
  }, [isSubmitClicked, setIsSubmitClicked]);

  // // marque infinite loop 구현위해서, 배열 순서를 시간 순서대로 변경
  // useEffect(() => {
  //   let timer // setInterval 함수 들어갈 변수

  //   if (isItemDetailOpened) {  // item 이 하나 클릭 되었을 때, 실행하게 함
  //     timer = setInterval(() => {
  //       setMarqueeInfiniteItem((prevItems) => {
  //         const nextItems = [...prevItems.slice(1), prevItems[0]];
  //         return nextItems;
  //       });
  //     }, 20000); // 10000 == 10초 간격
  //   }

  //   // 컴포넌트 언마운트 또는 isItemDetailOpened가 변경될 때 인터벌 정리
  //   return () => {
  //     if (timer) {
  //       clearInterval(timer)
  //     }
  //   };
  // }, isItemDetailOpened);

  // 기본 metaData 검색 useQuery
  const {
    data: metaData,
    isLoading: isMetaLoading,
    error: isMetaError,
  } = useQuery("metaData", fetchAllMetaData);
  console.log("metaData fetching 값", metaData);

  // 에러 및 로딩 메시지
  if (!metaData || metaData.length === 0) {
    return <p> DB 에서 가져온 metaData 가 없습니다. </p>;
  }

  const errorMessageComponent = errorMessage(
    isSearchError,
    isMetaError,
    searchTerm
  );
  if (errorMessageComponent) return errorMessageComponent; // errorMessageComponent 가 있으면, 렌더링 한다.

  const loadingMessageComponent = loadingMessage(
    isSearchLoading,
    isMetaLoading,
    searchTerm
  );
  if (loadingMessageComponent) return loadingMessageComponent; // loadingMessageComponent 가 있으면, 렌더링 한다.

  // 검색 데이터가 있으면, 검색 데이터를 반영. 검색이 없으면 기본 metaData 를 렌더
  // 1. 제출 버튼 없이도 -> 렌더 되게 하기 (검색 예상 dropdown 구현할 때 사용)
  // const dataToRender = searchTerm.trim() ? searchResultData : metaData

  // 2. 제출 버튼 눌러야 -> dropdown 에서 렌더되게 하기

  // metaData 에서 중복되는 featureID 를 없애고, unique 한 feature 만 남기기 ----------------------

  const uniqueFeaturerProjectIDData = (metaData) => {
    // "feature" 카테고리 항목들을 featureID를 기준으로 중복 제거
    const uniqueFeatures = {};
    metaData.forEach((item) => {
      if (item.category === "feature" && !uniqueFeatures[item.featureID]) {
        uniqueFeatures[item.featureID] = item;
      }
    });
  
    // "project" 카테고리 항목들 모두 포함
    const projects = metaData.filter(item => item.category === "project");
  
    // 두 종류의 항목을 합쳐서 반환
    return [...projects, ...Object.values(uniqueFeatures)];
  };

// -------------------------------------- 이 위에 꺼가 수정하는 거 


  let dataToRender = metaData ; // ⭐⭐⭐⭐⭐ 이게 수정 전
  // let dataToRender = uniqueFeaturerProjectIDData(metaData) ; // 이게 위에 작업한 것 

  if (searchResultData && searchResultData.length > 0) {
    // dataToRender = uniqueFeaturerProjectIDData(searchResultData) 
    dataToRender = searchResultData // 이게 수정 전⭐⭐⭐⭐⭐ 
  }

  console.log("dataToRender 에 들어가는 데이터", searchResultData);
  console.log("dataToRender 에 들어간 데이터", dataToRender);
  console.log("metaData 에 있는 것", metaData);

  // 필터, 분류 기능
  const filteredSortedData = dataToRender
    ? dataToRender
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

  const handleCardItem = (index) => {
    // fetch 요청 보내기
    // isItemDetailOpened(index) : 원래는 우선, 특정 index 인지 확인하고, 해당 index 를 제출

    setIsItemDetailOpened(!isItemDetailOpened);
    setIndexOfItemDetail(index);
    console.log("indexOfItemDetail", indexOfItemDetail);
    console.log(`${index}`, index);
  };

  const handleSeeMoreItem = (index) => {
    // setIsItemDetailOpened(true);
    setIndexOfItemDetail(index); // 필요한 정보를 받아옴

    // 스크롤을 위로 올리기
    if (detailSectionRef.current) {
      // 실제로 ref 로 해당 DOM 요소를 가리키고 있는지 체크
      detailSectionRef.current.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }
  };

  const handleCloseBtn = () => {
    setIsItemDetailOpened(false);
  };

  const handleSendFeedback = () => {
    setIsShowChatBox(true);
  };

  const handleCancelBtn = () => {
    setIsShowChatBox(false);
  };

  return (
    <>
      <section className="flex flex-row justify-between items-center h-[10rem]  ">
        {/* 필터 */}
        {/* <FilterBtn /> */}

        {/* 분류 */}
        <SelectSort
          className="sort"
          setSortOption={setSortOption}
          sortOption={sortOption}
        />

        <CategoryOptions />

        <FilterBtn
          selectedFilterOptionArr={selectedFilterOptionArr}
          setIsFilterBtnClicked={setIsFilterBtnClicked}
          isFilterBtnClicked={isFilterBtnClicked}
        />
      </section>

      {isFilterBtnClicked ? (
        <section>
          <InputFilter
            className="filter"
            setSelectedFilterOptionArr={setSelectedFilterOptionArr}
            selectedFilterOptionArr={selectedFilterOptionArr}
          />
        </section>
      ) : (
        ""
      )}

      {/* cardListGridContainer : index.css 로 설정 */}
      <ul className="flex flex-col cardListGridContainer px-[72px]">
        {filteredSortedData.map((item, index) => {
          return (
            <li
              key={index}
              className="flex flex-col cursor-pointer"
              onClick={() => handleCardItem(index)}
            >
              <figure
                className="relative h-0 bg-cover   bg-no-repeat  pb-75% rounded-lg hover:scale-105 transition-all duration-500 ease-in-out"
                style={{
                  // backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${item.image})`,
                  backgroundImage: `url(http://localhost:7070/getImg/${item.demoVideo_1})`,
                }}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
              >
                {/* 호버 했을 때 보이는 것  */}
                {isHovered === index ? (
                  <div className="absolute flex items-end justify-between w-full h-full p-5 rounded-lg bg-gradient-to-b from-gray-50/5 to-gray-600/50">
                    <span className="mb-3 mr-4 text-base font-normal text-gray-100 w-[80%]  truncate">
                      {item.summary}
                    </span>
                    {item.category === "feature" ? (
                      <span
                        className="px-1 shrink-0 justify-center  flex ml-1 mb-2 mr-2 w-[34px] h-[34px]  text-[10px] font-medium 
                        text-white transition duration-200 ease-linear bg-[#603b2b] rounded-full 
                    hover:bg-[#eaa064] items-center hover:text-gray-50"
                      >
                        기능
                      </span>
                    ) : (
                      <span
                        className="px-1 shrink-0 justify-center  flex ml-1 mb-2 mr-2 w-[34px] h-[34px]  text-[10px] font-medium 
                          text-white transition duration-200 ease-linear bg-[#28466c] rounded-full 
                    hover:bg-[#6488ea] items-center hover:text-gray-50"
                      >
                        플젝
                      </span>
                    )}

                    <div className="mb-2">
                      <div className="ml-auto flex items-center justify-center p-2 text-[12px] font-semibold text-gray-700 rounded-full bg-gray-50 shrink-0 border-[1.5px] border-gray-200">
                        <SVGExternalLink />
                      </div>
                      {/* <div className="right-[-7px] top-[-5px] absolute w-5 h-5 text-[12px] flex items-center justify-center rounded-full bg-searchBoxBorder-100/85  text-gray-50">
                      stack 의 개수 세기📛
                    </div> */}
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </figure>

              {/* description 부분 */}
              <div className="flex items-center justify-between py-3 font-medium text-stone-900 ">
                <div className="flex items-center ">
                  <figure
                    className="w-6 h-6 bg-top bg-no-repeat bg-cover rounded-full"
                    style={{
                      backgroundImage: `url(http://localhost:7070/getImg/${item.demoVideo_1})`,
                    }}
                  ></figure>

                  <span className="ml-2 text-sm font-medium text-gray-900 truncate max-w-[100px]">
                    {item.title}
                  </span>
                </div>

                <div className="flex items-center ml-2 ">
                  <SVGCalendar />
                  <span className="ml-[2px] mt-[2px] text-xs text-gray-600 truncate hover:text-gray-800">
                    {(() => {
                      const startDatePart = item.startDate
                        .split("T")[0]
                        .split("-");
                      const endDatePart = item.endDate.split("T")[0].split("-");
                      return `${startDatePart[0].slice(2, 4)}.${
                        startDatePart[1]
                      }.${startDatePart[2]}-${startDatePart[0].slice(2, 4)}.${
                        endDatePart[1]
                      }.${endDatePart[2]}`;
                    })()}
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {/* itemDetail 영역 | 여기는 컴포넌트로 따로 빼서 진행 */}
      {isItemDetailOpened && metaData ? (
        <section>
          <div className="fixed inset-0 z-50 flex items-center justify-end w-full h-10 bg-black/80 mix-blend-normal">
            <button className="mb-1 mr-2" onClick={handleCloseBtn}>
              <IconCancelItemDetail />
            </button>
          </div>
          <div
            ref={detailSectionRef} // 스크롤이 올라갔으면 하는 영역이 여기여서 여기에 ref 를 잡음 ⭐
            className="fixed inset-0 z-50 flex flex-col w-full h-full overflow-y-auto transition-opacity duration-300 ease-in-out bg-white inset-y-9"
          >
            {typeof indexOfItemDetail === "number" &&
              metaData[indexOfItemDetail] &&
              metaData[indexOfItemDetail].title && (
                <HeaderProfile title={metaData[indexOfItemDetail].title} />
              )}

            {/* 💪 mx-auto 하면 이제 가운데로 오긴 하는데, flex 를 써서 깔끔하게 오게 하고 싶긴 함  */}
            <main className="w-full bg-[neutral-50] max-w-[1200px] mx-auto rounded-[64px] p-10">
              <article className="w-full ">
                {/* 사진 */}
                <div className=" x-full flex flex-row justify-normal gap-[24px]">
                  {typeof indexOfItemDetail === "number" &&
                    metaData[indexOfItemDetail] &&
                    metaData[indexOfItemDetail].architectureImg_1 && (
                      <figure
                        style={{
                          backgroundImage: `url(http://localhost:7070/getImg/${metaData[indexOfItemDetail].architectureImg_1})`,
                        }}
                        className="shadow w-[400px] h-[450px]  bg-no-repeat bg-cover rounded-[40px]"
                      ></figure>
                    )}

                  {typeof indexOfItemDetail === "number" &&
                    metaData[indexOfItemDetail] &&
                    metaData[indexOfItemDetail].architectureImg_1 && (
                      <figure
                        style={{
                          backgroundImage: `url(http://localhost:7070/getImg/${metaData[indexOfItemDetail].demoVideo_1})`,
                        }}
                        className=" shadow rounded-[40px] w-full h-[450px]  bg-no-repeat bg-cover"
                      ></figure>
                    )}
                </div>

                <div className="shadow flex flex-row  gap-[80px] px-10 rounded-[64px] mt-[24px] py-10 bg-[#f9f9f9] w-full ">
                  {/* 왼쪽 */}
                  <div className="flex flex-col flex-wrap  gap-[24px] ">
                    <div className="flex ">
                      <span className="bg-[#1c5eff1a] w-fit text-[#1c5eff] px-[14px] py-[6px] rounded-[50px] text-[13px]">
                        {metaData[indexOfItemDetail] &&
                          metaData[indexOfItemDetail].endDate &&
                          metaData[indexOfItemDetail].endDate.split("T")[0]}
                      </span>

                      {metaData[indexOfItemDetail] &&
                      metaData[indexOfItemDetail].category &&
                      metaData[indexOfItemDetail].category === "project" ? (
                        <span className="bg-[#28466c] w-fit text-neutral-50 px-[14px] py-[6px] rounded-[50px] text-[13px] ml-2">
                          project
                        </span>
                      ) : (
                        <span className="bg-[#603b2b] w-fit text-neutral-50 px-[14px] py-[6px] rounded-[50px] text-[13px] ml-2">
                          feature
                        </span>
                      )}
                    </div>

                    <div>
                      <h2 className="text-[48px] font-semibold leading-[1.1em]  text-left	">
                        {metaData[indexOfItemDetail] &&
                          metaData[indexOfItemDetail].title}
                      </h2>

                      {/* stack 각각을 , 로 구분해서 넣어주면 -> 각 요소를 , 기준으로 배열로 만들어서 -> map 돌릴 수 있음. */}
                      <span className="flex items-center mt-[1.1em] ml-[-6px]">
                        {metaData[indexOfItemDetail] &&
                          metaData[indexOfItemDetail].stacks &&
                          metaData[indexOfItemDetail].stacks
                            .split(",")
                            .map((item, index) => {
                              return (
                                <span
                                  key={index}
                                  className="bg-[#2b593f] font-light text-neutral-50 px-[8px] py-[4px] rounded-[50px] text-[12px] ml-2"
                                >
                                  {item.trim()}
                                </span>
                              );
                            })}
                      </span>
                    </div>

                    <div className="text-[20px] leading-[1.6em] mt-[16px]  w-[100%]">
                      <h5 className="">
                        <strong>Summary</strong>
                      </h5>
                      <p className="leading-[1.7em]  shrink-0 text-[15px] font-normal text-left mt-[15px]  	">
                        {metaData[indexOfItemDetail] &&
                          metaData[indexOfItemDetail].summary}
                        {metaData[indexOfItemDetail] &&
                          metaData[indexOfItemDetail].summary}
                        {metaData[indexOfItemDetail] &&
                          metaData[indexOfItemDetail].summary}
                      </p>
                    </div>

                    <div className="mt-[16px]">
                      <h5 className="text-[20px] leading-[1.6em]  ">
                        <strong>기능 요구사항</strong>
                      </h5>

                      {metaData[indexOfItemDetail] && (
                        <DivTable
                          metaData={metaData}
                          selectedfeatureID={metaData[indexOfItemDetail].featureID}
                          fsd_largecategory={
                            metaData[indexOfItemDetail].fsd_largecategory
                          }
                          fsd_mediumcategory={
                            metaData[indexOfItemDetail].fsd_mediumcategory
                          }
                          fsd_smallcategory={
                            metaData[indexOfItemDetail].fsd_smallcategory
                          }
                          fsd_functionalrequirement={
                            metaData[indexOfItemDetail]
                              .fsd_functionalrequirement
                          }
                          fsd_nonfunctionalrequirement={
                            metaData[indexOfItemDetail]
                              .fsd_nonfunctionalrequirement
                          }
                          fsd_description={
                            metaData[indexOfItemDetail].fsd_description
                          }
                          fsd_status={metaData[indexOfItemDetail].fsd_status}
                        />
                      )}

                      <div></div>
                    </div>
                  </div>

                  {/* 오른쪽 */}
                  <div className="shadow w-[30%] shrink-0 rounded-[32px] bg-white  p-8 flex gap-[12px] h-fit flex-col">
                    <h5 className="text-[20px] font-normal"> Information </h5>

                    <div className="flex justify-between">
                      <span className="text-gray-600 text-[14px]">Project</span>
                      <span className="text-[14px]"> STO 프로젝트 </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-600 text-[14px]">Date</span>
                      <span className="text-[14px]"> 23.03.11 - 03.12 </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-600 text-[14px]">
                        프로젝트 깃 주소
                      </span>
                      <span className="text-[14px]"> ✅ </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-600 text-[14px]">
                        프로젝트 일지
                      </span>
                      <span className="text-[14px]"> ✅ </span>
                    </div>

                    <button
                      onClick={handleSendFeedback}
                      className="px-4 py-3 w-full mx-auto ml-auto text-sm font-semibold rounded-full cursor-pointer mt-[16px] bg-gray-950 text-gray-50 hover:bg-gray-600 "
                    >
                      Feedback Now
                    </button>
                  </div>
                </div>
              </article>

              <ProfileSection />

              <section className="relative mt-20 text-[16px] font-bold mb-20">
                <div>You may also like </div>
                <article className="">
                  <ul className="flex flex-row mt-4 detailPageGridContainer ">
                    {/* <ul className="flex flex-row mt-4 detailPageGridContainer marquee-content"> */}
                    {filteredSortedData &&
                      filteredSortedData.slice(0, 4).map((item, index) => {
                        return (
                          <li
                            key={index}
                            // className="flex flex-col cursor-pointer w-[250px] ml-[80px] h-full"
                            className="flex flex-col cursor-pointer w-[250px]  h-full"
                            onClick={() => handleSeeMoreItem(index)}
                          >
                            <figure
                              className=" relative h-0 bg-top bg-no-repeat bg-cover pb-75% rounded-lg hover:scale-105 transition-all duration-500 ease-in-out"
                              // className=" relative bg-top bg-no-repeat bg-cover w-[350px] h-[250px] rounded-lg hover:scale-105 transition-all duration-500 ease-in-out"
                              style={{
                                // backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${item.image})`,
                                backgroundImage: `url(http://localhost:7070/getImg/${item.demoVideo_1})`,
                              }}
                              onMouseEnter={() => setIsHovered(index)}
                              onMouseLeave={() => setIsHovered(null)}
                            >
                              {/* 호버 했을 때 보이는 것  */}
                              {isHovered === index ? (
                                <div className="absolute flex items-end justify-between w-full h-full p-5 rounded-lg bg-gradient-to-b from-gray-50/5 to-gray-600/50">
                                  <span className="mb-3 mr-4 text-base font-normal text-gray-100 w-[80%]  truncate">
                                    {item.summary}
                                  </span>
                                  {item.category === "feature" ? (
                                    <span
                                      className="px-1 shrink-0 justify-center  flex ml-1 mb-2 mr-2 w-[34px] h-[34px]  text-[10px] font-semibold
                                      text-white transition duration-200 ease-linear bg-[#603b2b] rounded-full 
                                      hover:bg-[#eaa064 ] items-center hover:text-neutral-50"
                                    >
                                      기능
                                    </span>
                                  ) : (
                                    <span
                                      className="px-1 shrink-0 justify-center  flex ml-1 mb-2 mr-2 w-[34px] h-[34px]  text-[10px] font-semibold 
                                      text-white transition duration-200 ease-linear bg-[#28466c] rounded-full 
                                      hover:bg-[#6488ea ] items-center hover:text-neutral-50"
                                    >
                                      플젝
                                    </span>
                                  )}

                                  <div className="mb-2">
                                    <div className="ml-auto flex items-center justify-center p-2 text-[12px] font-semibold text-gray-700 rounded-full bg-gray-50 shrink-0 border-[1.5px] border-gray-200">
                                      <SVGExternalLink />
                                    </div>
                                    {/* <div className="right-[-7px] top-[-5px] absolute w-5 h-5 text-[12px] flex items-center justify-center rounded-full bg-searchBoxBorder-100/85  text-gray-50">
                      stack 의 개수 세기📛
                    </div> */}
                                  </div>
                                </div>
                              ) : (
                                ""
                              )}
                            </figure>

                            {/* description 부분 */}
                            <div className="flex items-center justify-between py-3 font-medium 2 text-stone-900 ">
                              <div className="flex items-center ">
                                <figure
                                  className="w-6 h-6 bg-top bg-no-repeat bg-cover rounded-full"
                                  style={{
                                    backgroundImage: `url(http://localhost:7070/getImg/${item.demoVideo_1})`,
                                  }}
                                ></figure>

                                <span className="ml-2 text-sm font-medium text-gray-900 truncate max-w-[180px]">
                                  {item.title}
                                </span>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                  </ul>
                </article>
              </section>
            </main>
          </div>

          {/* 전체 모달 */}
          <ModalFeedbackBox
            handleCancelBtn={handleCancelBtn}
            isShowChatBox={isShowChatBox}
          />
        </section>
      ) : (
        ""
      )}

      {/* <section className="bg-blue-300">
          <div className="top-0 z-50 h-full w-[360px] transition-all duration-100 ease-linear; fixed right-0">
            <div className="mt-[96px] h-100vh-96px relative bg-gray-200 rounded-2xl shadow-lg overscroll-none transition-all duration-100 ease-linear">
              <div className="h-[64px] flex flex-row items-center justify-between">
                <p className="ml-2 text-base"> 피드백 보내기🚀 </p>
                <div className="mr-2 cursor-pointer" onClick={handleCancelBtn}>
                  {" "}
                  ❎
                </div>
              </div>

              <input type="text" className="rounded-lx" />
            </div>
          </div>
        </section> */}
    </>
  );
};

export default CardList;
