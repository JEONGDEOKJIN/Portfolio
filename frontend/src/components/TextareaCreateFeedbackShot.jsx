import React from "react";

const TextareaCreateFeedbackShot = ({
  isInputError,
  labelName,
  textareaName,
  setValue, 
}) => {

  const handleTextareaChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <>
      <div>
        <label className="text-[13px] mx-1">
          {labelName} <span className="ml-[-3px] text-[#f2545b]">*</span>
        </label>
        <textarea
          className={`
          block my-[2px] p-2 min-h-[30px] w-full text-[16px] text-[#33475b] border-[1px]  focus:border-[#52a8eccc] outline-0  h-[100px] px-[15px] rounded-[15px] max-w-[100%] bg-neutral-100
        ${isInputError === true ? "border-[#c87872]" : "border-[#cbd6e2]"}
        `}
          type="text"
          name={textareaName}
          onChange={handleTextareaChange}
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

export default TextareaCreateFeedbackShot;
