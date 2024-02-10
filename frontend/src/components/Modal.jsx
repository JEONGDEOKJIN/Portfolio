import React from "react";

const Modal = () => {
  return (
    <>
      {/* 뒷 배경을 불투명하게 보이게 하기 */}
      {/* 1. rgba(0,0,0, 0.3) 으로 모달 뒷 부분을 불투명하게 주는 경우 */}
      {/* <div className="fixed inset-0 flex items-center justify-center bg-black/30"> */}

      {/* 2. ⭐⭐ rgba(0,0,0, 0.3) + backdrop-blur 효과를 준다. | 살짝 안 보이게 하는 것, 에 더해서, blur 효과를 주기 */}
      <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
        
        <div className="z-10 w-4/5 max-w-screen-md p-4 bg-white rounded-lg shadow-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            magnam, suscipit itaque eaque tenetur nisi velit ullam aliquam
            magnam, suscipit itaque eaque tenetur nisi velit ullam aliquam
            magnam, suscipit itaque eaque tenetur nisi velit ullam aliquam
            magnam, suscipit itaque eaque tenetur nisi velit ullam aliquam
            neque! Facere
        </div>
      </div>
    </>
  );
};

export default Modal;
