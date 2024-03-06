import React from 'react'
import VCheck from './VCheck'

const ListOption = ({keywordToDB , keywordToShow , selectedFilterOptionArr , handleFilterDropDownList}) => {
  return (
    <>
        {selectedFilterOptionArr?.includes(`${keywordToDB}`) ? (
          <li
            onClick={() => handleFilterDropDownList(`${keywordToDB}`)}
            className="pl-2 h-[42px] text-sm flex text-[13px] items-center bg-neutral-100 rounded-[7px] text-gray-600 cursor-pointer hover:bg-neutral-50/90 hover:rounded-[7px]"
          >
            {keywordToShow}
            <span className="ml-auto mr-2">
              <VCheck />
            </span>
          </li>
        ) : (
          <li
            onClick={() => handleFilterDropDownList(`${keywordToDB}`)}
            className="pl-2 h-10 text-sm flex text-[13px] items-center text-gray-600 cursor-pointer hover:bg-neutral-50/90 hover:rounded-[7px]"
          >
            {keywordToShow}
          </li>
        )}
    </>
  )
}

export default ListOption