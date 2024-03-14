import React from "react";

const BtnSurprisemeAnimate = () => {
  return (
    <>
          <button
            className="z-50 px-6 py-3 mr-3 ml-auto text-sm font-[500] rounded-full cursor-pointer point-cursor bg-gray-950 text-gray-50 
              hover:bg-gray-600 transition-all duration-500 ease-in hover:shadow-lg "
            onClick={handleSendFeedback}
          >
            <span className="hover:animate-pulse">Surprise me</span> 
            <span className="ml-1 bg-[#273995] rounded-full hover:animate-pulse">🌟</span>
          </button>
    </>
  );
};

export default BtnSurprisemeAnimate;
