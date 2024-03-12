import React from 'react'
import SVGStarPoint from './SVGStarPoint';

const SVGFeedbackRating = ({feedbackRating, setFeedbackRating, coloredStarNum , setColoredStarNum}) => {
  return (
    <>
        <div className="flex flex-row">
          {/* 1. hover 이벤트를 감지한다.
            2. 몇 번째 index 인지 확인 -> useState 의 setter 로 state 에 저장 
            3. map 에서 해당 state 보다 작으면 -> 색깔 state true 로 변환 
          */}
          
          {[1, 2, 3, 4, 5].map((item, index) => {
            // 클릭 했으면 -> 이전 저장된 값이 보이도록. 그렇지 않으면 gray 가 보이도록
            return feedbackRating != null ? (
              <div
                key={index}
                className="cursor-point"
                onClick={() => setFeedbackRating(index + 1)}
                onMouseEnter={() => setColoredStarNum(index)}
                onMouseLeave={() => setColoredStarNum(index)}
              >
                {index <= coloredStarNum ? (
                  <SVGStarPoint colorValue={"#ffda79"} />
                ) : (
                  <SVGStarPoint colorValue={"#555555"} />
                )}
              </div>
            ) : (
              <div
                key={index}
                className="cursor-point"
                onClick={() => setFeedbackRating(index)}
                onMouseEnter={() => setColoredStarNum(index)}
                onMouseLeave={() => setColoredStarNum(-1)}
              >
                {index <= coloredStarNum ? (
                  <SVGStarPoint colorValue={"#ffda79"} />
                ) : (
                  <SVGStarPoint colorValue={"#555555"} />
                )}
              </div>
            );
          })}
        </div>
    </>
  )
}

export default SVGFeedbackRating