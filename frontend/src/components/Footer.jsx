import React from "react";

const Footer = () => {
  return (
    <>
      {/* blog 주소, wiki 주소, github 주소는 nav 에서도 사용함. 변경시 필수 확인 */}
      {/* footer */}
      <section className="text-[14px] text-gray-500 flex flex-row items-center justify-start">
        <div className="  flex flex-row  justify-between w-[80%]  px-[32px] mx-auto py-12  max-w-[1200px] text-center">
          <div className="">© 2024 Jeong! Deokjin</div>

          <div className="flex flex-row ">
            <a className="ml-2 " href="https://tropical-trouser-a8d.notion.site/5fe2f6f3f2bd448c9d4cee3c59185f35?v=ab8fecd13c0c4d56a98d0bf30b19eadc">
              Wiki
            </a>
            <a className="ml-2 " href="https://github.com/JEONGDEOKJIN">
              Github
            </a>
            <a className="ml-2 " href="https://deokjin.gitbook.io/dj/">
              Blog
            </a>

          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
