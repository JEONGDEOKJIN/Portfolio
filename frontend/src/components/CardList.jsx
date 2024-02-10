import React from "react";

const cardItem = [
  {
    desc: "Lorem ",
    image: "bjjjjjjjjjjj.jpg",
  },
  {
    desc: `Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum`,
    image: "bjjjjjjjjjjj.jpg",
  },
  {
    desc: `Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum`,
    image: "bjjjjjjjjjjj.jpg",
  },
  {
    desc: `Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum`,
    image: "bjjjjjjjjjjj.jpg",
  },
  {
    desc: `Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum`,
    image: "bjjjjjjjjjjj.jpg",
  },
  {
    desc: `Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum`,
    image: "bjjjjjjjjjjj.jpg",
  },
  {
    desc: `Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum`,
    image: "bjjjjjjjjjjj.jpg",
  },
  {
    desc: `Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
\            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum`,
    image: "bjjjjjjjjjjj.jpg",
  },
];

const CardList = () => {
  return (
    <>
      <ul className="flex flex-col min-h-screen cardListGridContainer ">
        {cardItem.map((item, index) => {
          return (
            <li key={index} className="flex flex-col mb-8">
              <figure
                className="h-0 bg-top bg-no-repeat bg-cover pb-60p"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${item.image})`,
                }}
              ></figure>
              <div className="flex-auto p-3 font-medium text-stone-900 bg-mediumseagreen-200">
                {item.desc}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CardList;
