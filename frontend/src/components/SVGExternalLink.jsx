import React from "react";

const SVGExternalLink = () => {
  return (
    <>
      <div className="group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="#2e2e2e"
            strokeLinecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"
            className="transition duration-200 ease-in-out group-hover:stroke-gray-400 groudp-hover"
          />
        </svg>
      </div>
    </>
  );
};

export default SVGExternalLink;
