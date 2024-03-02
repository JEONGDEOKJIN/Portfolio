import React from "react";

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
    <nav className="py-[16px] px-[15px] flex w-full justify-between">
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
  );
};

export default Menu;
