import React from "react";

const messageItem = [
  {
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
    amet deleniti totam, expedita quas reiciendis? Quam hic ex
    voluptatum saepe.`,
    image: `HardyTom.webp`,
  },
  {
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
    amet deleniti totam, expedita quas reiciendis? Quam hic ex
    voluptatum saepe.`,
    image: `HardyTom.webp`,
  },
  {
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
    amet deleniti totam, expedita quas reiciendis? Quam hic ex
    voluptatum saepe.`,
    image: `HardyTom.webp`,
  },
];

const MessageList = () => {
  return (
    <>
      <ul>
        {messageItem.map((item, index) => {
          return (
            <li className="flex p-3 mb-6 bg-stone-300">
              {/* <figure className="w-12 h-12 mr-2 bg-green-500 bg-top bg-cover border-2 rounded-2xl shrink-0 bg-[url('./assets/images/BJJTOM.jpg')]  "></figure> */}
              <figure
                className="w-12 h-12 mr-2 bg-green-500 bg-center bg-cover border-2 rounded-2xl shrink-0 "
                // style={{ backgroundImage: `url(${item.image})` }}
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${item.image})`,
                }}
              ></figure>

              {/* 📛 삐져 나오는 코드  */}
              {/* <p className=" message-content">{item.desc}</p> */}

              {/* 🔵 해결 코드 */}
              <p className="min-w-0 break-words message-content">{item.desc}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MessageList;
