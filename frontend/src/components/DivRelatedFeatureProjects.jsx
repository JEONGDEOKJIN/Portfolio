import React from "react";
import DivTableRowHeader from "./DivTableRowHeader";
import DivTableRow from "./DivTableRow";
import DivTableRowHeaderRelatedItems from "./DivTableRowHeaderRelatedItems";
import DivTableRowRelatedItem from "./DivTableRowRelatedItem";

const DivRelatedFeatureProjects = ({ handleRelatedItem, relatedItems }) => {
  return (
    <>
      <div className="flex flex-col border-t-1 border-neutral-200 mt-[15px]">
        <DivTableRowHeaderRelatedItems
          largeCriteria={"구분"}
          mediumCriteria={"제목"}
          functionalRequirement={"요약"}
        />

        {relatedItems.map((item, index) => {
          return (
            <DivTableRowRelatedItem
              key={index}
              largeCriteria={item.category}
              mediumCriteria={item.title}
              functionalRequirement={item.summary}
              onClick={() => handleRelatedItem(item.id)}
            />
          );
        })}
      </div>
    </>
  );
};

export default DivRelatedFeatureProjects;

{
  /* {relatedItems.filter((item) => item.id === indexOfItemDetail).map((item, index) => {
  return (
    <DivTableRow
      key={index}
      largeCriteria={item.fsd_largecategory}
      mediumCriteria={item.fsd_mediumcategory}
      smallCriteria={item.fsd_smallcategory}
      functionalRequirement={item.requirements}
      desc={item.fsd_description}
    />
  );
})} */
}

{
  /* <DivTableRow
  largeCriteria={"어드민"}
  mediumCriteria={"대시보드"}
  smallCriteria={"마켓 데이터"}
  functionalRequirement={"기능적 요구사항"}
  nonFunctionalRequirement={"비기능적 요구사항"}
  desc={
    "페이지 페이지 진입 시, BE 로 부터, 실시간 거래 까지 반영된 최근 30일 정보를, 잘 받아오는가"
  }
/> */
}
