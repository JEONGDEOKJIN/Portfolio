import React from 'react'

const MarqueeInfiniteLoop = () => {
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

    return (
    <>

    </>
  )
}

export default MarqueeInfiniteLoop