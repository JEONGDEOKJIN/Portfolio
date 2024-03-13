import React from "react";

const InputCreateFeedbackShot = ({ isInputError, labelName, inputName }) => {
  return (
    <>
      <div className="">
        <label className="text-[13px] mx-1">
          {labelName} <span className="ml-[-3px] text-[#f2545b]">*</span>
        </label>
        <input
          className={`
          w-[230px] block p-2 my-[2px] min-h-[27px] text-[16px] text-[#33475b] border-[1px]  focus:border-[#52a8eccc] outline-0  h-[40px] px-[15px] rounded-[15px] max-w-[100%] bg-neutral-100
        ${isInputError === true ? "border-[#c87872]" : "border-[#cbd6e2]"}
        `}
          type="text"
          name={inputName}
        />
        {isInputError ? (
          <p className="text-[#f2545b] mx-1 text-[14px]">
            Please complete this required field.
          </p>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default InputCreateFeedbackShot;
