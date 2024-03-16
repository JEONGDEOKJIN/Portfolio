import React from "react";
import { useQuery } from "react-query";
import ULAdminCardList from "../../components/ULAdminCardList";
import fetchAllMetaData from "../../fetch/ItemList/fetchAllMetaData";
import statusMessages from "../../utils/statusMessages";

const AdminBoard = () => {
  // 기본 metaData 검색 useQuery
  const {
    data: metaData,
    isLoading: isMetaLoading,
    error: isMetaError,
  } = useQuery("metaData", fetchAllMetaData);
  console.log("metaData fetching 값", metaData);

  // 에러 및 로딩 메시지
  const statusMessageComponent = statusMessages(
    isMetaLoading,
    isMetaError,
    metaData
  );
  if (statusMessageComponent) return statusMessageComponent;

  return (
    <>
      <section>
        <h1>지금 저장되어 있는 것들 모두 보이게 하기</h1>

        {metaData && (
          <div>
            <ULAdminCardList metaData={metaData} />;
          </div>
        )}
      </section>
    </>
  );
};

export default AdminBoard;
