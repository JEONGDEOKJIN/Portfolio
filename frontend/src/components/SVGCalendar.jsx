import React from "react";

const SVGCalendar = () => {
  return (
    <>
      <div className="group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          className=""
        >
          <path
            stroke="#7e7e7e"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            d="M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM16 2v4M8 2v4M3 10h18"
            className="group-hover:stroke-searchBoxBorder100/80"
          />
        </svg>
      </div>
    </>
  );
};

export default SVGCalendar;
