import React, { useEffect, useState } from "react";
import InputCreateFeedbackShot from "./InputCreateFeedbackShot";
import TextareaCreateFeedbackShot from "./TextareaCreateFeedbackShot";
import SVGStarPoint from "./SVGStarPoint";
import BtnContactDJ from "./BtnContactDJ";
import BtnSubmitFeedback from "./BtnSubmitFeedback";

const InputCreateFeedback = () => {
  const [isInputError, setInputError] = useState(true);

  // 📛 피드백 별점 받은 것 post 보내야 함
  const [feedbackRating, setFeedbackRating] = useState(null);

  const [coloredStarNum, setColoredStarNum] = useState(-1);

  useEffect(() => {
    console.log("feedbackRating 별점확인", feedbackRating);
  }, [feedbackRating]);

  return (
    <>
      <div className="flex flex-col gap-4 mb-5 ">
        <InputCreateFeedbackShot
          isInputError={isInputError}
          labelName="Name"
          inputName="feedbackName"
        />
        <InputCreateFeedbackShot
          isInputError={isInputError}
          labelName="Email"
          inputName="feedbackEmail"
        />
        <TextareaCreateFeedbackShot
          isInputError={isInputError}
          labelName="Description"
          textareaName="feedbackDesc"
        />
        {/* 별점 : 클릭 했으면 -> 해당 rating 저장 -> 그에 따라, 색깔 순서 변경 */}
        <div>
          <label className="text-[13px] mx-1">
            Ratings <span className="ml-[-3px] text-[#f2545b]">*</span>
          </label>
          <div className="flex flex-row">
            {[1, 2, 3, 4, 5].map((item, index) => {
              return feedbackRating != null ? (
                <div
                  key={index}
                  className="cursor-point"
                  onClick={() => setFeedbackRating(index + 1)}
                  onMouseEnter={() => setColoredStarNum(index)}
                  onMouseLeave={() => setColoredStarNum(index)}
                >
                  {index <= coloredStarNum ? (
                    <SVGStarPoint colorValue={"#ffda79"} />
                  ) : (
                    <SVGStarPoint colorValue={"#555555"} />
                  )}
                </div>
              ) : (
                <div
                  key={index}
                  className="cursor-point"
                  onClick={() => setFeedbackRating(index)}
                  onMouseEnter={() => setColoredStarNum(index)}
                  onMouseLeave={() => setColoredStarNum(-1)}
                >
                  {index <= coloredStarNum ? (
                    <SVGStarPoint colorValue={"#ffda79"} />
                  ) : (
                    <SVGStarPoint colorValue={"#555555"} />
                  )}
                </div>
              );
            })}
          </div>
          {isInputError ? (
            <p className="text-[#f2545b] mx-1 text-[14px]">
              Please complete this required field.
            </p>
          ) : (
            ""
          )}
        </div>

        {/* 제목 & 이름 수정 예정 */}
        <div className="mt-3">
          <BtnSubmitFeedback />
        </div>
      </div>
    </>
  );
};

export default InputCreateFeedback;

// {/* 제목, 요약, 하위 기능 */}
// <div className="mb-5">

//   {/* title : 프로젝트 제목, 기능 구현 제목 */}
//   <input
//     className="block p-2 m-2"
//     type="text"
//     name="title"
//     placeholder="✍프로젝트 제목 또는 기능구현 제목"
//   />

//   {/* 업무 요약 (task summary, summary) */}
//   <textarea
//     className="block p-2 m-2"
//     type="text"
//     name="summary"
//     placeholder="✍프로젝트 또는 feature 요약"
//   />

//   {/* 세부 기능 : 좀 더 세련되게 업그레이드 필요✅ */}
//   <textarea
//     className="block p-2 m-2"
//     type="text"
//     name="subTasks"
//     placeholder="✍프로젝트만! 콤마! 로 구분! 세부 하위 기능 적기"
//   />
// </div>
