import React from "react";

const message = [
{
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam harum ea minima ex necessitatibus commodi quisquam consequuntur est iste? Natus fuga ipsam libero quis quam!`,
},
{
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam harum ea minima ex necessitatibus commodi quisquam consequuntur est iste? Natus fuga ipsam libero quis quam!",
},
{
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam harum ea minima ex necessitatibus commodi quisquam consequuntur est iste? Natus fuga ipsam libero quis quam!",
},
];


const BulletList = () => {
return (
    <>
        <ul className="info-list">
            {message.map((item, index) => {
                return (
                    <li key={index} className="info-list-item before:content-['✺']  ">
                    {item.desc}
                    </li>
                );
            })}
        </ul>
    </>
);
};

export default BulletList;
