import React from "react";

const ClearAllRole = ({selectedFilterOptionArr , handleClearRoles}) => {
  return (
    <>
      {selectedFilterOptionArr?.includes("roles_frontend") 
      || selectedFilterOptionArr?.includes("roles_backend")      
      || selectedFilterOptionArr?.includes("roles_aws")      
      ? (
        <li
          onClick={handleClearRoles}
          className="pl-2  mr-1  flex text-[13px] items-center  rounded-[7px] text-gray-500/80 cursor-pointer hover:bg-neutral-50/90 hover:rounded-[7px]"
        >
          clear 
        </li>
      ) : (
        ""
      )}
    </>
    
  );
};

export default ClearAllRole;
