import React from "react";

const InputCreateFeedback = () => {
  return (
    <>
      <div className="mb-5">

        <input
          className="block p-2 m-2"
          type="text"
          name="feedbackName"
          placeholder="✍피드백 주시는 분 이름"
        />

        <input
          className="block p-2 m-2"
          type="text"
          name="feedbackEmail"
          placeholder="✍피드백 주시는 분 이메일"
        />

        {/* 세부 기능 : 좀 더 세련되게 업그레이드 필요✅ */}
        <textarea
          className="block p-2 m-2"
          type="text"
          name="feedbackDesc"
          placeholder="✍ 이런 부분 저런 부분"
        />
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
