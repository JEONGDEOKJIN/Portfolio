import React from "react";

const BtnSubmitFeedback = ({isSubmitting}) => {
  return (
    <>
      <button 
        type="submit"
        disabled={isSubmitting} // isSubmitting 가 true 일 때, 버튼 비활성화 -> 중복제출방지
        className="px-5 py-2 ml-auto text-sm font-medium rounded-full cursor-pointer bg-gray-950 text-gray-50 hover:bg-gray-600 ">
        Submit feedback
      </button>
    </>
  );
};

export default BtnSubmitFeedback;
