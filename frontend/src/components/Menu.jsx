import React from "react";

const menuItems = [
  { name: "Home", link: "#" },
  { name: "About", link: "#" },
  { name: "Project", link: "#" },
  { name: "Blog", link: "#" },
];

const Menu = () => {
  return (
    <ul className="flex w-screen ">
      {menuItems.map((item, index) => {
        return (
          <li
            key={index}
            className="w-1/4 transition duration-300 ease-in-out bg-gold-200 hover:bg-crimson-500 hover:w-1/3"
          >
            <a
              href={item.link}
              className="block p-3 text-xl font-bold text-center text-stone-800 hover:text-white"
            >
              {item.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
