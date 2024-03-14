import React, { useState } from 'react'
import ModalFeedbackBox from './ModalFeedbackBox';


const HeaderProfile = () => {
    const [isShowChatBox, setIsShowChatBox] = useState(false);

    const handleSendFeedback = () => {
        setIsShowChatBox(true);
    };

    const handleCancelBtn = () => {
        setIsShowChatBox(false);
    };

return (
<>
    <header className="flex flex-col items-center mt-16 ">
        <div className="flex flex-row w-full max-w-[1200px]   items-center">
            <div className="flex items-center justify-center ">
                    <figure 
                        className="w-12 h-12 bg-center bg-no-repeat bg-cover rounded-full shrink-0"
                        style={{
                            backgroundImage : `url(${process.env.PUBLIC_URL}/assets/images/JEONGDEOKJIN.jpg)`
                        }}
                        >
                    </figure>                
            </div>
                
            <div className="ml-3 ">
                <span className="font-semibold text-gray-900">
                    JEONG! DEOKJIN
                </span>
            
                <div className="flex flex-row items-center">    
                    <span className="bg-[#4daa57] w-2 h-2 rounded-full my-auto mr-1 animate-pulse  ">
                    </span>
                    
                    <span className="text-[#4daa57] text-[12px]">
                        Frontend Developer
                    </span>
                </div>
        
        </div>

        <button 
            onClick={handleSendFeedback}
            className="px-4 py-3 ml-auto text-sm font-semibold rounded-full cursor-pointer bg-gray-950 text-gray-50 hover:bg-gray-600 ">
            Contact DJ
        </button>
        </div>

        {/* 전체 모달 */}
        <ModalFeedbackBox
            handleCancelBtn={handleCancelBtn}
            isShowChatBox={isShowChatBox}
        />
    </header>
</>
)
}

export default HeaderProfile