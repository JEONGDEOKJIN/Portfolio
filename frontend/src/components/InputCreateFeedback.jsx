import React, { useEffect, useState } from "react";
import InputCreateFeedbackShot from "./InputCreateFeedbackShot";
import TextareaCreateFeedbackShot from "./TextareaCreateFeedbackShot";
import SVGStarPoint from "./SVGStarPoint";
import BtnContactDJ from "./BtnContactDJ";
import BtnSubmitFeedback from "./BtnSubmitFeedback";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const InputCreateFeedback = ({setIsShowChatBox}) => {
  const [isInputError, setInputError] = useState(true);
  const [feedbackName, setFeedbackName] = useState(null);
  const [feedbackEmail, setFeedbackEmail] = useState(null);
  const [feedbackDesc, setFeedbackDesc] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showFeedbackNameError, setShowFeedbackNameError] = useState(false)

  // 📛 피드백 별점 받은 것 post 보내야 함
  const [feedbackRating, setFeedbackRating] = useState(null);

  const [coloredStarNum, setColoredStarNum] = useState(-1);

  const [isFormValidity , setIsFormValidity] = useState(false)

  const navigate = useNavigate()

  // ✅ 
  const handleSubmit = async (e) => {
    e.preventDefault(); // form 태그의 기본동작인 폼 제출 기본 이벤트 방지

    // form 객체 생성
    const formData = new FormData();
    
    // 유효성 검사 
    const isFeedbackNameValid = feedbackName !== null && feedbackName.trim() !== ''; // 비어있지 않으면, true
    setShowFeedbackNameError(!isFeedbackNameValid) // 유효하면(isFeedbackNameValid == true) 이면 -> 에러메시지 안 보여줌 

    // const isFeedbackEmailValid = feedbackEmail !== null && feedbackEmail.trim() !== ''; // 비어있지 않으면, true
    // setShowFeedbackEmailError(!isFeedbackEmailValid) // 유효하면(isFeedbackEmailValid == true) 이면 -> 에러메시지 안 보여줌 

    // 모든 유효성 검사 통과 여부 : 전체가 true 면 -> isFormValidity 이게 true
    const isFormValidity = isFeedbackNameValid 
    
    if(isFormValidity){
      formData.append("email", feedbackEmail);
      formData.append("description", feedbackDesc);
      formData.append("ratings", feedbackRating);
      
      console.log("feedback message 보낼 때, 담긴 formData 확인👇👇👇");
      for (let [key, value] of formData.entries()) {
        console.log(key, value);
      }
  
      setIsSubmitting(true); // 중복 제출 방지 위한 상태관리
  
      // axios 로 form 객체 보내기
      try {
        const response = await axios.post(
          `http://localhost:7070/feedbackmessage`, 
          formData,
          {
            // 보내는 데이터가 일반 텍스트 일 경우 : 추가 header 설정 하지 않음 
            // 보내는 데이터가 파일, 이미지 등일 경우 : multipart/form-data 설정 
                // headers: {
                  // //   "Content-Type": "multipart/form-data", //✅ file 이 추가되면, multer 랑 같이! 아, file 이니까, 보내는 type 도 바뀌어야 하는구나
                // },
            withCredentials : true
          }
        )
        console.log("feedback create 요청 후 서버에서 완료 응답 받음🔵", response);
  
        if (response) setIsSubmitting(false);
        
        if(response.status === 200){
          alert("제출 완료 입니다! 빠르게 파악해서 반영하게요🙏")
          setIsShowChatBox(false)
          navigate(`/`) // 리디렉션
        } else { 
          alert("제출 에러입니다. 다시 시도해주세요😔")
          navigate(`/`) // 리디렉션
        }
        
        // ✅ 페이지 리디렉션
          // const lastId = response.data.id;
          // navigate(`read/${lastId}`)
        
      } catch (error) {
        console.log("feedbackmessage post 요청 보낼 때, error 발생 " , error) // error 표기도 잘 짜야 함
      }
    }
  };

  useEffect(() => {
    console.log("feedbackRating 별점확인", feedbackRating);
  }, [feedbackRating]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 mb-5 ">
          <InputCreateFeedbackShot
            isInputError={isInputError}
            labelName="Name"
            inputName="feedbackName"
            showErrorMessageBoolean = {isFeedbackNameValid}
            setValue={setFeedbackName}
            />
          <InputCreateFeedbackShot
            isInputError={isInputError}
            labelName="Email"
            inputName="feedbackEmail"
            setValue={setFeedbackEmail}
            // showErrorMessageBoolean = {isFeedbackEmailValid}
            
          />
          <TextareaCreateFeedbackShot
            isInputError={isInputError}
            labelName="Description"
            textareaName="feedbackDesc"
            setValue={setFeedbackDesc}
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
                    onClick={() => setFeedbackRating(item)}
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
            {/* 컴포넌트 내부에서 button 태그의 속성으로 type = 'submit' 을 넣어서, submit 이벤트 발생 */}
            <BtnSubmitFeedback isSubmitting={isSubmitting} />
          </div>
        </div>
      </form>
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
