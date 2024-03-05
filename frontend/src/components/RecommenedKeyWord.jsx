import React from "react";

const RecommenedKeyWord = ({keyword}) => {
return (
<>
    <li className="mr-3 ">
    <a
        className="
                text-sm border-gray-100 font-noraml text-slate-800 border-[1px] rounded-[40px] 
                py-2
                px-6
                hover:border-gray-500
                transition-all
                ease-in-out
                delay-200
                cursor-pointer
                "
    >
        {keyword}
    </a>
    </li>
</>
);
};

export default RecommenedKeyWord;
