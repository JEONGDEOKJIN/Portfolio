import React, { useState } from "react";
import ModalFeedbackBox from "./ModalFeedbackBox";
import ModalChatBox from "./ModalChatBox";

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
      <nav className="flex items-center justify-between px-[16px] py-2 bg-pink-200">
        <div className="flex ">
          <figure
            className="w-5 h-5 bg-green-800 bg-center bg-cover rounded-full shrink-0"
            style={{
              backgroundImage: `url(http://localhost:7070/getImg/images/ican_1707988168150.png)`,
            }}
          ></figure>

          <a className="ml-3 font-semibold" href="/">
            Feature & Project
          </a>
        </div>

        <div className="">
          <button
            className="px-3 py-1 text-sm font-normal text-white rounded-md bg-stone-800"
            onClick={handleSendFeedback}
          >
            Send Feedback 📛📛
          </button>
        </div>
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
