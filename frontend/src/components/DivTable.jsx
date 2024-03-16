import React from "react";
import DivTableRowHeader from "./DivTableRowHeader";
import DivTableRow from "./DivTableRow";

const DivTable = ({
  metaData,
  // selectedfeatureID,
  fsd_largecategory,
  fsd_mediumcategory,
  fsd_smallcategory,
  // fsd_functionalrequirement,
  // fsd_nonfunctionalrequirement,
  // fsd_description,
  // fsd_status,
}) => {
  // 여기로 metaData 를 가져온다.
  // 현재 item 의 값을 알 수 있다.
  // 그러면, 해당 item 과 동일한 featureID 를 가진 item 을 모두 가져온다.
  // 그걸로, divTableRow 를 map 돌린다.

  // const sameFeatureIDArr = metaData.filter(
  //   (item) => item.featureID === selectedfeatureID
  // );

  return (
    <>
      <div className="flex flex-col border-t-1 border-neutral-200 mt-[15px]">
        <DivTableRowHeader
          largeCriteria={"대분류"}
          mediumCriteria={"중분류"}
          smallCriteria={"소분류"}
          functionalRequirement={"기능 및 비기능 요구사항"}
          desc={"설명"}
        />

        {metaData.map((item, index) => {
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
        })}

        {/* <DivTableRow
          largeCriteria={"어드민"}
          mediumCriteria={"대시보드"}
          smallCriteria={"마켓 데이터"}
          functionalRequirement={"기능적 요구사항"}
          nonFunctionalRequirement={"비기능적 요구사항"}
          desc={
            "페이지 페이지 진입 시, BE 로 부터, 실시간 거래 까지 반영된 최근 30일 정보를, 잘 받아오는가"
          }
        /> */}
      </div>
    </>
  );
};

export default DivTable;
