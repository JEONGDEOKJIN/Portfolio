import React from "react";
import errorMessage from "./errorMessage";
import loadingMessage from "./loadingMessage";


const statusMessages = (isLoading, isError, data) => {
    if (!data || data.length === 0) {
        return <p>DB에서 가져온 metaData가 없습니다.</p>;
      }
    
      if (isError) {
        return errorMessage(isError);
      }
    
      if (isLoading) {
        return loadingMessage(isLoading);
      }
    
      return null;};

export default statusMessages;


