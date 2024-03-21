import React from "react";
import IconCancelItemDetail from "./IconCancelItemDetail";
import HeaderProfile from "./HeaderProfile";
import DivTable from "./DivTable";
import DivRelatedFeatureProjects from "./DivRelatedFeatureProjects";
import ProfileSection from "./ProfileSection";
import SVGExternalLink from "./SVGExternalLink";
import ModalFeedbackBox from "./ModalFeedbackBox";

const SectionItemDetail = ({
  isItemDetailOpened,
  metaData,
  clickedDetailedItem,
  detailSectionRef,
  indexOfItemDetail,
  projectNames,
  setIsHovered,
  isHovered,
  isShowChatBox,
  setIsShowChatBox,
  handleSendFeedback,
  filteredSortedData,
  handleCloseBtn, // 이건 파일로 뺄 수 있지 않나?
  handleRelatedItem,
  handleCancelBtn,
  handleSeeMoreItem,
}) => {
  const handleArchitectureImage = () => {
    console.log("handleArchitectureImage 클릭");
  };

  return (
    <>
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
                        className=" shadow w-[400px] h-[450px]  bg-no-repeat bg-cover rounded-[40px]"
                      ></figure>
                    )}

                  {typeof indexOfItemDetail === "number" &&
                    clickedDetailedItem &&
                    clickedDetailedItem.demoVideo_1 && (
                      <figure
                        // style={{
                        //   backgroundImage: `url(http://localhost:7070/getImg/${clickedDetailedItem.demoVideo_1})`,
                        // }}
                        className=" shadow rounded-[40px] w-full h-[450px]  bg-no-repeat bg-cover"
                      >
                        <video
                          className="object-cover w-full h-full"
                          src={`http://localhost:7070/getImg/${clickedDetailedItem.demoVideo_1}`}
                          autoPlay
                          loop
                          muted
                        ></video>
                      </figure>
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
                        <strong>Summary</strong>
                      </h5>
                      <p className="leading-[1.7em]  shrink-0 text-[15px] font-normal text-left mt-[15px]  	">
                        {clickedDetailedItem && clickedDetailedItem.summary}
                      </p>
                    </div>

                    <div className="mt-[16px]">
                      <h5 className="text-[20px] leading-[1.6em]  ">
                        <strong>기능 요구사항</strong>
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
                        <strong>관련 기능 및 프로젝트</strong>
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
                        className="text-[14px] "
                        href={clickedDetailedItem.repository}
                      >
                        <span className="text-gray-600 text-[14px]">
                          프로젝트 깃 주소
                        </span>
                        <span className="text-[14px] ">
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
                        <span className="text-[14px] ">
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
                        <span className="text-[14px] ">
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
            setIsShowChatBox={setIsShowChatBox}
          />
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default SectionItemDetail;
