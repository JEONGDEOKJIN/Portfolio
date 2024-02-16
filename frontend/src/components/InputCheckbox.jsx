import React from "react";

const InputCheckbox = ({value , handleCheckBoxInput , selectedFilterOptionArr }) => {
    
    return (
    <>
      <label>
        <input
          type="checkbox"
          value= {value}
          onChange={handleCheckBoxInput}
          checked={selectedFilterOptionArr?.includes(value)}
        />
        {value}
      </label>
    </>
  );
};

export default InputCheckbox;
