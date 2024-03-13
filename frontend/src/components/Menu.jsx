  import React from "react";
  import OrangeCircle from "./OrangeCircle";
  import BlueCircle from "./BlueCircle";

  const menuItems = [
    { name: "Home", link: "#" },
    { name: "About", link: "#" },
    { name: "Project", link: "#" },
    { name: "Blog", link: "#" },
  ];

  const Menu = () => {
    const handleGetResume = () => {
      alert(
        "파일 다운로드 | 특정 asset 에 해당 파일이 있어야 함 | 로고 이미지 assets 에서 가져오는 것과 유사 "
      );
    };

    return (
      <div className="relative">
          
        {/* 하얀색 배경이 있어야 -> 밑으로 내려가도, 투명색으로 안 됨  */}
        <div className="fixed z-30 h-[64px] w-full bg-white">          
          
          {/* button layer */}
          <div className="z-50 gap-[20px] h-full flex items-center justify-center w-full ">
            <button
              className="z-50 px-3 py-1 text-sm font-normal text-white rounded-md bg-stone-800"
              // onClick={handleGetResume}
            >
              Get Resume📛
            </button>

            <button
              className="z-50 px-3 py-1 text-sm font-normal text-white rounded-md bg-stone-800"
              // onClick={handleSendFeedback}
            >
              Send Feedback 📛📛
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
        <nav className="absolute top-[64px] h-[100px] z-50  flex w-full justify-between bg-neutral-50 ">
          <section className="flex ">
            <figure
              className="w-8 h-8 bg-green-800 bg-center bg-cover rounded-full shrink-0"
              style={{
                backgroundImage: `url(http://localhost:7070/getImg/images/ican_1707988168150.png)`,
              }}
            ></figure>

            <a className="flex items-center ml-3 font-semibold" href="/">
              DJJ
            </a>

            <ul className="flex ml-3">
              <li className="flex items-center ml-3">About📛</li>
              <li className="flex items-center ml-3">Github📛</li>
              <li className="flex items-center ml-3">Blog📛</li>
            </ul>
          </section>

          <section className="">
            <button
              className="px-3 py-1 text-sm font-normal text-white rounded-md bg-stone-800"
              onClick={handleGetResume}
            >
              Get Resume📛
            </button>
          </section>
        </nav>
      
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
        
      </div>
      


    );
  };

  export default Menu;
