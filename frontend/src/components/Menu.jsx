import React, { useState } from "react";
import OrangeCircle from "./OrangeCircle";
import BlueCircle from "./BlueCircle";
import ModalFeedbackBox from "./ModalFeedbackBox";

const menuItems = [
  { name: "Home", link: "#" },
  { name: "About", link: "#" },
  { name: "Project", link: "#" },
  { name: "Blog", link: "#" },
];

const Menu = () => {
  const [isShowChatBox, setIsShowChatBox] = useState(false);

  const handleSendFeedback = () => {
    setIsShowChatBox(true);
  };

  const handleCancelBtn = () => {
    setIsShowChatBox(false);
  };

  const handleGetResume = () => {
    // 파일 경로 넣기
    const fileUrl = `${process.env.PUBLIC_URL}/assets/files/resume_0313.pdf`;
    // [사진 가져오는 url 참고] url(${process.env.PUBLIC_URL}/assets/images/${item.image})
    // [이것 gitignore 해야 하나?] gitignore 하지 않음. 그러면, 어떻게 다운 받을 수 있게 하는지는 백엔드 통신 참고

    // a 태그를 동적으로 생성
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "resume_0313.pdf"); // 다운로드할 파일명을 설정

    // body에 태그를 추가하고, click 이벤트를 강제로 발생 -> 그러면, a 태그의 href 주소로 요청이 감
    document.body.appendChild(link);
    link.click();

    // 다운로드가 시작된 후에는 더 이상 필요 없으므로 a 태그를 제거 (이벤트 클리닝)
    document.body.removeChild(link);
  };

  return (
    <div className="relative">
      {/* 하얀색 배경이 있어야 -> 밑으로 내려가도, 투명색으로 안 됨  */}
      <div className="fixed z-30 h-[64px] w-full bg-neutral-50">
        {/* button layer */}
        <div className="z-50 gap-[20px] h-full flex items-center justify-center w-full ">
          {/* <button
            className="z-50 px-3 py-1 text-sm font-normal text-white rounded-md bg-stone-800"
            // onClick={handleGetResume}
          >
            Get Resume📛
          </button> */}

          <button
            className="z-50 px-6 py-3 text-sm font-[500] rounded-full cursor-pointer point-cursor bg-gray-950 text-gray-50 
              hover:bg-gray-600 transition-all duration-500 ease-in hover:shadow-lg"
            onClick={handleSendFeedback}
          >
            Send Feedback
          </button>

          <button
            className="z-50 px-6 py-3 text-sm font-[500] text-gray-800 rounded-full cursor-pointer border-[1px] border-gray-800 point-cursor bg-neutral-50 
              hover:bg-neutral-200 transition-all duration-500 ease-in hover:border-none "
            onClick={handleGetResume}
          >
            Download Resume
          </button>
        </div>

        {/* blur layer */}
        <div className="fixed z-30 overflow-hidden top-0 h-[64px] w-full bg-[#fff6] blur-[10px] justify-center gap-3">
          {/* blur 용으로 하나 놓고, 잘린 부분은 그 다음 으로 하나 놓는다 -top-[550px] -right-[320px] 여기에서 top 이 164차이 (위에 blur layer 들의 height 들을 합침) */}
          <div className="absolute -z-10 -top-[550px] -right-[400px]">
            <OrangeCircle />
          </div>

          <div className="absolute -z-10 -top-[406px] -left-[500px]">
            <BlueCircle />
          </div>
        </div>
      </div>

      {/* 가운데 sub menu */}
      <div className="absolute top-[64px] h-[100px] z-50  flex flex-row w-full justify-center items-center bg-white ">
        <ul className="flex  w-[33.333%] mr-auto ml-3 cursor-pointer">
          <li className="flex items-center ml-3">
            {" "}
            <a href="https://tropical-trouser-a8d.notion.site/5fe2f6f3f2bd448c9d4cee3c59185f35?v=ab8fecd13c0c4d56a98d0bf30b19eadc">
              Dev Wiki
            </a>{" "}
          </li>
          <li className="flex items-center ml-3">
            <a href="https://github.com/JEONGDEOKJIN">Github</a>
          </li>
          <li className="flex items-center ml-3">
            {" "}
            <a href="https://deokjin.gitbook.io/dj/">Blog</a>
          </li>
        </ul>

        <div className="flex flex-row items-center w-[33.333%] justify-center ">
          <figure
            className="w-8 h-8 bg-green-800 bg-center bg-cover rounded-full shrink-0"
            style={{
              backgroundImage: `url(http://localhost:7070/getImg/images/ican_1707988168150.png)`,
            }}
          ></figure>

          <a className="flex items-center font-semibold" href="/">
            DJJ
          </a>
        </div>

        <div className="flex items-center  w-[33.333%] ">
          <button
            className="px-3 py-1 ml-auto mr-3 text-sm font-normal text-white rounded-md bg-stone-800"
            onClick={handleGetResume}
          >
            I am lucky
          </button>
        </div>
      </div>

      {/* 본문 Blue & Orange Circle  */}
      <div className="absolute overflow-hidden top-[110px] w-full h-[500px] ">
        {/* blur 용으로 하나 놓고, 잘린 부분은 그 다음 으로 하나 놓는다 | 이때, 잘린 부분은 top 을 '부모 태그의 top' 만큼 다시 올려준다. ⭐
              이렇게 하는 이유는 overflow hidden 을 이용하기 위해서 ⭐⭐ | 다만, 좀 더 쉬운 방법이 있으면 그걸 활용해야 한다. 
            */}
        <div className="absolute -z-10 -top-[700px] -right-[400px]">
          <OrangeCircle />
        </div>

        <div className="absolute -z-10 -top-[570px] -left-[500px]">
          <BlueCircle />
        </div>
      </div>

      {/* 전체 모달 */}
      <ModalFeedbackBox
        handleCancelBtn={handleCancelBtn}
        isShowChatBox={isShowChatBox}
      />
    </div>
  );
};

export default Menu;
