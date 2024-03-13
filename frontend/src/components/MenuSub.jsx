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
      <nav className=" px-[16px] py-2 blur-[0px] bg-white sticky">

          <div>
            <button
              className="px-3 py-1 text-sm font-normal text-white rounded-md bg-stone-800"
              // onClick={handleGetResume}
            >
              Get Resume📛
            </button>
          </div>

          <div className="">
            <button
              className="px-3 py-1 text-sm font-normal text-white rounded-md bg-stone-800"
              onClick={handleSendFeedback}
            >
              Send Feedback 📛📛
            </button>
          </div>
      <div className="relative flex items-center bg-[#fff6] blur-[5px] justify-center gap-3">        </div>
        
        <BlueCircle />
        <OrangeCircle />
        
      </nav>

      {/* 전체 모달 */}
      <ModalFeedbackBox
        handleCancelBtn={handleCancelBtn}
        isShowChatBox={isShowChatBox}
      />

      {/* <ModalChatBox
        handleCancelBtn={handleCancelBtn}
        isShowChatBox={isShowChatBox}
      /> */}
    </>
  );
};

export default MenuSub;
