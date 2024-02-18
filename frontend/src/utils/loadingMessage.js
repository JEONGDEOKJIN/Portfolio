import React from 'react'

const loadingMessage = (isSearchLoading , isMetaLoading , searchTerm) => {
    
    if(isSearchLoading){
        console.log("현재 검색 진행중 ✅ | 로딩 컴포넌트 필요 ✅");
        return <p> 현재 {searchTerm} 에 대해서 검색 진행중! ✅ | 로딩 컴포넌트 필요 ✅ </p>;
    }

    if(isMetaLoading){
        console.log("현재 fetch 로딩중!✅ | 로딩 컴포넌트 필요 ✅");
        return <p> 현재 로딩중!✅ | 로딩 컴포넌트 필요 ✅ </p>;
    }
  

    return null
}

export default loadingMessage