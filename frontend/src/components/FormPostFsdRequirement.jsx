import axios from "axios";
import React, { useState } from "react";
export const formData = new FormData(); // formData 객체 생성

const FormPostFsdRequirement = ({ id }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <>
      {/* onSubmit 이벤트 핸들러는 form 태그의 속성에 넣고, 
        보여줄 태그는, <form> </form> 이 사이에 넣으면 됨 
    */}

      <form
        onSubmit={async (event) => {
          event.preventDefault(); // 기본적으로 post 요청을 보내기 때문에, 이 부분 막아주기

          // input 태그의 name 속성으로, 해당 input 에 들어간 value 가져오기
          const fsd_requirement = event.target.fsd_requirement.value;
          const fsd_description = event.target.fsd_description.value;

          // formData 객체에 프로퍼티 바인딩
          formData.append("fsd_requirement", fsd_requirement);
          formData.append("fsd_description", fsd_description);

          console.log("최종 formData 확인👇👇👇");
          for (let [key, value] of formData.entries()) {
            console.log(key, value);
          }

          setIsSubmitting(true); // 중복 제출 방지 위한 상태관리

          try {
            const response = await axios.post(
              `http://localhost:7070/admin/fsd_requirement/${id}`, // item 의 ID 를 전달해야, 외래키에 저장될 수 있음.
              formData,
              {
                // 보내는 데이터가 일반 텍스트 임 -> so, multipar/form-data 를 하면, multer 까지 해줘야 하는데, text 만 있으면 그럴 필요가 없기 때문에, 주석 처리
                // headers: {
                // //   "Content-Type": "multipart/form-data", //✅ file 이 추가되면, multer 랑 같이! 아, file 이니까, 보내는 type 도 바뀌어야 하는구나
                // //   "Content-Type": "application/json",     // 일반 text 만 보낼 때
                // },
                withCredentials: true,
              }
            );
            console.log("create 요청 후 서버에서 완료 응답 받음🔵", response);

            if (response) setIsSubmitting(false);

            // ✅ 페이지 리디렉션
            // const lastId = response.data.id;
            // navigate(`read/${lastId}`)
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {/* 여기에서 부터 form 을 써야 해?  */}
        <div className="flex flex-col w-full h-full gap-10 bg-gold-100 ">
          <div className="flex flex-col w-full bg-gray-300">
            <label className="flex items-center w-full h-10">
              [요구사항] : 기능적 or 비기능적 작성
            </label>
            <textarea
              name="fsd_requirement"
              type="textarea"
              placeholder="✍ [기능] 000 또는 [비기능] 000 이렇게 작성"
              className="w-full h-10 border-2 border-black border-dotted"
            />
          </div>
          <div className="flex flex-col w-full bg-gray-300">
            <label className="flex items-center w-full h-10">[설명]</label>
            <textarea
              name="fsd_description" // name 을 기준으로 append 값을 가져오는거지❓❓
              type="textarea"
              placeholder="✍ 설명 작성"
              className="w-full h-10 border-2 border-black border-dotted"
            />
          </div>

          <input
            disabled={isSubmitting} // isSubmitting 가 true 일 때, 버튼 비활성화 -> 중복제출방지
            type="submit"
            value={"create🔥"}
            className="px-4 py-2 text-white bg-gray-800 rounded-full cursor-pointer w-fit"
          />
        </div>
      </form>
    </>
  );
};

export default FormPostFsdRequirement;
