import React from "react";

const emailValidCheck = (email) => {

    const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

    if(pattern.test(email) === false) { return false; }
    else { return true; }   

    return <></>;
};

export default emailValidCheck;
