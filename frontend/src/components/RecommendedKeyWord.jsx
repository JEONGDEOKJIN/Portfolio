import React from "react";

const RecommendedKeyWord = ({ keyword, setSearchBarInput, setIsSubmitClicked, setSearchTerm }) => {
  const handleRecommendedKeyWord = () => {
    setSearchBarInput(keyword)  // 검색필드에 해당 키워드가 들어간 것 처럼 보이게 하기
    setSearchTerm(keyword);  // a 태그 에서는, 이벤트 핸들러 속성이 없기 때문에, e.target.value 를 사용하지 않음 
    setIsSubmitClicked(true);  // 검색 버튼이 실제로 눌린 것 처럼 동작하게 하기
};

  return (
    <>
      <li className="mr-3 ">
        <a
          className="
                text-sm font-noraml text-slate-800 border-neutral-200 border-[1px] rounded-[40px] 
                py-2
                px-6
                hover:border-gray-500
                transition-all
                ease-in-out
                delay-200
                cursor-pointer
                "
          onClick={handleRecommendedKeyWord}
        >
          {keyword}
        </a>
      </li>
    </>
  );
};

export default RecommendedKeyWord;
