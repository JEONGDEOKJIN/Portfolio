import React, { useState } from "react";
import ModalFeedbackBox from "./ModalFeedbackBox";

const ProfileSection = () => {
  const [isShowChatBox, setIsShowChatBox] = useState(false);

  const handleSendFeedback = () => {
      setIsShowChatBox(true);
  };

  const handleCancelBtn = () => {
      setIsShowChatBox(false);
  };
  
  
  return (
    <>
      <section className="flex flex-col flex-wrap  mt-20 gap-[8px] ">
        <div className="flex flex-row ">
          <span className="w-full border-neutral-200 border-t-[1px] my-auto"></span>
          <div className="w-[72px] shrink-0 h-[72px] flex justify-center items-center rounded-full mx-[24px] ">
            <figure
              className="w-[72px] h-[72px] shrink-0 bg-center bg-no-repeat bg-cover rounded-full"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/JEONGDEOKJIN.jpg)`,
              }}
            ></figure>
          </div>
          <span className="w-full border-neutral-200 border-t-[1px] my-auto"></span>
        </div>

        <h5 className="text-[20px] font-medium text-gray-900 text-center mt-[8px]">
          Jeong! Deokjin
        </h5>

        <div className="text-center text-gray-600 text-[14px]">
          <p>효율적인 방식으로</p>
          <p>좋은 잔상이 남을 수 있게 만듭니다.</p>
        </div>

        <button 
          onClick={handleSendFeedback}
          className="px-4 py-3 mx-auto ml-auto text-sm font-semibold rounded-full cursor-pointer mt-[8px] bg-gray-950 text-gray-50 hover:bg-gray-600 ">
          Contact DJ
        </button>
      
        {/* 전체 모달 */}
          <ModalFeedbackBox
            handleCancelBtn={handleCancelBtn}
            isShowChatBox={isShowChatBox}
        />

      </section>
    </>
  );
};

export default ProfileSection;
