import React from 'react'

const BtnSendFeedbackSmall = () => {
  return (
    <>
          <button
            className="z-50 px-3 py-1 text-sm font-normal text-white rounded-md bg-stone-800"
            onClick={handleSendFeedback}
          >
            Send Feedback
          </button>
    </>
  )
}

export default BtnSendFeedbackSmall