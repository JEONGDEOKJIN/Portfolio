import React from "react";

const userItem = [
  {
    name: "JEONG JEONGJEONGJEONGJEONGJEONGJEONGJEONGJEONGJEONGJEONG",
    image: `ican.png`,
  },
  {
    name: "DEOK DEOKDEOKDEOKDEOKDEOKDEOKDEOKDEOKDEOKDEOK",
    image: `ican.png`,
  },
  {
    name: "JIN JINJINJINJINJINJINJINJINJINJIN ",
    image: `ican.png`,
  },
];

const UserList = () => {
  return (
    <>
      <ul className="mt-5 user-list friend-list">
        {userItem.map((item, index) => {
          return (
            <li
              key={index}
              className="flex items-center w-[10rem] mb-6 "
            >
              <figure
                className="w-12 h-12 mr-2 bg-center bg-no-repeat bg-cover border-2 rounded-full shrink-0 border-stone-300 "
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${item.image})`,
                }}
              ></figure>

              <p className="truncate">{item.name}</p>
              {/* 
                    truncate = overflow: hidden; + text-overflow: ellipsis; + white-space: nowrap;        
                */}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UserList;
