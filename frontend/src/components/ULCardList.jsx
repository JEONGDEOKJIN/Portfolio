import React from 'react'
import SVGExternalLink from './SVGExternalLink';
import SVGCalendar from './SVGCalendar';

const ULCardList = ({
    filteredSortedData, 
    handleCardItem, // 이벤트 핸들러 함수 넘길 때 이게 맞니 
    setIsHovered,
    isHovered,
}) => {
  return (
    <>
      <ul className="flex flex-col cardListGridContainer px-[72px]">
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
    </>
  )
}

export default ULCardList