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
import projectNames from "../utils/projectNames";
import DivRelatedFeatureProjects from "./DivRelatedFeatureProjects";
import ULCardList from "./ULCardList";
import SectionItemDetail from "./SectionItemDetail";
import useCardDetailItem from "../hooks/useDetailItem";
import IconCancelZoomImage from "./IconCancelZoomImage";

const CardList = ({
  searchTerm,
  setSearchTerm,
  isSubmitClicked,
  setIsSubmitClicked,
  searchBarInput,
  setSearchBarInput,
}) => {
  const [selectedFilterOptionArr, setSelectedFilterOptionArr] = useState([]);
  const [sortOption, setSortOption] = useState("recommended");
  const [isFilterBtnClicked, setIsFilterBtnClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(null);
  const [isItemDetailOpened, setIsItemDetailOpened] = useState(false);
  const [isShowChatBox, setIsShowChatBox] = useState(false);
  const [indexOfItemDetail, setIndexOfItemDetail] = useState(null);
  const [clickedDetailedItem, setClickedDetailedItem] = useState(null);
  const [isArchitectureImageZoomed, setIsArchitectureImageZoomed] =
    useState(false);
  const [isDemoImageZoomed, setIsDemoImageZoomed] = useState(false);
  const [isDemoImageHover, setIsDemoImageHover] = useState(false);

  // const [marqueeInfiniteItem, setMarqueeInfiniteItem] =
  //   useState(filteredSortedData);

  const [isArchitectureImageHover, setIsArchitectureImageHover] =
    useState(false);

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

  // let dataToRender = metaData; // ⭐⭐⭐⭐⭐ 이게 수정 전 | 우선, 전역 변수로 관리 | 잘못되면 이거 살리고
  // let dataToRender = uniqueFeaturerProjectIDData(metaData) ; // 이게 위에 작업한

  let dataToRender = [];

  if (searchResultData && searchResultData.length > 0) {
    // dataToRender = uniqueFeaturerProjectIDData(searchResultData)

    // 수정전 : metaData 테이블 하나에서만 검색 결과를 가져옴
    // dataToRender = searchResultData; // 이게 수정 전⭐⭐⭐⭐⭐ | 잘못되면 이거 살리고

    // 수정후 : metaData + FSDRequirement 에서, 검색 결과 가져옴
    // 검색 된 것 중, -> metaData 에서 온거면 -> 'metaData.id 와 검색결과의id' 동일하면 -> dataToRender 에 넣기
    // 검색 된 것 중, -> FSDRequirement 에서 온거면 -> 'metaData.id 와 검색결과의projectID' 동일하면 -> dataToRender 에 넣기

    const searchResultFromPortfolioMeta = searchResultData.filter(
      (item) => item.source === "PortfolioMeta"
    );

    searchResultFromPortfolioMeta.forEach((searchItem) => {
      const matchedMetaItem = metaData.find(
        (metaItem) => metaItem.id === searchItem.id
      );
      console.log("matchedMetaItem", matchedMetaItem);

      if (
        matchedMetaItem &&
        !dataToRender.some((item) => item.id === matchedMetaItem.id)
      ) {
        // dataToRender 안에 matchedMetaItem안에 담긴 데이터가 이미 있는지 검증해야 함
        dataToRender.push(matchedMetaItem);
      }
    });

    const searchResultFromFSDRequirement = searchResultData.filter(
      (item) => item.source === "FSDRequirement"
    );

    searchResultFromFSDRequirement.forEach((searchItem) => {
      const matchedMetaItem = metaData.find(
        (metaItem) => metaItem.id === searchItem.portfolioMetaId
      );
      if (
        matchedMetaItem &&
        // dataToRender 안에 matchedMetaItem안에 담긴 데이터가 이미 있는지 검증해야 함
        !dataToRender.some((item) => item.id === matchedMetaItem.id)
      ) {
        dataToRender.push(matchedMetaItem);
      }
    });
  } else {
    dataToRender = metaData; // 검색 데이터가 없으면, metaData 로 렌더링
  }

  console.log("searchResultData 에 들어가는 데이터", searchResultData);
  // fsd 에서 나오면 배열에 들어가 있음.

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
          // console.log("selectedCategories🔥🔥", selectedCategories); // ["category_project"] 이렇게 나옴

          const selectedRoles = selectedFilterOptionArr.filter((option) =>
            option.startsWith("roles_")
          );

          const selectedStacks = selectedFilterOptionArr.filter((option) =>
            option.startsWith("stacks_")
          );

          // 접두사 category, roles 및 stacks 제거
          // ⭐⭐ 왜냐면, 'selectedCategories' 에 저장되어 있는 건 'category_project' 인데, DB 로 부터 오는 metaData 는, 순수하게 project, 또는 feature 로만 저장되어 있
          const deleteCategoryPrefix = selectedCategories.map(
            (item) => item.split("_")[1]
          );
          const deleteRolesPrefix = selectedRoles.map(
            (item) => item.split("_")[1]
          );
          const deleteStacksPrefix = selectedStacks.map(
            (item) => item.split("_")[1]
          );

          // 카테고리만 선택된 상황에서, 해당 item 의 콜백함수를 true 로 반환해서 필터링
          if (
            deleteCategoryPrefix.length > 0 &&
            deleteRolesPrefix.length === 0 &&
            deleteStacksPrefix.length === 0
          ) {
            // selectedCategories 의 배열 안의 요소를 순회하면서,
            // 'item.category 의 각 요소의 문자열'이라면,  'clickedCategory 문자열' 과 동일한지 를 판단
            // 'item.category이 배열' 이라면, 각 배열 요소 안에, 'clickedCategory 문자열' 이 있는지를 판단.
            // 동일하다면, some 메서드는 true 를 반환한다.
            // 그러면, 현재, ⭐filter 함수의 콜백함수가 실행중인 상황이므로⭐, 현재 진행중인 콜백함수에는 true 가 반환된다.
            // 따라서, filter 함수로 돌아가서, 현재 진행중인 item 에 대해서는 true 이므로, filter 를 통과하게 된다.
            return deleteCategoryPrefix.some(
              (deleteCategoryPrefixItem) =>
                item.category.includes(deleteCategoryPrefixItem) // item 의 category 필드에 'project' 인 걸 filter 에서 return
            );
          }

          // 역할만 선택된 상황에서, 해당 item 의 콜백함수를 true 로 반환해서 필터링
          if (
            deleteRolesPrefix.length > 0 &&
            deleteCategoryPrefix.length === 0 &&
            deleteStacksPrefix.length === 0
          ) {
            return deleteRolesPrefix.some((deleteRolesPrefixItem) =>
              item.roles.includes(deleteRolesPrefixItem)
            );
          }

          // 역할만 선택된 상황에서, 해당 item 의 콜백함수를 true 로 반환해서 필터링
          if (
            deleteStacksPrefix.length > 0 &&
            deleteCategoryPrefix.length === 0 &&
            deleteRolesPrefix.length === 0
          ) {
            return deleteStacksPrefix.some((deleteStacksPrefixItem) =>
              item.stacks.includes(deleteStacksPrefixItem)
            );
          }

          // 위의 조건이 모두 아니면, '모두 선택된 상황' 이므로 -> 전부 다 필터링 한다.
          return (
            deleteCategoryPrefix.some((deleteCategoryPrefixItem) =>
              item.category.includes(deleteCategoryPrefixItem)
            ) &&
            deleteRolesPrefix.some((deleteRolesPrefixItem) =>
              item.roles.includes(deleteRolesPrefixItem)
            ) &&
            deleteStacksPrefix.some((deleteStacksPrefixItem) =>
              item.stacks.includes(deleteStacksPrefixItem)
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

  const handleCardItem = (metaDataID) => {
    // fetch 요청 보내기
    // isItemDetailOpened(index) : 원래는 우선, 특정 index 인지 확인하고, 해당 index 를 제출

    setIsItemDetailOpened(!isItemDetailOpened); // 처음에 false 였다가, true 로 변함

    const clickedDetailedItemArr = metaData.find(
      (item) => item.id === metaDataID
    );

    setClickedDetailedItem(clickedDetailedItemArr);

    // 모달이 열릴 때, 원본 documment 에 있는 스크롤을 없애기
    if (!isItemDetailOpened) {
      // 처음에 false 였다가, true 로 변함
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = ""; // cleaner 기능
    }

    setIndexOfItemDetail(metaDataID); // 이건 필요 없지 않나❓❓❓❓❓
    console.log("indexOfItemDetail", indexOfItemDetail);
    console.log("metaDataID", metaDataID);
  };

  const handleSeeMoreItem = (metaDataID) => {
    // setIsItemDetailOpened(true);

    console.log("handleSeeMoreItem 에 ID 들어갔나", metaDataID);

    setIndexOfItemDetail(metaDataID); // 필요한 정보를 받아옴
    // setIndexOfItemDetail(metaDataID);    // 이건 필요 없지 않나❓❓❓❓❓

    const clickedDetailedItemArr = metaData.find(
      (item) => item.id === metaDataID
    );
    setClickedDetailedItem(clickedDetailedItemArr);

    // 스크롤을 위로 올리기
    if (detailSectionRef.current) {
      // 실제로 ref 로 해당 DOM 요소를 가리키고 있는지 체크
      detailSectionRef.current.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }
  };

  const handleRelatedItem = (metaDataID) => {
    // setIsItemDetailOpened(true);

    console.log("handleRelatedItem 에 ID 들어갔나", metaDataID);

    setIndexOfItemDetail(metaDataID); // 필요한 정보를 받아옴
    // setIndexOfItemDetail(metaDataID);    // 이건 필요 없지 않나❓❓❓❓❓

    const clickedDetailedItemArr = metaData.find(
      (item) => item.id === metaDataID
    );
    setClickedDetailedItem(clickedDetailedItemArr);

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
    document.body.style.overflowY = "auto"; // 디테일 페이지에서 클릭했을 때에도, 스크롤 생기게 하기
    setIsItemDetailOpened(false);
  };

  const handleSendFeedback = () => {
    setIsShowChatBox(true);
  };

  const handleCancelBtn = () => {
    setIsShowChatBox(false);
  };

  const handleArchitectureImage = () => {
    setIsArchitectureImageZoomed(!isArchitectureImageZoomed);
  };

  const handleDemoImage = () => {
    setIsDemoImageZoomed(!isDemoImageZoomed);
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

        <CategoryOptions
          setSearchBarInput={setSearchBarInput}
          setSearchTerm={setSearchTerm}
          setIsSubmitClicked={setIsSubmitClicked}
        />

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
      <ULCardList
        filteredSortedData={filteredSortedData}
        handleCardItem={handleCardItem} // 이벤트 핸들러 함수 넘길 때 이게 맞니
        setIsHovered={setIsHovered}
        isHovered={isHovered}
      />

      {/* <SectionItemDetail
        isItemDetailOpened={isItemDetailOpened}
        metaData={metaData}
        clickedDetailedItem={clickedDetailedItem}
        detailSectionRef={detailSectionRef}
        indexOfItemDetail={indexOfItemDetail}
        projectNames={projectNames}
        filteredSortedData={filteredSortedData}
        setIsHovered={setIsHovered}
        isHovered={isHovered}
        isShowChatBox={isShowChatBox}
        setIsShowChatBox={setIsShowChatBox}
        handleCancelBtn={handleCancelBtn}
        handleSendFeedback={handleSendFeedback}
        handleCloseBtn={handleCloseBtn} // 이건 파일로 뺄 수 있지 않아?
        handleRelatedItem={handleRelatedItem} // 이건 파일로 뺄 수 있지 않아?
        handleSeeMoreItem={handleSeeMoreItem}
      /> */}

      {/* itemDetail 영역 | 여기는 컴포넌트로 따로 빼서 진행 */}
      {isItemDetailOpened && metaData && clickedDetailedItem ? (
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
              clickedDetailedItem &&
              clickedDetailedItem.title && (
                <HeaderProfile title={clickedDetailedItem.title} />
              )}

            {/* 💪 mx-auto 하면 이제 가운데로 오긴 하는데, flex 를 써서 깔끔하게 오게 하고 싶긴 함  */}
            <main className="w-full bg-[neutral-50] max-w-[1200px] mx-auto rounded-[64px] p-10">
              <article className="w-full ">
                {/* 사진 */}
                <div className=" x-full flex flex-row justify-normal gap-[24px]">
                  {typeof indexOfItemDetail === "number" &&
                    clickedDetailedItem &&
                    clickedDetailedItem.architectureImg_1 && (
                      <figure
                        style={{
                          backgroundImage: `url(http://localhost:7070/getImg/${clickedDetailedItem.architectureImg_1})`,
                        }}
                        onClick={() => handleArchitectureImage()}
                        onMouseEnter={() => setIsArchitectureImageHover(true)}
                        onMouseLeave={() => setIsArchitectureImageHover(false)}
                        className="relative cursor-pointer shadow w-[400px] h-[450px]  bg-no-repeat bg-cover rounded-[40px]"
                      >
                        {isArchitectureImageHover && (
                          <div className="absolute inset-0 flex flex-col items-center justify-center w-full y-full bg-gradient-to-b rounded-[40px] from-black/50 to-black/50">
                            <p className="font-medium text-[20px] text-neutral-50 border-[1px] p-2 rounded-[5px] ">
                              아키텍처
                            </p>
                          </div>
                        )}
                      </figure>
                    )}

                  {isArchitectureImageZoomed && (
                    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/90">
                      <div
                        onClick={() => handleArchitectureImage()}
                        className="absolute z-50 cursor-pointer top-5 right-5"
                      >
                        <IconCancelZoomImage />
                      </div>

                      <figure
                        style={{
                          backgroundImage: `url(http://localhost:7070/getImg/${clickedDetailedItem.architectureImg_1})`,
                        }}
                        // onClick={() => handleDemoImage()}

                        className="w-full  max-w-[90%] max-h-[90%] h-full z-50 bg-no-repeat bg-contain bg-center shadow cursor-pointer"
                      ></figure>
                    </div>
                  )}

                  {typeof indexOfItemDetail === "number" &&
                    clickedDetailedItem &&
                    clickedDetailedItem.architectureImg_1 && (
                      <figure
                        // gif 할 때의 버전
                        // style={{
                        //   backgroundImage: `url(http://localhost:7070/getImg/${clickedDetailedItem.demoVideo_1})`,
                        // }}
                        onClick={() => handleDemoImage()}
                        onMouseEnter={() => setIsDemoImageHover(true)}
                        onMouseLeave={() => setIsDemoImageHover(false)}
                        className="cursor-pointer shadow relative rounded-[40px] w-full h-[450px]  bg-no-repeat bg-cover"
                      >
                        <video
                          className="object-cover w-full h-full"
                          src={`http://localhost:7070/getImg/${clickedDetailedItem.demoVideo_1}`}
                          autoPlay
                          loop
                          muted
                        ></video>
                        {isDemoImageHover && (
                          <div className="absolute inset-0 flex flex-col items-center justify-center w-full y-full bg-black/50 rounded-[40px]">
                            <p className="font-medium text-[20px] text-neutral-50 border-[1px] p-2 rounded-[5px] ">
                              시연 동영상
                            </p>
                          </div>
                        )}
                      </figure>
                    )}

                  {isDemoImageZoomed && (
                    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/90 ">
                      <div
                        onClick={() => handleDemoImage()}
                        className="absolute z-50 cursor-pointer top-5 right-5"
                      >
                        <IconCancelZoomImage />
                      </div>

                      <figure
                        // style={{
                        //   backgroundImage: `url(http://localhost:7070/getImg/${clickedDetailedItem.demoVideo_1})`,
                        // }}
                        // onClick={() => handleDemoImage()}

                        className="w-full  max-w-[90%] max-h-[90%] h-full z-50 bg-no-repeat bg-contain bg-center shadow cursor-pointer"
                      >
                        <video
                          className="object-cover w-full h-full"
                          src={`http://localhost:7070/getImg/${clickedDetailedItem.demoVideo_1}`}
                          autoPlay
                          loop
                          muted
                        ></video>
                      </figure>
                    </div>
                  )}
                </div>

                <div className="shadow flex flex-row  gap-[80px] px-10 rounded-[64px] mt-[24px] py-10 bg-[#f9f9f9] w-full ">
                  {/* 왼쪽 */}
                  <div className="flex flex-col flex-wrap  gap-[24px] min-w-[60%] ">
                    <div className="flex ">
                      <span className="bg-[#1c5eff1a] w-fit text-[#1c5eff] px-[14px] py-[6px] rounded-[50px] text-[13px]">
                        {clickedDetailedItem &&
                          clickedDetailedItem.endDate &&
                          clickedDetailedItem.endDate.split("T")[0]}
                      </span>

                      {clickedDetailedItem &&
                      clickedDetailedItem.category &&
                      clickedDetailedItem.category === "project" ? (
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
                        {clickedDetailedItem && clickedDetailedItem.title}
                      </h2>

                      {/* stack 각각을 , 로 구분해서 넣어주면 -> 각 요소를 , 기준으로 배열로 만들어서 -> map 돌릴 수 있음. */}
                      <span className="flex items-center mt-[1.1em] ml-[-6px]">
                        {clickedDetailedItem &&
                          clickedDetailedItem.stacks &&
                          clickedDetailedItem.stacks
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
                        <strong>서비스 소개</strong>
                      </h5>
                      <p className="leading-[1.7em]  shrink-0 text-[15px] font-normal text-left mt-[15px]  	">
                        {/* {clickedDetailedItem && clickedDetailedItem.summary} */}
                        누구나 쉽게 부동산을 소유할 수 있는 '부동산 조각투자 서비스' 로써, 부동산 자산을 불록체인 토큰화 하여 '분양' 받고, '매매' 할 수 있는 STO 거래 플랫폼
                      </p>
                    </div>

                    <div className="mt-[16px]">
                      <h5 className="text-[20px] leading-[1.6em]  ">
                        <strong>팀 구성 (✅ 점핏 이력서 목차에 따름) </strong>
                      </h5>

                      {clickedDetailedItem && (
                        <DivTable
                          indexOfItemDetail={indexOfItemDetail}
                          metaData={metaData}
                          // selectedfeatureID={clickedDetailedItem.featureID}
                          fsd_largecategory={
                            clickedDetailedItem.fsd_largecategory
                          }
                          fsd_mediumcategory={
                            clickedDetailedItem.fsd_mediumcategory
                          }
                          fsd_smallcategory={
                            clickedDetailedItem.fsd_smallcategory
                          }
                        />
                      )}

                      <div></div>
                    </div>

                    <div className="mt-[16px]">
                      <h5 className="text-[20px] leading-[1.6em]  ">
                        <strong>역할 (✅ 점핏 이력서 목차 및 노션 wiki 에 적은 플젝 소개 목차 에 따름) </strong>
                      </h5>

                      {clickedDetailedItem && (
                        <DivRelatedFeatureProjects
                          handleRelatedItem={handleRelatedItem}
                          relatedItems={metaData.filter(
                            (item) =>
                              item.projectID ===
                                clickedDetailedItem.projectID &&
                              item.id !== clickedDetailedItem.id // detail page 에서 자기랑 동일한 건 안 보여주기
                          )}
                        />
                      )}
                    </div>

                    <div className="mt-[16px]">
                      <h5 className="text-[20px] leading-[1.6em]  ">
                        <strong>주요기능 (✅ 점핏 이력서 목차 및 노션 wiki 에 적은 플젝 소개 목차 에 따름) </strong>
                      </h5>
                      - UI 보여주고 
                      - 테이블로 어떤 페이지 인지 설명
                    </div>

                    <div className="mt-[16px]">
                      <h5 className="text-[20px] leading-[1.6em]  ">
                        <strong>주요기술과제 (✅ 점핏 이력서 목차 및 노션 wiki 에 적은 플젝 소개 목차 에 따름) </strong>
                      </h5>
                      - 위에서 역할이랑 겹칠 수도 있지 않을까? 아직 잘 모르겠네...                        
                    </div>
                    
                    <div className="mt-[16px]">
                      <h5 className="text-[20px] leading-[1.6em]  ">
                        <strong>협업방식 (✅ 점핏 이력서 목차 및 노션 wiki 에 적은 플젝 소개 목차 에 따름) </strong>
                      </h5>

                    </div>
                    
                    <div className="mt-[16px]">
                      <h5 className="text-[20px] leading-[1.6em]  ">
                        <strong>산출물 (✅ 이건 오른쪽에 있는 INFO 박스로 대체하거나 해보자) </strong>
                      </h5>

                    </div>

                  </div>

                  {/* 오른쪽 */}
                  <div className="shadow w-[30%] shrink-0 rounded-[32px] bg-white  p-8 flex gap-[12px] h-fit flex-col">
                    <h5 className="text-[20px] font-normal"> Information </h5>

                    <div className="flex justify-between">
                      <span className="text-gray-600 text-[14px]">Project</span>
                      <span className="text-[14px]">
                        {projectNames[clickedDetailedItem.projectID]}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-600 text-[14px]">Date</span>
                      <span className="text-[14px]">
                        {(() => {
                          const startDatePart = clickedDetailedItem.startDate
                            .split("T")[0]
                            .split("-");
                          const endDatePart = clickedDetailedItem.endDate
                            .split("T")[0]
                            .split("-");
                          return `${startDatePart[0].slice(2, 4)}.${
                            startDatePart[1]
                          }.${startDatePart[2]}-${startDatePart[0].slice(
                            2,
                            4
                          )}.${endDatePart[1]}.${endDatePart[2]}`;
                        })()}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <a
                        className="text-[14px]  "
                        href={clickedDetailedItem.repository}
                      >
                        <span className="text-gray-600 text-[14px]">
                          프로젝트 깃 주소
                        </span>
                        <span className="text-[14px] flex  ">
                          {clickedDetailedItem.repository}
                        </span>
                      </a>
                    </div>

                    <div className="flex justify-between">
                      <a
                        className="text-[14px] "
                        href={clickedDetailedItem.projectDocuments}
                      >
                        <span className="text-gray-600 text-[14px]">
                          프로젝트 일지
                        </span>
                        <span className="text-[14px] flex ">
                          {clickedDetailedItem.projectDocuments}
                        </span>
                      </a>
                    </div>

                    <div className="flex justify-between">
                      <a
                        className="text-[14px] "
                        href="https://deokjin.gitbook.io/dj/"
                      >
                        <span className="text-gray-600 text-[14px]">
                          개발 공부 블로그
                        </span>
                        <span className="text-[14px] flex ">
                          https://deokjin.gitbook.io/dj
                        </span>
                      </a>
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
                            onClick={() => handleSeeMoreItem(item.id)}
                          >
                            <figure
                              className=" relative h-0 bg-top bg-no-repeat bg-cover pb-75% rounded-lg hover:scale-105 transition-all duration-500 ease-in-out"
                              // className=" relative bg-top bg-no-repeat bg-cover w-[350px] h-[250px] rounded-lg hover:scale-105 transition-all duration-500 ease-in-out"
                              style={{
                                // backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${item.image})`,
                                backgroundImage: `url(http://localhost:7070/getImg/${item.demoVideo_2})`,
                              }}
                              onMouseEnter={() => setIsHovered(index)}
                              onMouseLeave={() => setIsHovered(null)}
                            >
                              {/* 호버 했을 때 보이는 것  */}
                              {isHovered === index ? (
                                <div className="absolute flex items-end justify-between w-full h-full p-5 rounded-lg bg-gradient-to-b from-gray-50/5 to-gray-600/50">
                                  <span className="mb-3 mr-4 text-base font-normal text-gray-100 w-[80%]  truncate">
                                    {item.fsd_mediumcategory}
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
                                  // style={{
                                  //   backgroundImage: `url(http://localhost:7070/getImg/${item.demoVideo_1})`,
                                  // }}
                                >
                                  <video
                                    className="object-cover w-full h-full"
                                    src={`http://localhost:7070/getImg/${clickedDetailedItem.demoVideo_1}`}
                                    autoPlay
                                    loop
                                    muted
                                  ></video>
                                </figure>

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
            setIsShowChatBox={setIsShowChatBox}
          />
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default CardList;
// 컴포넌트화 시키기전 카드리스트
{
  /* <ul className="flex flex-col cardListGridContainer px-[72px]">
        {filteredSortedData.map((item, index) => {
          return (
            <li
              key={index}
              className="flex flex-col cursor-pointer"
              onClick={() => handleCardItem(item.id)}
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
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </figure>

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
      </ul> */
}
