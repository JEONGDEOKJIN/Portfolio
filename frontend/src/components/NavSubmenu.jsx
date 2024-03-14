import React from "react";

const NavSubmenu = () => {
  return (
    <>
      {/* 목차들 */}

      <ul className="flex ml-3 cursor-pointer text-[14px] font-[600]">
        <li className="flex items-center ml-3 transition-all duration-200 ease-in-out hover:text-neutral-500">
          <a href="https://tropical-trouser-a8d.notion.site/5fe2f6f3f2bd448c9d4cee3c59185f35?v=ab8fecd13c0c4d56a98d0bf30b19eadc">
            Wiki
          </a>
        </li>
        <li className="flex items-center ml-3 transition-all duration-200 ease-in-out hover:text-neutral-500">
          <a href="https://github.com/JEONGDEOKJIN">Github</a>
        </li>
        <li className="flex items-center ml-3 transition-all duration-200 ease-in-out hover:text-neutral-500">
          
          <a href="https://deokjin.gitbook.io/dj/">Blog</a>
        </li>
      </ul>
    </>
  );
};

export default NavSubmenu;
