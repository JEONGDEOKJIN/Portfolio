import React from "react";
import InputCreateFeedback from "./InputCreateFeedback";

const ModalFeedbackBox = ({ handleCancelBtn, isShowChatBox }) => {
  return (
    <>
      {isShowChatBox ? (
        <section className="fixed inset-0 z-30 w-full h-full transition-all duration-300 ease-linear bg-black/70 ">
          <div className="z-50 h-auto w-[773px]  p-[56px] bg-gray-100 rounded-[32px] fixed flex flex-row gap-[32px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <div className="flex flex-col flex-wrap justify-between ">
              <div className="flex gap-[10px] flex-col   mr-[40px]">
                <h3 className="text-[32px] font-[400]">Request more info</h3>

                <div>
                  <p className="text-[16px] font-[400] text-gray-800 leading-[1.8em]">
                    Submit your contact details to receive the complete UI
                    Certificate course syllabus, have your questions answered by
                    phone or email, and receive valuable career advice with no
                    obligations!
                  </p>
                </div>
              </div>

              <div className="flex gap-[16px] flex-col mt-10">
                <p className="text-[14px] font-[400] text-gray-800 leading-[28px]">
                  “I got a new job as a product designer! I am deeply grateful
                  for the UX Design Institute.”
                </p>

                <div className="flex flex-row ">
                  <div className="w-[60px] h-[60px] bg-blue-300 rounded-full flex items-center justify-center">
                    사진
                  </div>
                  <div className="flex flex-col flex-wrap">
                    <p className="text-[14px] font-semibold text-gray-900">
                      Jeong! Deokjin
                    </p>
                    <p className="text-[14px] text-gray-600">
                      FrontEnd Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
            
                <InputCreateFeedback />

            </div>

            <div
              className="absolute ml-auto mr-2 cursor-pointer right-3 top-5"
              onClick={handleCancelBtn}
            >
              ❎
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default ModalFeedbackBox;
