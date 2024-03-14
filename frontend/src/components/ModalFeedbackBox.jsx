import React from "react";
import InputCreateFeedback from "./InputCreateFeedback";
import BlueCircle from "./BlueCircle";
import OrangeCircle from "./OrangeCircle";
import BlueCircleSmall from "./BlueCircleSmall";
import OrangeCircleSmall from "./OrangeCircleSmall";
import IconCancel from "./IconCancel";

const ModalFeedbackBox = ({ handleCancelBtn, isShowChatBox }) => {
  return (
    <>
      {isShowChatBox ? (
        <section className="fixed inset-0 z-[60] w-full h-full transition-all duration-300 ease-linear bg-black/70 ">
          <div className="z-50 h-auto w-[773px]  p-[56px] bg-gray-100 rounded-[32px] overflow-hidden fixed flex flex-row gap-[40px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <div className="flex flex-col flex-wrap gap-[40px] border-r-[1px]">
              <div className="flex gap-[42px]  flex-col mr-[40px]">
                <h3 className="text-[32px] font-[600] text-gray-800">
                  말씀해주세요 <br></br> 개선하겠습니다.
                </h3>

                <div>
                  <p className="text-[14px] font-[400] text-gray-700 leading-[1.8em] flex flex-col gap-[12px]">
                    <span>
                      바쁘셨을텐데, 포트폴리오 검토해주셔서 감사합니다.{" "}
                      <br></br>
                      빠르게 지원자의 역량을 체크할 수 있도록 다양한 정보 탐색
                      기능을 넣어보았는데, 도움이 되셨을지요.
                    </span>

                    <span>
                      저에게서 원하는 역량을 찾으셨나요? 다행이네요. 😔{" "}
                      <br></br>
                    </span>

                    <span>
                      찾지 못 하셨다면, 알려주세요. <br></br>
                      꼭, 새롭게 익혀서 개선하고 싶습니다! 🙏 <br></br>
                    </span>

                    <span className="text-[14px]">
                      1. 프론트엔드 개발자로써, '저는 어떤점을 보완' 해야
                      할까요? <br></br>
                      2. '합격 여부를 빠르게 체크' 하기 위해 필요한 기능이
                      있으세요?
                    </span>

                    <span>
                      '진짜 문제가 되는 것'을 해결하는 개발자가 되겠습니다.
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex  flex-col mr-[40px]">
                {/* <p className="text-[15px] font-[400] text-gray-600 leading-[28px]">
                  “I got a new job as a product designer! I am deeply grateful
                  for the UX Design Institute.”
                </p> */}

                <div className="flex flex-row items-center">
                  <div className="w-[60px] h-[60px] bg-blue-300 rounded-full flex items-center justify-center">
                    사진
                  </div>
                  <div className="flex flex-col flex-wrap ml-4">
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

            {/* <div className="absolute z-0 left-[0px] transform translate-y-1/3"> */}
            <div className="absolute z-0 -left-[250px]  top-[180px]  ">
              <BlueCircleSmall />
            </div>

            <div className="absolute -z-10 -right-[210px] -bottom-[385px]">
              <OrangeCircleSmall />
            </div>

            <div>
              <InputCreateFeedback />
            </div>

            <div
              className="absolute ml-auto mr-2 cursor-pointer right-3 top-5"
              onClick={handleCancelBtn}
            >
              <IconCancel />
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
