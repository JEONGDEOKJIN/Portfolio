import React from "react";
import Feedback from "../components/Feedback";
import { Navigate } from "react-router-dom";


const errorMessage = (isSearchError, isMetaError, searchTerm) => {


  
  if (isSearchError) {
    console.log("ItemList, 해당 키워드에 대한 검색이 없음", isSearchError);
    return  (
      <>        

    {/* <Navigate to="/feedback" replace /> */}
    
        <h1> No results found for <span className="bg-indigo-300"> {searchTerm} </span> </h1> 
        
        <Feedback />
        
        <p> 검색 에러 발생📛📛📛📛📛 | 관리자 문의 연락처 👉 010-6368-0416 </p>;
      </>
    )
  }
  

  if (isMetaError) {
    console.log("ItemList, data fetching error 발생", isMetaError);
    return (
      <p>
        {" "}
        data fetch 에러 발생📛📛📛📛📛 | 관리자 문의 연락처 👉 010-6368-0416{" "}
      </p>
    );
  }

  return null;
};

export default errorMessage;
