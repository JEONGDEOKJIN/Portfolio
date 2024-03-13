import React, { useState } from "react";
import ModalFeedbackBox from "./ModalFeedbackBox";
import ModalChatBox from "./ModalChatBox";
import BlueCircle from "./BlueCircle";
import OrangeCircle from "./OrangeCircle";

const MenuSub = () => {
  const [isShowChatBox, setIsShowChatBox] = useState(false);

  const handleSendFeedback = () => {
    setIsShowChatBox(true);
  };

  const handleCancelBtn = () => {
    setIsShowChatBox(false);
  };

  return (
    <>
      <nav className="blur-[0px] bg-white fixed top-0 z-50 w-full overflow-hidden h-[64px] ">
        {/* blur 위에 있는 메뉴탭 */}
        <div className="absolute flex items-center justify-center w-full h-full gap-[24px]">
          <button
            className="px-3 py-1 text-sm font-normal text-white rounded-md bg-stone-800"
            // onClick={handleGetResume}
          >
            Get Resume📛
          </button>

          <button
            className="px-3 py-1 text-sm font-normal text-white rounded-md bg-stone-800"
            // onClick={handleSendFeedback}
          >
            Send Feedback 📛📛
          </button>
        </div>

        {/* blur 효과 */}
        <div className="relative  bg-[#fff6] blur-[5px] justify-center gap-3">
          {/* blur 밑에 들어가면, 불투명하게 보임 ⭐*/}
          <div className="absolute top-0 ">
            <BlueCircle />
          </div>
          <div className="absolute -right-[70px] -top-[50px]">
            <OrangeCircle />
          </div>
        </div>
      </nav>

      {/* 전체 모달 */}
      <ModalFeedbackBox
        handleCancelBtn={handleCancelBtn}
        isShowChatBox={isShowChatBox}
      />

      {/* 이건 우선 남김 */}
      {/* <ModalChatBox
        handleCancelBtn={handleCancelBtn}
        isShowChatBox={isShowChatBox}
      /> */}
    </>
  );
};

export default MenuSub;
