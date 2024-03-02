import React, { useState } from "react";

const MenuSub = () => {
  const [isShowChatBox, setIsShowChatBox] = useState(false);

  const handleSendFeedback = () => {
    setIsShowChatBox(true);
  };

  const handleCancelBtn = () => {
    setIsShowChatBox(false);
  };

  return (
    <>
      <nav className="flex items-center justify-between px-[16px] py-2 bg-pink-200">
        <div className="flex ">
          <figure
            className="w-5 h-5 bg-green-800 bg-center bg-cover rounded-full shrink-0"
            style={{
              backgroundImage: `url(http://localhost:7070/getImg/images/ican_1707988168150.png)`,
            }}
          ></figure>

          <a className="ml-3 font-semibold" href="/">
            Feature & Project
          </a>
        </div>

        <div className="">
          <button
            className="px-3 py-1 text-sm font-normal text-white rounded-md bg-stone-800"
            onClick={handleSendFeedback}
          >
            Send Feedback 📛📛
          </button>
        </div>
      </nav>

      {/* chat box : 핀터레스트 클론 */}
      {isShowChatBox ? (
        <section className="bg-blue-300">
          <div className="top-0 z-50 h-full w-[360px] transition-all duration-100 ease-linear; fixed right-0">
            {/* 애니메이션 원본은 이거 : transition: top 100ms linear 0s; */}
            <div className="mt-[96px] h-100vh-96px relative bg-gray-200 rounded-2xl shadow-lg overscroll-none transition-all duration-100 ease-linear">
              <div className="h-[64px] flex flex-row items-center justify-between">
                <p className="ml-2 text-base"> 피드백 보내기🚀 </p>
                <div className="mr-2 cursor-pointer" onClick={handleCancelBtn}>
                  {" "}
                  ❎
                </div>
              </div>

              <input type="text" className="rounded-lx" />
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default MenuSub;
