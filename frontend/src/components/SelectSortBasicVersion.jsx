import React from 'react'

const SelectSortBasicVersion = ({setSortOption}) => {
  return (
    <>
      <section className="flex mr-auto x-32">
        <select name="" id="" onChange={(e) => setSortOption(e.target.value)}>
          <option value={"recommended"}> Recommended </option>
          <option value={"title_ascending"}> Title (A to Z)   </option>
          <option value={"title_descending"}> Title (Z to A)   </option>

          <option value={"date_ascending"}>  Past Feature </option>
          <option value={"date_descending"}> Recent Feature </option>
          
        </select>
      </section>

    </>
  )
}

export default SelectSortBasicVersion