import React from "react";
import DivTableRowHeader from "./DivTableRowHeader";
import DivTableRow from "./DivTableRow";

const DivTable = ({ fsd_largecategory , fsd_mediumcategory , fsd_smallcategory , fsd_functionalrequirement , 
                    fsd_nonfunctionalrequirement , fsd_description , fsd_status }) => {
  return (
    <>
      <div className="flex flex-col border-t-1 border-neutral-200 mt-[15px]">
        <DivTableRowHeader
          largeCriteria={"대분류"}
          mediumCriteria={"중분류"}
          smallCriteria={"소분류"}
          functionalRequirement={"기능적 요구사항"}
          nonFunctionalRequirement={"비기능적 요구사항"}
          desc={"설명"}
        />

        <DivTableRow
          largeCriteria={fsd_largecategory}
          mediumCriteria={fsd_mediumcategory}
          smallCriteria={fsd_smallcategory}
          functionalRequirement={fsd_functionalrequirement}
          nonFunctionalRequirement={fsd_nonfunctionalrequirement}
          desc={
            fsd_description
          }
        />
        <DivTableRow
          largeCriteria={"어드민"}
          mediumCriteria={"대시보드"}
          smallCriteria={"마켓 데이터"}
          functionalRequirement={"기능적 요구사항"}
          nonFunctionalRequirement={"비기능적 요구사항"}
          desc={
            "페이지 페이지 진입 시, BE 로 부터, 실시간 거래 까지 반영된 최근 30일 정보를, 잘 받아오는가"
          }
        />


      </div>
    </>
  );
};

export default DivTable;
