import axios from 'axios';
import React from 'react'

const postFeedback = async (formData, setIsSubmitting) => {

    try {
        const response = await axios.post(
            `http://localhost:7070/feedback/searchError`,
            formData, 
            {
                headers : {
                    "Content-Type" : "application/json"
                }, 
                withCredentials : true,
            }
        )
        console.log("@검색 에러 페이지")
        console.log("고객이 피드백 제출 후 서버 응답 받음🔵" ,response)
        
        if (response) setIsSubmitting(false);
        
        // 페이지 리디렉션 추가✅


    } catch (error) {
        console.log(error)
    }

}

export default postFeedback