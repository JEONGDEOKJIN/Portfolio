import React from "react";

const Footer = () => {
  return (
    <>
      {/* footer */}
      <section className="text-[14px] text-gray-500 flex flex-row items-center justify-start">
        <div className="  flex flex-row  justify-between w-[80%]  px-[32px] mx-auto py-12  max-w-[1200px] text-center">
          <div className="">© 2024 Jeong! Deokjin</div>

          <div className="flex flex-row ">
            <a className="" href="">
              {" "}
              ✅ Git hub 주소
            </a>
            <a className="ml-2 " href="">
              {" "}
              ✅ Blog{" "}
            </a>
            <a className="ml-2 " href="">
              {" "}
              ✅ Resume {" "}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
