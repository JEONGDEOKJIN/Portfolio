import React from 'react'

const BtnSurpriseMeStart = () => {
  return (
    <>
          <button
            className="z-50 pr-5 pl-6 py-3 mr-3 ml-auto text-sm font-[500] rounded-full cursor-pointer point-cursor bg-gray-950 text-gray-50 
              hover:bg-gray-600 transition-all duration-500 ease-in hover:shadow-lg "
            // onClick={handleSendFeedback}
          >
            <span className="hover:animate-pulse">Surprise me</span>
            <span className="rounded-xl hover:animate-pulse">🌟</span>
          </button>
    </>
  )
}

export default BtnSurpriseMeStart