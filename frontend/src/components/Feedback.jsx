import axios from 'axios';
import React, { useState } from 'react'
import { formData } from '../page/crud_test/Update';
import postFeedback from '../fetch/ItemList/postFeedback';

const Feedback = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    

  return (
    <>
        <form
            onSubmit={ async (event) => {
                event.preventDefault();

                const title = event.target.title.value; // name 을 title 로 했기 때문에 가능함 | 아마도, 객체 안에 key 로 들어갔겠지.
                const email = event.target.email.value;
                const message = event.target.message.value;

                formData.append("title", title);
                formData.append("email", email);
                formData.append("message", message);

                console.log("최종 formData 확인👇👇👇");
                for (let [key, value] of formData.entries()) {
                  console.log(key, value);
                }

                setIsSubmitting(true);

                // 피드백 post 로 보내기 
                postFeedback(formData, setIsSubmitting)

            } }
        >

        <section>
            
            <input
                className="block p-2 m-2"
                type="text"
                name="title"
                placeholder="✍ 오류 상황 요약 해주세요 "
            />

            <input
                className="block p-2 m-2"
                type="text"
                name="email"
                placeholder="👐 email 주소를 알려주세요 "
            />
            
            <input
                className="block p-2 m-2"
                type="text"
                name="message"
                placeholder="💭 오류 상황을 자세히 설명해주세요 "
            />
            
        </section>


        </form>
    
    </>
  )
}

export default Feedback