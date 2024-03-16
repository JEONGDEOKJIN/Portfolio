import React from "react";

const AdminItem = ({ name, column }) => {
  return (
    <>
      <span className="font-medium text-gray-900 truncate ">
        {name} : {column}
      </span>
    </>
  );
};

export default AdminItem;
