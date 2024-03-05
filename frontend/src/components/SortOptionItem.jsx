import React from 'react'

const SortOptionItem = ({}) => {
  return (
    <>
        {sortOption === 'recommended' 
        ? <li
          onClick={() => handleSortDropDownList("recommended", "Recommended")}
          className="pl-2 h-[42px] text-sm flex text-[13px] items-center bg-neutral-100 rounded-[7px] text-gray-600 cursor-pointer hover:bg-neutral-50/90 hover:rounded-[7px]"
        >
          Recommended
          <span className="ml-auto mr-2"> 
          <VCheck />
          </span>
        
        </li>
        : <li
          onClick={() => handleSortDropDownList("recommended", "Recommended")}
          className="pl-2 h-10 text-sm flex text-[13px] items-center text-gray-600 cursor-pointer hover:bg-neutral-50/90 hover:rounded-[7px]"
        >
          Recommended
        </li>
       }
    </>
  )
}

export default SortOptionItem