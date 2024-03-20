import React, { useState } from "react";

const useCardDetailItem = () => {
  const [isItemDetailOpened, setIsItemDetailOpened] = useState(false);
  const [clickedDetailedItem, setClickedDetailedItem] = useState(null);

  const handleCardItem = (metaData, metaDataID) => {
    // fetch 요청 보내기
    // isItemDetailOpened(index) : 원래는 우선, 특정 index 인지 확인하고, 해당 index 를 제출

    setIsItemDetailOpened(!isItemDetailOpened); // 처음에 false 였다가, true 로 변함

    const clickedDetailedItemArr = metaData.find(
      (item) => item.id === metaDataID
    );

    setClickedDetailedItem(clickedDetailedItemArr);

    // 모달이 열릴 때, 원본 documment 에 있는 스크롤을 없애기
    document.body.style.overflowY = isItemDetailOpened ? "" : "hidden";
    // isItemDetailOpened : 처음에 false 였다가, true 로 변함

    // setIndexOfItemDetail(metaDataID); // 이건 필요 없지 않나❓❓❓❓❓
    // console.log("indexOfItemDetail", indexOfItemDetail);
    // console.log("metaDataID", metaDataID);
  };

  return {
    isItemDetailOpened,
    setIsItemDetailOpened,
    setClickedDetailedItem,
    clickedDetailedItem,
    handleCardItem,
  };
};

export default useCardDetailItem;
