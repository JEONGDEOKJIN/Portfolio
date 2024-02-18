import React from "react";

const Dropdown = ({ setSearchDropDown }) => {
  const handleDropDownClose = (e) => {
    e.preventDefault();
    setSearchDropDown(false);
  };

  return (
    <>
      <section className="absolute flex h-32 bg-blue-300 x-full">
        dropdown
        <button onClick={handleDropDownClose}>❎</button>
      </section>
    </>
  );
};

export default Dropdown;
