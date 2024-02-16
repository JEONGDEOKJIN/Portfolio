import axios from "axios";

const fetchAllMetaData = async () => {
    try {    
      const response = await axios.get(
        `http://localhost:7070/meta_data/allMetaData`
      );
      
      if(response) return response.data   
        // axios 설계상, 실제 응답 본문을 data 에 담기 때문
        // 즉, 백엔드에서 if(allItem) return res.status(200).send(allItem) 이렇게 응답을 함 
        // 그러면, allItem 은 하나의 객체인데, 이게, 응답본문(response.data) 에 고스란히 담김
        // 그래서, response.data 으로 '응답 본문'에 접근하면, 바로 받을 수 있어. 
    

    } catch (error) {
      console.log(error)
    }
}

export default fetchAllMetaData