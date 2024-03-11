import React from "react";
import DivTableRowHeader from "./DivTableRowHeader";
import DivTableRow from "./DivTableRow";

const DivTable = () => {
  return (
    <>
      <div className="flex flex-col border-t-1 border-neutral-200 mt-[15px]">
        <DivTableRowHeader
          largeCriteria={"대분류"}
          mediumCriteria={"중분류"}
          smallCriteria={"소분류"}
          requirement={"요구사항"}
          desc={"설명"}
        />

        <DivTableRow
          largeCriteria={"어드민"}
          mediumCriteria={"대시보드"}
          smallCriteria={"마켓 데이터"}
          requirement={"최근 마켓 30일 데이터 요청"}
          desc={
            "페이지 페이지 진입 시, BE 로 부터, 실시간 거래 까지 반영된 최근 30일 정보를, 잘 받아오는가"
          }
        />

        <DivTableRow
          largeCriteria={"어드민"}
          mediumCriteria={"대시보드"}
          smallCriteria={"마켓 데이터"}
          requirement={"최근 마켓 30일 데이터 요청"}
          desc={
            "페이지 페이지 진입 시, BE 로 부터, 실시간 거래 까지 반영된 최근 30일 정보를, 잘 받아오는가"
          }
        />

        <DivTableRow
          largeCriteria={"어드민"}
          mediumCriteria={"대시보드"}
          smallCriteria={"마켓 데이터"}
          requirement={"최근 마켓 30일 데이터 요청"}
          desc={
            "페이지 페이지 진입 시, BE 로 부터, 실시간 거래 까지 반영된 최근 30일 정보를, 잘 받아오는가"
          }
        />
      </div>
    </>
  );
};

export default DivTable;
