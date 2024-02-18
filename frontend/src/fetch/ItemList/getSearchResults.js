import axios from "axios";

const getSearchResults = async (searchTerm) => {
  if (!searchTerm.trim()) return []; // 검색어가 없는 경우

  console.log("searchTerm✅ @getSearchResults" , searchTerm)

  const response = await axios.get(
    // encodeURIComponent : 인자로 들어온 검색어를 인코딩 해준다.
    `http://localhost:7070/meta_data/search?query=${encodeURIComponent(
      searchTerm
    )}`
  );

  if (response) return response.data;
};

export default getSearchResults;
